(function () {
  'use strict';

  var STORAGE_KEY = 'ff-cookie-consent';
  var LANG_KEY = 'ff-lang';
  var CONSENT_VERSION = 2;
  var FONT_HREF =
    'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap';

  var INLINE_CSS =
    '.cookie-banner{position:fixed;inset:auto 0 0 0;z-index:10000;background:#fff;border-top:1px solid #e5e7eb;box-shadow:0 -4px 24px rgba(17,19,24,.08);font-family:system-ui,-apple-system,"Segoe UI",sans-serif;font-size:15px;line-height:1.45;color:#374151}' +
    '.cookie-banner[hidden]{display:none!important}' +
    '.cookie-banner__inner{display:flex;align-items:center;justify-content:space-between;gap:20px;max-width:1120px;margin:0 auto;padding:14px 24px}' +
    '.cookie-banner__message{margin:0;flex:1 1 auto;min-width:0}' +
    '.cookie-banner__text{color:#374151}' +
    '.cookie-banner__learn{margin-left:6px;color:#111318;text-decoration:underline;font-weight:500;white-space:nowrap}' +
    '.cookie-banner__learn:hover{color:#00a8cc}' +
    '.cookie-banner__actions{display:flex;flex-shrink:0;align-items:center;gap:10px}' +
    '.cookie-banner__btn{min-height:40px;padding:8px 20px;border-radius:8px;font-family:inherit;font-size:14px;font-weight:600;cursor:pointer;white-space:nowrap;transition:background .2s,border-color .2s,color .2s}' +
    '.cookie-banner__btn--decline{background:#fff;color:#111318;border:1px solid #d1d5db}' +
    '.cookie-banner__btn--decline:hover{background:#f9fafb;border-color:#9ca3af}' +
    '.cookie-banner__btn--accept{background:#111318;color:#fff;border:1px solid #111318}' +
    '.cookie-banner__btn--accept:hover{background:#2a2f36;border-color:#2a2f36}' +
    '.cookie-settings-link{display:inline;margin:0;padding:0;border:none;background:none;color:inherit;font:inherit;text-decoration:underline;cursor:pointer}' +
    '.cookie-settings-link:hover{color:#00a8cc}' +
    'body.has-cookie-banner{padding-bottom:72px}' +
    '@media(max-width:640px){body.has-cookie-banner{padding-bottom:120px}.cookie-banner__inner{flex-direction:column;align-items:stretch;padding:14px 16px;gap:14px}.cookie-banner__actions{justify-content:flex-end}.cookie-banner__btn{flex:1 1 0}}';

  function injectStyles() {
    if (document.getElementById('ff-cookie-consent-styles')) return;
    var style = document.createElement('style');
    style.id = 'ff-cookie-consent-styles';
    style.textContent = INLINE_CSS;
    (document.head || document.documentElement).appendChild(style);
  }

  injectStyles();

  var STRINGS = {
    de: {
      text: 'Wir verwenden Cookies.',
      learn: 'Mehr erfahren',
      accept: 'Akzeptieren',
      decline: 'Ablehnen',
      settings: 'Cookie-Einstellungen',
      aria: 'Cookie-Hinweis',
    },
    en: {
      text: 'We use cookies.',
      learn: 'Learn more',
      accept: 'Accept',
      decline: 'Decline',
      settings: 'Cookie settings',
      aria: 'Cookie notice',
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

  function removeGoogleFonts() {
    document
      .querySelectorAll(
        'link[href*="fonts.googleapis.com"], link[href*="fonts.gstatic.com"]'
      )
      .forEach(function (link) {
        link.parentNode.removeChild(link);
      });
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
    document.body.classList.remove('has-cookie-banner');
  }

  function showBanner() {
    var banner = document.getElementById('cookie-banner');
    if (!banner) return;
    banner.setAttribute('aria-label', t('aria'));
    banner.querySelector('.cookie-banner__text').textContent = t('text');
    var learn = banner.querySelector('.cookie-banner__learn');
    learn.textContent = t('learn');
    learn.setAttribute('href', 'privacy-policy.html#cookies');
    banner.querySelector('[data-cookie-accept]').textContent = t('accept');
    banner.querySelector('[data-cookie-decline]').textContent = t('decline');
    banner.hidden = false;
    document.body.classList.add('has-cookie-banner');
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
      el.textContent = t('settings');
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
    banner.innerHTML =
      '<div class="cookie-banner__inner">' +
      '<p class="cookie-banner__message">' +
      '<span class="cookie-banner__text"></span>' +
      '<a class="cookie-banner__learn" href="privacy-policy.html#cookies"></a>' +
      '</p>' +
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
      if (consent.choice === 'accepted') {
        loadGoogleFonts();
      } else {
        removeGoogleFonts();
      }
      hideBanner();
      return;
    }

    removeGoogleFonts();
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
