try {
  const token = localStorage.getItem("auth_token") ||
                localStorage.getItem("token") ||
                (document.cookie.match(/session_token=([^;]+)/)?.[1]);

  if (token) {
    chrome.runtime.sendMessage({ action: "saveToken", token });
  } else {
    console.log("Token not found.");
  }
} catch (err) {
  console.error("Error capturing token:", err);
}
