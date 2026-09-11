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

  function supabaseHostFromJwt(token) {
    try {
      var payload = JSON.parse(
        atob(token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/')),
      );
      var iss = payload.iss || '';
      var match = iss.match(/^https:\/\/([^.]+\.supabase\.co)\/auth\/v1$/);
      return match ? match[1] : null;
    } catch (_e) {
      return null;
    }
  }

  /**
   * Reads anon keys from web/supabase-public-config.js (gitignored on deploy host).
   * Copy supabase-public-config.example.js → supabase-public-config.js locally.
   */
  function resolveSupabasePublicConfig(accessToken) {
    var cfg = window.ForFutureSupabasePublicConfig;
    if (!cfg || !cfg.anonByHost) return null;

    var host = accessToken ? supabaseHostFromJwt(accessToken) : null;
    var defaultHost = cfg.defaultHost || 'lulnjwqvpwsxyylzjybp.supabase.co';
    var resolvedHost = host && cfg.anonByHost[host] ? host : defaultHost;
    var anon = cfg.anonByHost[resolvedHost];
    if (!anon || String(anon).indexOf('your-') !== -1) return null;

    return { url: 'https://' + resolvedHost, anon: anon };
  }

  window.ForFutureAuth = {
    detectLang: detectLang,
    initAuthHeader: initAuthHeader,
    supabaseHostFromJwt: supabaseHostFromJwt,
    resolveSupabasePublicConfig: resolveSupabasePublicConfig,
  };

  initAuthHeader();
})();
