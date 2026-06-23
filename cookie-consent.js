(function () {
  'use strict';

  var STORAGE_KEY = 'ff-cookie-consent';
  var LANG_KEY = 'ff-lang';
  var CONSENT_VERSION = 1;
  var FONT_HREF =
    'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap';

  var STRINGS = {
    de: {
      title: 'Cookies & Datenschutz',
      text:
        'Wir verwenden technisch notwendige Speicher (z.\u00a0B. Sprache und Ihre Cookie-Wahl). ' +
        'Optional können Schriftarten von Google Fonts geladen werden — dabei kann Ihre IP-Adresse an Google übermittelt werden. ' +
        'Details in der <a href="privacy-policy.html#cookies">Datenschutzerklärung</a>.',
      accept: 'Alle akzeptieren',
      decline: 'Nur notwendige',
      settings: 'Cookie-Einstellungen',
    },
    en: {
      title: 'Cookies & privacy',
      text:
        'We use strictly necessary storage (e.g. language and your cookie choice). ' +
        'Optionally, fonts may be loaded from Google Fonts — your IP address may be sent to Google. ' +
        'See our <a href="privacy-policy.html#cookies">Privacy Policy</a> for details.',
      accept: 'Accept all',
      decline: 'Only necessary',
      settings: 'Cookie settings',
    },
  };

  function detectLang() {
    var stored = localStorage.getItem(LANG_KEY);
    if (stored === 'de' || stored === 'en') return stored;
    return navigator.language && navigator.language.toLowerCase().startsWith('de') ? 'de' : 'en';
  }

  function t(key) {
    var lang = detectLang();
    var bucket = STRINGS[lang] || STRINGS.de;
    return bucket[key] != null ? bucket[key] : STRINGS.de[key] || '';
  }

  function readConsent() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      var data = JSON.parse(raw);
      if (!data || data.v !== CONSENT_VERSION) return null;
      if (data.choice !== 'accepted' && data.choice !== 'declined') return null;
      return data;
    } catch (e) {
      return null;
    }
  }

  function saveConsent(choice) {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        v: CONSENT_VERSION,
        choice: choice,
        ts: new Date().toISOString(),
      })
    );
  }

  function loadGoogleFonts() {
    if (document.getElementById('ff-google-fonts')) return;
    var pre1 = document.createElement('link');
    pre1.rel = 'preconnect';
    pre1.href = 'https://fonts.googleapis.com';
    document.head.appendChild(pre1);
    var pre2 = document.createElement('link');
    pre2.rel = 'preconnect';
    pre2.href = 'https://fonts.gstatic.com';
    pre2.crossOrigin = 'anonymous';
    document.head.appendChild(pre2);
    var link = document.createElement('link');
    link.id = 'ff-google-fonts';
    link.rel = 'stylesheet';
    link.href = FONT_HREF;
    document.head.appendChild(link);
  }

  function hideBanner() {
    var banner = document.getElementById('cookie-banner');
    if (banner) banner.hidden = true;
  }

  function showBanner() {
    var banner = document.getElementById('cookie-banner');
    if (!banner) return;
    banner.querySelector('.cookie-banner__title').textContent = t('title');
    banner.querySelector('.cookie-banner__text').innerHTML = t('text');
    banner.querySelector('[data-cookie-accept]').textContent = t('accept');
    banner.querySelector('[data-cookie-decline]').textContent = t('decline');
    banner.hidden = false;
  }

  function applyChoice(choice, showUi) {
    saveConsent(choice);
    if (choice === 'accepted') loadGoogleFonts();
    if (showUi !== false) hideBanner();
    document.dispatchEvent(
      new CustomEvent('ff-cookie-consent', { detail: { choice: choice } })
    );
  }

  function bindSettingsLinks() {
    document.querySelectorAll('[data-cookie-settings]').forEach(function (el) {
      if (el.getAttribute('data-cookie-bound') === '1') return;
      el.setAttribute('data-cookie-bound', '1');
      if (el.tagName === 'BUTTON') {
        el.textContent = t('settings');
      } else {
        el.textContent = t('settings');
      }
      el.addEventListener('click', function (e) {
        e.preventDefault();
        showBanner();
      });
    });
  }

  function createBanner() {
    if (document.getElementById('cookie-banner')) return;
    var banner = document.createElement('div');
    banner.id = 'cookie-banner';
    banner.className = 'cookie-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-live', 'polite');
    banner.setAttribute('aria-label', t('title'));
    banner.innerHTML =
      '<div class="cookie-banner__inner">' +
      '<p class="cookie-banner__title"></p>' +
      '<p class="cookie-banner__text"></p>' +
      '<div class="cookie-banner__actions">' +
      '<button type="button" class="cookie-banner__btn cookie-banner__btn--decline" data-cookie-decline></button>' +
      '<button type="button" class="cookie-banner__btn cookie-banner__btn--accept" data-cookie-accept></button>' +
      '</div></div>';
    document.body.appendChild(banner);

    banner.querySelector('[data-cookie-accept]').addEventListener('click', function () {
      applyChoice('accepted');
    });
    banner.querySelector('[data-cookie-decline]').addEventListener('click', function () {
      applyChoice('declined');
    });
  }

  function init() {
    createBanner();
    bindSettingsLinks();

    var consent = readConsent();
    if (consent) {
      if (consent.choice === 'accepted') loadGoogleFonts();
      hideBanner();
      return;
    }

    showBanner();
  }

  window.ForFutureCookieConsent = {
    readConsent: readConsent,
    openSettings: showBanner,
    accept: function () {
      applyChoice('accepted');
    },
    decline: function () {
      applyChoice('declined');
    },
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
