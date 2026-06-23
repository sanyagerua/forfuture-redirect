(function () {
  'use strict';

  var STORAGE_KEY = 'ff-lang';

  var PAGE_STRINGS = {
    de: {
      'logo.aria': 'ForFuture Startseite',
      'lang.switch.aria': 'Sprache wählen',
      'footer.home': 'Startseite',
      'footer.privacy': 'Datenschutz',
      'footer.terms': 'AGB',
      'footer.imprint': 'Impressum',
      'footer.support': 'Support',
      'footer.delete': 'Konto löschen',
      'footer.opensource': 'Open Source',
      'support.title': 'ForFuture Support',
      'support.subtitle': 'Budget-App · Keine Bank-Anbindung · Ausgaben im Griff. Ziele im Blick.',
      'support.contact.title': 'Kontakt',
      'support.contact.intro': 'Bei Fragen, Problemen oder Feedback zu ForFuture helfen wir gerne weiter.',
      'support.contact.email': 'E-Mail',
      'support.contact.response': 'Antwortzeit:',
      'support.contact.responseTime': 'In der Regel innerhalb von 24–48 Stunden.',
      'support.faq.title': 'Häufige Fragen',
      'support.faq.password.q': 'Passwort vergessen?',
      'support.faq.password.a':
        'Nutze „Passwort vergessen“ auf dem Anmeldebildschirm. Du erhältst eine E-Mail mit einem Link zum Zurücksetzen.',
      'support.faq.delete.q': 'Konto löschen?',
      'support.faq.delete.a':
        'Profil → Persönliche Informationen → Konto löschen. Details auf der Seite <a href="delete-account.html">Konto löschen</a>.',
      'support.faq.bank.q': 'Verbindet sich die App mit meiner Bank?',
      'support.faq.bank.a':
        'Nein. ForFuture hat keine Bank-Anbindung. Du erfasst Ausgaben selbst — schnell per Tippen, Sprache oder Zahlungsbenachrichtigung (optional).',
      'support.faq.price.q': 'Was kostet ForFuture?',
      'support.faq.price.a':
        'Nach einer kostenlosen Testwoche ist ein Premium-Abo nötig. Details in den <a href="terms-of-service.html">AGB</a>.',
      'support.legal.title': 'Rechtliches',
      'impressum.title': 'Impressum',
      'impressum.subtitle': 'Angaben gemäß § 5 TMG / § 18 MStV',
      'impressum.provider.title': 'Anbieter / Diensteanbieter',
      'impressum.provider.app': 'ForFuture (App & Website)',
      'impressum.provider.person': 'Verantwortlich: Diana Barkova',
      'impressum.contact.title': 'Kontakt',
      'impressum.disclaimer.title': 'Haftungsausschluss',
      'impressum.disclaimer.text':
        'Die Inhalte dieser Website und der ForFuture-App dienen der allgemeinen Information. Wir übernehmen keine Gewähr für Vollständigkeit, Richtigkeit und Aktualität. Für Inhalte verlinkter externer Seiten sind deren Betreiber verantwortlich. ForFuture ist keine Finanzberatung und ersetzt keine professionelle Beratung.',
      'impressum.copyright.title': 'Urheberrecht',
      'impressum.copyright.text':
        'Alle Inhalte dieser Website und der App unterliegen dem Urheberrecht. Vervielfältigung oder Nutzung bedarf der Zustimmung der Anbieterin.',
      'notices.title': 'Open-Source-Lizenzen',
      'notices.subtitle': 'ForFuture — Hinweise zu Drittanbieter-Software',
      'notices.intro':
        'Die ForFuture-App enthält Open-Source-Software. Für jede unten aufgeführte Komponente gelten die jeweiligen Urheber- und Lizenzbedingungen.',
      'notices.fonts':
        'Schriftarten: Manrope über Google Fonts und @expo-google-fonts/manrope — SIL Open Font License 1.1 (OFL-1.1).',
      'delete.title': 'Konto & Daten löschen',
      'delete.subtitle': 'Budget-App · Keine Bank-Anbindung · Ausgaben im Griff. Ziele im Blick.',
      'privacy.title': 'Datenschutzerklärung — ForFuture',
      'privacy.subtitle': 'Budget-App · Keine Bank-Anbindung · Ausgaben im Griff. Ziele im Blick.',
      'terms.title': 'AGB — ForFuture',
      'terms.subtitle': 'Budget-App · Keine Bank-Anbindung',
    },
    en: {
      'logo.aria': 'ForFuture home',
      'lang.switch.aria': 'Choose language',
      'footer.home': 'Home',
      'footer.privacy': 'Privacy',
      'footer.terms': 'Terms',
      'footer.imprint': 'Imprint',
      'footer.support': 'Support',
      'footer.delete': 'Delete account',
      'footer.opensource': 'Open source',
      'support.title': 'ForFuture Support',
      'support.subtitle': 'Budget app · No bank connection · Expenses under control. Goals in sight.',
      'support.contact.title': 'Contact',
      'support.contact.intro': 'Questions, issues, or feedback about ForFuture? We are happy to help.',
      'support.contact.email': 'Email',
      'support.contact.response': 'Response time:',
      'support.contact.responseTime': 'Usually within 24–48 hours.',
      'support.faq.title': 'Frequently asked questions',
      'support.faq.password.q': 'Forgot your password?',
      'support.faq.password.a':
        'Use “Forgot password” on the sign-in screen. You will receive an email with a reset link.',
      'support.faq.delete.q': 'Delete your account?',
      'support.faq.delete.a':
        'Profile → Personal information → Delete account. See the <a href="delete-account.html">Delete account</a> page for details.',
      'support.faq.bank.q': 'Does the app connect to my bank?',
      'support.faq.bank.a':
        'No. ForFuture has no bank connection. You log expenses yourself — quickly by typing, voice, or payment notification (optional).',
      'support.faq.price.q': 'What does ForFuture cost?',
      'support.faq.price.a':
        'After a free trial week, a premium subscription is required. See the <a href="terms-of-service.html">Terms of Service</a> for details.',
      'support.legal.title': 'Legal',
      'impressum.title': 'Imprint',
      'impressum.subtitle': 'Information pursuant to § 5 TMG / § 18 MStV (Germany)',
      'impressum.provider.title': 'Provider / service provider',
      'impressum.provider.app': 'ForFuture (app & website)',
      'impressum.provider.person': 'Responsible: Diana Barkova',
      'impressum.contact.title': 'Contact',
      'impressum.disclaimer.title': 'Disclaimer',
      'impressum.disclaimer.text':
        'The content on this website and in the ForFuture app is for general information only. We do not guarantee completeness, accuracy, or timeliness. External linked sites are the responsibility of their operators. ForFuture is not financial advice and does not replace professional advice.',
      'impressum.copyright.title': 'Copyright',
      'impressum.copyright.text':
        'All content on this website and in the app is protected by copyright. Reproduction or use requires the provider’s consent.',
      'notices.title': 'Open Source Licenses',
      'notices.subtitle': 'ForFuture — third-party software notices',
      'notices.intro':
        'The ForFuture app bundles open-source software. Copyright and license terms apply to each component listed below.',
      'notices.fonts':
        'Fonts: Manrope via Google Fonts and @expo-google-fonts/manrope — SIL Open Font License 1.1 (OFL-1.1).',
      'delete.title': 'Account & Data Deletion',
      'delete.subtitle': 'Budget app · No bank connection · Expenses under control. Goals in sight.',
      'privacy.title': 'Privacy Policy — ForFuture',
      'privacy.subtitle': 'Budget app · No bank connection · Expenses under control. Goals in sight.',
      'terms.title': 'Terms of Service — ForFuture',
      'terms.subtitle': 'Budget app · No bank connection',
    },
  };

  function detectLang() {
    var stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'de' || stored === 'en') return stored;
    return navigator.language && navigator.language.toLowerCase().startsWith('de') ? 'de' : 'en';
  }

  function t(lang, key) {
    var bucket = PAGE_STRINGS[lang] || PAGE_STRINGS.de;
    return bucket[key] != null ? bucket[key] : PAGE_STRINGS.de[key] || '';
  }

  function showContentLang(lang) {
    var prefix = document.body.getAttribute('data-content-prefix') || 'policy';
    document.querySelectorAll('.policy-content, .content').forEach(function (el) {
      el.classList.remove('active');
    });
    var target = document.getElementById(prefix + '-' + lang);
    if (target) target.classList.add('active');
  }

  function updateHeaderButtons(lang) {
    document.querySelectorAll('.lang-switch-btn').forEach(function (btn) {
      var active = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  }

  function applyLang(lang) {
    if (lang !== 'de' && lang !== 'en') lang = 'de';
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      el.textContent = t(lang, el.getAttribute('data-i18n'));
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      el.innerHTML = t(lang, el.getAttribute('data-i18n-html'));
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      el.setAttribute('aria-label', t(lang, el.getAttribute('data-i18n-aria')));
    });

    var titleKey = document.body.getAttribute('data-title-key');
    if (titleKey) document.title = t(lang, titleKey);

    if (document.querySelector('.policy-content, .content')) {
      showContentLang(lang);
    }

    updateHeaderButtons(lang);
  }

  function init() {
    var lang = detectLang();
    applyLang(lang);

    document.querySelectorAll('.lang-switch-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyLang(btn.getAttribute('data-lang'));
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
