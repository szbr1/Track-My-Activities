const CONFIG = {
  DOMAIN: 'udemy.com',
  SYNC_SERVER: 'https://your-deployed-server.com/api/sync', // ✅ replace with real endpoint
  SYNC_INTERVAL: 30, // seconds
  ENCRYPTION_KEY: 'secure-key-123' // You should rotate this in production
};

// On install or update
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({
    teamId: '',
    teamPassword: '',
    authData: [],
    lastSync: null
  });
  chrome.alarms.create('syncAlarm', { periodInMinutes: CONFIG.SYNC_INTERVAL / 60 });
});

// Periodic sync
chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'syncAlarm') syncAuthData();
});

// Handle messages
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'forceSync') {
    syncAuthData().then(() => {
      sendResponse({ success: true, message: 'Sync successful' });
    }).catch(err => {
      sendResponse({ success: false, message: err.message });
    });
    return true;
  }

  if (request.action === 'getStatus') {
    chrome.storage.sync.get(['teamId', 'authData', 'lastSync'], (data) => {
      sendResponse({
        teamId: data.teamId || 'Not configured',
        cookieCount: data.authData?.length || 0,
        lastSync: data.lastSync
      });
    });
    return true;
  }

  if (request.action === 'updateTeamCredentials') {
    chrome.storage.sync.set({
      teamId: request.teamId,
      teamPassword: request.teamPassword
    }, () => {
      sendResponse({ success: true });
    });
    return true;
  }
});

// Main sync logic
async function syncAuthData() {
  const { teamId, teamPassword } = await chrome.storage.sync.get(['teamId', 'teamPassword']);
  if (!teamId || !teamPassword) throw new Error('Team credentials not set');

  const cookies = await chrome.cookies.getAll({ domain: CONFIG.DOMAIN });
  const authCookies = cookies.filter(isAuthCookie).filter(c => !isHighlySensitive(c));

  const payload = {
    teamId,
    teamPassword,
    authCookies: encrypt(JSON.stringify(authCookies), CONFIG.ENCRYPTION_KEY)
  };

  const response = await fetch(CONFIG.SYNC_SERVER, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (!response.ok) throw new Error('Failed to sync with server');

  await chrome.storage.sync.set({
    authData: authCookies,
    lastSync: new Date().toISOString()
  });

  console.log(`✅ Synced ${authCookies.length} auth cookies`);
}

// Helpers
function isAuthCookie(cookie) {
  const authNames = ['access_token', 'ud_user_jwt', 'sessionid'];
  return authNames.some(name => cookie.name.toLowerCase().includes(name));
}

function isHighlySensitive(cookie) {
  const sensitiveNames = ['payment', 'credit', 'billing'];
  return sensitiveNames.some(name => cookie.name.toLowerCase().includes(name));
}

// Dummy encryption (replace with real crypto in production)
function encrypt(data, key) {
  return btoa(`${key}:${data}`);
}
