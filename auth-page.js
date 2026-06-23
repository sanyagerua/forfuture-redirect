(function () {
  'use strict';

  var STORAGE_KEY = 'ff-lang';

  function detectLang() {
    var stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'de' || stored === 'en') return stored;
    return navigator.language && navigator.language.toLowerCase().startsWith('de') ? 'de' : 'en';
  }

  function updateHeaderButtons(lang) {
    document.querySelectorAll('.lang-switch-btn').forEach(function (btn) {
      var active = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  }

  function initAuthHeader() {
    var lang = detectLang();
    document.documentElement.lang = lang;
    updateHeaderButtons(lang);

    document.querySelectorAll('.lang-switch-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var next = btn.getAttribute('data-lang');
        if (next !== 'de' && next !== 'en') return;
        localStorage.setItem(STORAGE_KEY, next);
        window.location.reload();
      });
    });
  }

  window.ForFutureAuth = {
    detectLang: detectLang,
    initAuthHeader: initAuthHeader,
  };

  initAuthHeader();
})();
