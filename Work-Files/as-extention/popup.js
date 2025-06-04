document.addEventListener('DOMContentLoaded', initPopup);

async function initPopup() {
  // Elements
  const teamIdEl = document.getElementById('teamId');
  const statusEl = document.getElementById('syncStatus');
  const indicatorEl = document.getElementById('statusIndicator');
  const storageStatusEl = document.getElementById('storageStatus');
  const checkBtn = document.getElementById('checkStorageBtn');
  const syncBtn = document.getElementById('syncNowBtn');

  // Load initial status
  const status = await getStatus();
  updateUI(status);
  
  // Button handlers
  checkBtn.addEventListener('click', async () => {
    storageStatusEl.textContent = 'Checking...';
    const status = await getStatus();
    updateUI(status);
    storageStatusEl.textContent = `Found ${status.cookieCount} auth cookies`;
  });
  
  syncBtn.addEventListener('click', async () => {
    storageStatusEl.textContent = 'Syncing...';
    try {
      const response = await chrome.runtime.sendMessage({ action: 'forceSync' });
      if (response.success) {
        const status = await getStatus();
        updateUI(status);
        storageStatusEl.textContent = 'Sync successful!';
      } else {
        storageStatusEl.textContent = `Sync failed: ${response.message}`;
        indicatorEl.className = 'status-indicator inactive';
      }
    } catch (error) {
      storageStatusEl.textContent = `Sync error: ${error.message}`;
      indicatorEl.className = 'status-indicator inactive';
    }
  });
}

async function getStatus() {
  return new Promise(resolve => {
    chrome.runtime.sendMessage({ action: 'getStatus' }, response => {
      resolve(response || {
        teamId: 'Not configured',
        cookieCount: 0,
        lastSync: null
      });
    });
  });
}

function updateUI(status) {
  // Update team ID
  document.getElementById('teamId').textContent = status.teamId;
  
  // Update status indicator
  const indicator = document.getElementById('statusIndicator');
  if (status.cookieCount > 0) {
    indicator.className = 'status-indicator active';
    document.getElementById('syncStatus').textContent = 
      `Synced (${status.cookieCount} cookies)`;
  } else {
    indicator.className = 'status-indicator inactive';
    document.getElementById('syncStatus').textContent = 'No auth data';
  }
  
  // Update last sync time if available
  if (status.lastSync) {
    const syncTime = new Date(status.lastSync).toLocaleTimeString();
    document.getElementById('storageStatus').textContent = 
      `Last sync: ${syncTime}`;
  }
}