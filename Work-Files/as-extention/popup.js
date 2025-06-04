document.addEventListener('DOMContentLoaded', () => {
    const teamIdInput = document.getElementById('teamId');
    const teamPasswordInput = document.getElementById('teamPassword');
    const saveBtn = document.getElementById('saveBtn');
    const statusMessage = document.getElementById('statusMessage');
  
    // Load saved values
    chrome.storage.sync.get(['teamId', 'teamPassword'], data => {
      teamIdInput.value = data.teamId || '';
      teamPasswordInput.value = data.teamPassword || '';
    });
  
    saveBtn.addEventListener('click', () => {
      const teamId = teamIdInput.value.trim();
      const teamPassword = teamPasswordInput.value.trim();
  
      if (!teamId || !teamPassword) {
        statusMessage.textContent = 'Please enter Team ID and Password';
        return;
      }
  
      chrome.storage.sync.set({ teamId, teamPassword }, () => {
        chrome.runtime.sendMessage({ action: 'forceSync' }, (response) => {
          if (response?.success) {
            statusMessage.textContent = 'Synced successfully!';
          } else {
            statusMessage.textContent = `Error: ${response?.message || 'Unknown error'}`;
          }
        });
      });
    });
  });
  