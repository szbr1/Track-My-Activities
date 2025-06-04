chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "saveToken" && request.token) {
    chrome.storage.local.set({ token: request.token }, () => {
      console.log("Token saved:", request.token);
    });
  }
});
