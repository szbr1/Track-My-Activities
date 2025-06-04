const CONFIG = {
  DOMAIN: 'udemy.com',
  SYNC_SERVER: 'https://your-sync-server.com/api',
  TEAM_ID: 'TEAM-12345', // Change this to your actual team ID
  SYNC_INTERVAL: 30, // Seconds
  ENCRYPTION_KEY: 'secure-key-123' // Change this in production
};

// Initialize on install
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ 
    teamId: CONFIG.TEAM_ID,
    authData: [],
    lastSync: null
  });
  chrome.alarms.create('syncAlarm', { periodInMinutes: CONFIG.SYNC_INTERVAL / 60 });
});

// Message handling
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'forceSync') {
    syncAuthData()
      .then(() => sendResponse({ success: true, message: 'Sync successful' }))
      .catch(err => sendResponse({ success: false, message: err.message }));
    return true; // Keep the message port open
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
});

// Alarm handler for periodic sync
chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'syncAlarm') syncAuthData();
});

// Main sync function
async function syncAuthData() {
  try {
    const cookies = await chrome.cookies.getAll({ domain: CONFIG.DOMAIN });
    const authCookies = cookies.filter(isAuthCookie).filter(c => !isHighlySensitive(c));
    
    await chrome.storage.sync.set({
      authData: authCookies,
      lastSync: new Date().toISOString()
    });
    
    console.log(`Synced ${authCookies.length} auth cookies`);
    return true;
  } catch (error) {
    console.error('Sync failed:', error);
    throw error;
  }
}

// Cookie filtering functions
function isAuthCookie(cookie) {
  const authNames = ['access_token', 'ud_user_jwt', 'sessionid'];
  return authNames.some(name => cookie.name.toLowerCase().includes(name));
}

function isHighlySensitive(cookie) {
  const sensitiveNames = ['payment', 'credit', 'billing'];
  return sensitiveNames.some(name => cookie.name.toLowerCase().includes(name));
}

// Initial sync
syncAuthData();