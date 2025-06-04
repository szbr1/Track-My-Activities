(function() {
  'use strict';

  const CONFIG = {
    CHECK_INTERVAL: 5000,
    LOGIN_URL: '/join/login-popup',
    DASHBOARD_URL: '/home/my-courses',
    PROFILE_URL: '/user/edit-profile'
  };

  let isMonitoring = false;

  function isLoginPage() {
    return window.location.pathname.includes('/join/login') ||
           window.location.pathname.includes('/join/signup') ||
           document.querySelector('form[data-purpose="login-form"]') !== null ||
           document.querySelector('form[data-purpose="signup-form"]') !== null;
  }

  function monitorLoginState() {
    if (isMonitoring) return;
    isMonitoring = true;
    
    const loginForm = document.querySelector('form[data-purpose="login-form"]') ||
                     document.querySelector('form[data-purpose="signup-form"]');
    
    if (loginForm) {
      loginForm.addEventListener('submit', handleLoginSubmit);
    }
    
    const observer = new MutationObserver(() => {
      checkForSuccessfulLogin();
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  function checkForSuccessfulLogin() {
    if (window.location.pathname.includes('/home') ||
        window.location.pathname.includes('/course/')) {
      notifyLoginSuccess();
      return;
    }
    
    const udemyAuthIndicators = [
      document.querySelector('[data-purpose="header-avatar"]'),
      document.querySelector('[data-purpose="user-dropdown"]'),
      document.querySelector('.header--user-profile--2hVJF'),
      document.querySelector('.js-header-user-dropdown'),
      document.querySelector('.header__user')
    ];
    
    if (udemyAuthIndicators.some(el => el !== null)) {
      notifyLoginSuccess();
    }
  }

  function handleLoginSubmit(event) {
    event.preventDefault();
    setTimeout(() => {
      checkForSuccessfulLogin();
    }, 3000);
  }

  function notifyLoginSuccess() {
    chrome.runtime.sendMessage({ action: 'loginSuccess' }, (response) => {
      console.log('Login success notified to background');
    });
  }

  function verifyDomain() {
    const allowedDomains = ['udemy.com', 'www.udemy.com'];
    const currentDomain = window.location.hostname;
    return allowedDomains.some(domain => 
      currentDomain === domain || currentDomain.endsWith('.' + domain)
    );
  }

  if (verifyDomain()) {
    if (isLoginPage()) {
      monitorLoginState();
    } else {
      checkForSuccessfulLogin();
    }
  } else {
    console.warn('Udemy Team Auth Sync: Not on Udemy domain');
  }
})();