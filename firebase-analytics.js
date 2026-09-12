(function () {
  'use strict';

  var FIREBASE_VERSION = '11.10.0';
  var firebaseConfig = {
    apiKey: 'AIzaSyA4VJG-ZJK2nXtnju-6LMEZ-LrSOQO2aoM',
    authDomain: 'forfuture-ca143.firebaseapp.com',
    projectId: 'forfuture-ca143',
    storageBucket: 'forfuture-ca143.firebasestorage.app',
    messagingSenderId: '527640697730',
    appId: '1:527640697730:web:ba6cc711dc8fface620d9b',
    measurementId: 'G-19SJ3FVRX1',
  };

  var analyticsInstance = null;
  var startPromise = null;
  var logEventFn = null;
  var setCollectionEnabledFn = null;

  function firebaseUrl(pkg) {
    return 'https://www.gstatic.com/firebasejs/' + FIREBASE_VERSION + '/' + pkg + '.js';
  }

  function start() {
    if (analyticsInstance) {
      if (setCollectionEnabledFn) setCollectionEnabledFn(analyticsInstance, true);
      return Promise.resolve(analyticsInstance);
    }
    if (startPromise) return startPromise;

    startPromise = Promise.all([
      import(firebaseUrl('firebase-app')),
      import(firebaseUrl('firebase-analytics')),
    ])
      .then(function (mods) {
        var initializeApp = mods[0].initializeApp;
        var getApp = mods[0].getApp;
        var getApps = mods[0].getApps;
        var getAnalytics = mods[1].getAnalytics;
        var isSupported = mods[1].isSupported;
        var setAnalyticsCollectionEnabled = mods[1].setAnalyticsCollectionEnabled;
        logEventFn = mods[1].logEvent;
        setCollectionEnabledFn = setAnalyticsCollectionEnabled;

        return isSupported().then(function (supported) {
          if (!supported) return null;
          var app = getApps().length ? getApp() : initializeApp(firebaseConfig);
          analyticsInstance = getAnalytics(app);
          setAnalyticsCollectionEnabled(analyticsInstance, true);
          return analyticsInstance;
        });
      })
      .catch(function () {
        startPromise = null;
        return null;
      });

    return startPromise;
  }

  function stop() {
    if (analyticsInstance && setCollectionEnabledFn) {
      setCollectionEnabledFn(analyticsInstance, false);
    }
  }

  function track(eventName, params) {
    if (!analyticsInstance || !logEventFn) return;
    try {
      logEventFn(analyticsInstance, eventName, params || {});
    } catch (e) {
      /* ignore */
    }
  }

  function applyConsent(choice) {
    if (choice === 'accepted') {
      start();
    } else {
      stop();
    }
  }

  window.ForFutureAnalytics = {
    start: start,
    stop: stop,
    track: track,
    applyConsent: applyConsent,
  };

  document.addEventListener('ff-cookie-consent', function (e) {
    if (e && e.detail) applyConsent(e.detail.choice);
  });

  if (window.ForFutureCookieConsent && window.ForFutureCookieConsent.readConsent) {
    var existing = window.ForFutureCookieConsent.readConsent();
    if (existing && existing.choice === 'accepted') start();
  }
})();
