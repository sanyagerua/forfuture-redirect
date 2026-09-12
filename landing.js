(function () {
  'use strict';

  if (!window.ForFutureCookieConsent) {
    var cookieScript = document.createElement('script');
    cookieScript.src = 'cookie-consent.js';
    cookieScript.async = false;
    (document.head || document.documentElement).appendChild(cookieScript);
  }

  var STORAGE_KEY = 'ff-lang';

  var STRINGS = {
    de: {
      'meta.title': 'Haushaltsbuch App ForFuture — digital Geld sparen ohne Excel',
      'meta.description':
        'ForFuture ist die digitale Haushaltsbuch-App für monatliche Ausgaben und Sparziele — ohne Excel, ohne Bank-Anbindung. Ausgaben-App mit App-Haushaltsplan für iOS & Android.',
      'logo.aria': 'ForFuture Startseite',
      'lang.switch.aria': 'Sprache wählen',
      'nav.aria': 'Hauptnavigation',
      'nav.mobile.aria': 'Mobile Navigation',
      'nav.menu': 'Menü öffnen',
      'nav.download': 'App holen',
      'nav.why': 'Warum ForFuture',
      'nav.goals': 'Ziele',
      'nav.capture': 'Erfassen',
      'nav.review': 'Monats-Review',
      'nav.faq': 'FAQ',
      'hero.eyebrow': 'Haushaltsbuch-App · Keine Bank-Anbindung',
      'hero.title': 'Ausgaben im Griff, Ziele im Blick.',
      'hero.sub':
        'Die Ausgaben-App für monatliche Ausgaben und Sparziele — ohne Excel, ohne Vorlage, ohne Bank-Login. So sparst du Geld mit einem klaren App-Haushaltsplan.',
      'hero.phone.alt': 'ForFuture App — Monatsübersicht auf dem Smartphone',
      'hero.video.aria': 'ForFuture App — Kurzdemo',
      'store.ios.aria': 'Im App Store laden',
      'store.ios.alt': 'Laden im App Store',
      'store.android.aria': 'Bei Google Play laden',
      'store.android.alt': 'Jetzt bei Google Play',
      'store.qr.ios.aria': 'QR-Code App Store',
      'store.qr.android.aria': 'QR-Code Google Play',
      'trust.pill1': 'In Sekunden erfasst',
      'trust.pill2': 'Ziele statt nur Ausgaben',
      'trust.pill3': 'EU-Sicherung standardmäßig',
      'trust.bar': 'Keine Bank · Opt-in Analytics · EU-Cloud-Sicherung standardmäßig · Volle Kontrolle',
      'why.label': 'Warum ForFuture',
      'why.title': 'Warum ForFuture anders ist',
      'why.sub':
        'Andere Apps zeigen dir, was du ausgegeben hast.<br />ForFuture zeigt dir, wie nah du deinen Zielen bist.',
      'why.other.title': 'Typische Budget-Apps',
      'why.other.l1': 'Charts ohne Kontext',
      'why.other.l2': 'Kein echter Zielfortschritt',
      'why.other.l3': 'Bank-Anbindung erforderlich',
      'why.ff.title': 'ForFuture',
      'why.ff.l1': 'Budget-Konstruktor mit klarem Plan',
      'why.ff.l2': 'Fortschritt auf bis zu 3 Ziele',
      'why.ff.l3': 'Sprechen, tippen oder Auto-Erfassung — in Sekunden notiert, leicht dranbleiben',
      'goals.label': 'Finanzziele',
      'goals.title': 'Ziele, die sichtbar werden',
      'goals.sub': 'Setze bis zu 3 finanzielle Ziele und sieh deinen echten Fortschritt jeden Monat.',
      'goals.aria': 'Beispiel Sparziele',
      'goal.vacation': 'Urlaub',
      'goal.emergency': 'Notgroschen',
      'goal.debt': 'Schuldentilgung',
      'goal.days1': '94 Tage',
      'goal.days2': '185 Tage',
      'goal.days3': '376 Tage',
      'capture.label': 'Erfassen',
      'capture.title': 'Ausgaben erfassen ohne Aufwand',
      'capture.sub': 'Drei Wege. Ein Prinzip: Vorschlagen → bestätigen → fertig.',
      'method1.title': 'Sprechen',
      'method1.p': 'Sag, was du ausgegeben hast — ForFuture parst Betrag, Datum und Kategorie.',
      'method1.demo': '„Mittagessen 12 €"',
      'method1.arrow': '→ automatische Erkennung',
      'method2.title': 'Wallet-Hinweis',
      'method2.p':
        'PayPal, Google Pay oder Apple Pay — ForFuture liest den Hinweis und füllt die Buchung vor.',
      'method2.demo': 'Zahlungsbenachrichtigung → vorausgefüllter Eintrag',
      'method2.arrow': '→ du prüfst und speicherst',
      'method3.title': 'Tippen',
      'method3.p': 'Betrag, Kategorie, fertig — oder Zahlungstext aus der Zwischenablage einfügen.',
      'method3.demo': 'Schnelleingabe — keine langen Formulare',
      'method3.arrow': '→ Kategorie-Vorschläge inklusive',
      'review.label': 'Monats-Review',
      'review.title': 'Der Moment, der alles verbindet',
      'review.sub': 'Tracking tagsüber. Ein bewusster Abschluss am Monatsende. Das ist der Unterschied.',
      'loop1.title': 'Monat läuft',
      'loop1.p': 'Du erfasst Ausgaben, wenn sie passieren — schnell und ohne Umwege.',
      'loop2.title': 'Daten werden gesammelt',
      'loop2.p': 'Budget, Fixkosten und variable Ausgaben bleiben den Monat über im Blick.',
      'loop3.title': 'Monat wird abgeschlossen',
      'loop3.p': 'Du fixierst den Stand und erhältst deinen Monats-Review — klar und übersichtlich.',
      'loop4.title': 'Ziele aktualisieren sich',
      'loop4.p': 'Dein Sparfortschritt wächst — aus deinem Plan, nicht aus Schätzungen.',
      'feat.label': 'Features',
      'feat.title': 'Alles, was du brauchst',
      'feat1.title': 'Budget-Konstruktor',
      'feat1.p': 'Fixkosten und variables Budget — du baust den Plan aktiv auf.',
      'feat2.title': 'Gemerkte Händler',
      'feat2.p': 'Einmal zuordnen, künftig automatisch vorgeschlagen.',
      'feat3.title': 'Quartal & Jahresansicht',
      'feat3.p': 'Muster über alle abgeschlossenen Monate hinweg.',
      'privacy.label': 'Datenschutz',
      'privacy.title': 'Deine Daten gehören dir',
      'privacy.sub':
        'ForFuture ist keine Bank und keine Finanzberatung. Du erfasst selbst. Mit Konto sichern wir dein Budget standardmäßig in der EU — abschaltbar.',
      'priv1.title': 'Kein Bankzugriff',
      'priv1.p': 'Kein Kontozugriff, kein PSD2, keine Drittanbieter-APIs für deine Kontodaten.',
      'priv2.title': 'Schnell & offline',
      'priv2.p':
        'Die App nutzt dein Gerät für Tempo und Offline-Nutzung. Mit Konto werden Änderungen automatisch auf EU-Servern gesichert.',
      'priv3.title': 'EU-Cloud-Sicherung',
      'priv3.p':
        'Für angemeldete Konten standardmäßig aktiv (EU-Server) — dein Budget überlebt Gerätewechsel und Neuinstallation. Jederzeit in den Einstellungen abschaltbar.',
      'priv4.title': 'Optionale Nutzungsanalyse',
      'priv4.p':
        'Firebase Analytics nur nach Ihrer Zustimmung — standardmäßig aus. Details in der <a href="privacy-policy.html">Datenschutzerklärung</a>.',
      'faq.title': 'Häufige Fragen',
      'faq1.q': 'Ist ForFuture eine Bank?',
      'faq1.a':
        'Nein. Du erfasst Ausgaben selbst. ForFuture ist keine Finanzberatung und verbindet sich nicht mit deinem Girokonto.',
      'faq2.q': 'Wie funktionieren Sparziele?',
      'faq2.a':
        'Du legst bis zu drei Ziele mit Betrag und Datum fest. Beim Monats-Review wird der Fortschritt aus deinem Budget aktualisiert.',
      'faq3.q': 'Muss ich Auto-Erfassung nutzen?',
      'faq3.a':
        'Nein. Sprechen, Tippen und Einfügen funktionieren immer. Auto-Erfassung aus Wallet-Hinweisen ist optional.',
      'faq4.q': 'Was bedeutet Monats-Review?',
      'faq4.a':
        'Du schließt den Monat ab, erhältst einen Bericht und deine Sparziele werden aktualisiert. Quartal- und Jahresübersichten bauen darauf auf.',
      'faq5.q': 'Wo werden meine Finanzdaten gespeichert?',
      'faq5.a':
        'Mit Konto werden Ausgaben, Budgets und Ziele standardmäßig auf EU-Servern gesichert. Die App nutzt dein Gerät für Tempo und Offline-Nutzung. Cloud-Sicherung kannst du jederzeit in den Einstellungen abschalten.',
      'faq6.q': 'Ist ForFuture eine kostenlose Haushaltsbuch-App?',
      'faq6.a':
        'Du kannst ForFuture herunterladen und starten. Premium-Funktionen und Testzeitraum findest du in der App bzw. im Store — ohne Bank-Anbindung und ohne Excel.',
      'faq7.q': 'Brauche ich Excel oder eine Haushaltsbuch-Vorlage?',
      'faq7.a':
        'Nein. ForFuture ersetzt Excel-Haushaltsbücher und Papier-Vorlagen durch ein digitales Haushaltsbuch mit App-Haushaltsplan — Ausgaben erfassen und monatlich abschließen.',
      'faq8.q': 'Wie hilft ForFuture beim Geld sparen?',
      'faq8.a':
        'Du siehst monatliche Ausgaben klar, setzt Sparziele und schließt den Monat bewusst ab. So wird aus „Wie kann man Geld sparen?“ ein wiederholbarer Plan — nicht nur Charts.',
      'seo.label': 'Haushaltsbuch App',
      'seo.title': 'Digitales Haushaltsbuch statt Excel & Vorlage',
      'seo.sub':
        'Viele suchen eine Haushaltsbuch-App, eine Vorlage oder Excel — und wollen einfach Geld sparen. ForFuture ist die digitale Alternative: Ausgaben-App und App-Haushaltsplan in einem.',
      'seo1.title': 'Haushaltsbuch ohne Excel',
      'seo1.p':
        'Kein Tabellenchaos: Erfasse Ausgaben per Sprache, Tippen oder Wallet-Hinweis. Dein digitales Haushaltsbuch bleibt auf dem Handy — ideal für monatliche Ausgaben.',
      'seo2.title': 'Geld sparen mit Plan',
      'seo2.p':
        'Wer fragt „Wie kann man Geld sparen?“ braucht Überblick und Ziele. ForFuture verbindet Ausgaben-Tracking mit bis zu drei Sparzielen — eine echte Geld-sparen-App.',
      'seo3.title': 'App-Haushaltsplan statt Papier',
      'seo3.p':
        'Fixkosten und variables Budget baust du aktiv auf. So wird aus dem klassischen Haushaltsbuch ein lebendiger Haushaltsplan — ohne Bank-Anbindung, mit EU-Sicherung nach Wahl.',
      'cta.title': 'Dein Geld verdient einen Plan.',
      'cta.sub': 'Starte jetzt und sieh, wie deine Ausgaben zu Fortschritt werden.',
      'cta.note': 'Keine Bank · iOS & Android',
      'footer.tagline': 'Ausgaben im Griff, Ziele im Blick.',
      'footer.legal': 'Rechtliches',
      'footer.privacy': 'Datenschutz',
      'footer.terms': 'AGB',
      'footer.imprint': 'Impressum',
      'footer.delete': 'Konto löschen',
      'footer.opensource': 'Open Source',
      'footer.app': 'App',
      'footer.support': 'Support',
      'footer.seo': 'Haushaltsbuch App',
      'footer.faq': 'FAQ',
      'footer.download': 'Download',
      'footer.copyright': '© 2026 ForFuture. Alle Rechte vorbehalten.',
      'footer.cookies': 'Cookie-Einstellungen',
    },
    en: {
      'meta.title': 'ForFuture budget app — track spending & savings goals',
      'meta.description':
        'ForFuture is a digital household budget app for monthly spending and savings goals — no Excel, no bank login. Expense tracker with a clear plan for iOS & Android.',
      'logo.aria': 'ForFuture home',
      'lang.switch.aria': 'Choose language',
      'nav.aria': 'Main navigation',
      'nav.mobile.aria': 'Mobile navigation',
      'nav.menu': 'Open menu',
      'nav.download': 'Get the app',
      'nav.why': 'Why ForFuture',
      'nav.goals': 'Goals',
      'nav.capture': 'Capture',
      'nav.review': 'Month review',
      'nav.faq': 'FAQ',
      'hero.eyebrow': 'Budget app · No bank connection',
      'hero.title': 'Spending under control. Goals in sight.',
      'hero.sub':
        'The expense app for monthly spending and savings goals — no Excel, no spreadsheet template, no bank login. Save money with a clear in-app household plan.',
      'hero.phone.alt': 'ForFuture app — monthly overview on a smartphone',
      'hero.video.aria': 'ForFuture app — short demo',
      'store.ios.aria': 'Download on the App Store',
      'store.ios.alt': 'Download on the App Store',
      'store.android.aria': 'Get it on Google Play',
      'store.android.alt': 'Get it on Google Play',
      'store.qr.ios.aria': 'App Store QR code',
      'store.qr.android.aria': 'Google Play QR code',
      'trust.pill1': 'Logged in seconds',
      'trust.pill2': 'Goals, not just spending',
      'trust.pill3': 'EU backup by default',
      'trust.bar': 'No bank · Opt-in analytics · EU cloud backup by default · Full control',
      'why.label': 'Why ForFuture',
      'why.title': 'Why ForFuture is different',
      'why.sub':
        'Other apps show what you spent.<br />ForFuture shows how close you are to your goals.',
      'why.other.title': 'Typical budget apps',
      'why.other.l1': 'Charts without context',
      'why.other.l2': 'No real goal progress',
      'why.other.l3': 'Bank connection required',
      'why.ff.title': 'ForFuture',
      'why.ff.l1': 'Budget builder with a clear plan',
      'why.ff.l2': 'Progress on up to 3 goals',
      'why.ff.l3': 'Speak, type, or auto-capture — logged in seconds, easy to stay on track',
      'goals.label': 'Financial goals',
      'goals.title': 'Goals you can actually see',
      'goals.sub': 'Set up to 3 financial goals and see real progress every month.',
      'goals.aria': 'Example savings goals',
      'goal.vacation': 'Vacation',
      'goal.emergency': 'Emergency fund',
      'goal.debt': 'Debt payoff',
      'goal.days1': '94 days',
      'goal.days2': '185 days',
      'goal.days3': '376 days',
      'capture.label': 'Capture',
      'capture.title': 'Log expenses without friction',
      'capture.sub': 'Three ways. One principle: suggest → confirm → done.',
      'method1.title': 'Speak',
      'method1.p': 'Say what you spent — ForFuture parses amount, date, and category.',
      'method1.demo': '"Lunch 12 €"',
      'method1.arrow': '→ automatic recognition',
      'method2.title': 'Wallet alert',
      'method2.p': 'PayPal, Google Pay, or Apple Pay — ForFuture reads the alert and pre-fills the entry.',
      'method2.demo': 'Payment notification → pre-filled entry',
      'method2.arrow': '→ you review and save',
      'method3.title': 'Type',
      'method3.p': 'Amount, category, done — or paste payment text from the clipboard.',
      'method3.demo': 'Quick entry — no long forms',
      'method3.arrow': '→ category suggestions included',
      'review.label': 'Month review',
      'review.title': 'The moment that ties it all together',
      'review.sub': 'Track during the month. Close consciously at month end. That is the difference.',
      'loop1.title': 'Month in progress',
      'loop1.p': 'You log expenses as they happen — fast and straightforward.',
      'loop2.title': 'Data adds up',
      'loop2.p': 'Budget, fixed costs, and variable spending stay visible all month.',
      'loop3.title': 'Month is closed',
      'loop3.p': 'You lock in the month and get a clear month review.',
      'loop4.title': 'Goals update',
      'loop4.p': 'Your savings progress grows — from your plan, not guesses.',
      'feat.label': 'Features',
      'feat.title': 'Everything you need',
      'feat1.title': 'Budget builder',
      'feat1.p': 'Fixed and variable budget — you build the plan actively.',
      'feat2.title': 'Remembered merchants',
      'feat2.p': 'Assign once, suggested automatically next time.',
      'feat3.title': 'Quarter & year view',
      'feat3.p': 'Patterns across all closed months.',
      'privacy.label': 'Privacy',
      'privacy.title': 'Your data belongs to you',
      'privacy.sub':
        'ForFuture is not a bank or financial advice. You log yourself. With an account, your budget is backed up in the EU by default — you can turn that off.',
      'priv1.title': 'No bank access',
      'priv1.p': 'No account access, no PSD2, no third-party APIs for your bank data.',
      'priv2.title': 'Fast & offline',
      'priv2.p':
        'The app uses your device for speed and offline use. With an account, changes are backed up to EU servers automatically.',
      'priv3.title': 'EU cloud backup',
      'priv3.p':
        'On by default for signed-in accounts (EU servers) — your budget survives device changes and reinstall. Turn off anytime in Settings.',
      'priv4.title': 'Optional usage analytics',
      'priv4.p':
        'Firebase Analytics only with your consent — off by default. See our <a href="privacy-policy.html">Privacy Policy</a>.',
      'faq.title': 'Frequently asked questions',
      'faq1.q': 'Is ForFuture a bank?',
      'faq1.a':
        'No. You log expenses yourself. ForFuture is not financial advice and does not connect to your bank account.',
      'faq2.q': 'How do savings goals work?',
      'faq2.a':
        'Set up to three goals with amount and date. At month review, progress updates from your budget.',
      'faq3.q': 'Do I have to use auto-capture?',
      'faq3.a':
        'No. Speak, type, and paste always work. Auto-capture from wallet alerts is optional.',
      'faq4.q': 'What is a month review?',
      'faq4.a':
        'You close the month, get a report, and your savings goals update. Quarter and year views build on that.',
      'faq5.q': 'Where is my financial data stored?',
      'faq5.a':
        'With an account, expenses, budgets, and goals are backed up to EU servers by default. The app uses your device for speed and offline use. You can turn off cloud backup anytime in Settings.',
      'faq6.q': 'Is ForFuture a free household budget app?',
      'faq6.a':
        'You can download and start ForFuture. Premium features and trial details are in the app or store — no bank connection and no Excel.',
      'faq7.q': 'Do I need Excel or a budget spreadsheet template?',
      'faq7.a':
        'No. ForFuture replaces Excel budget books and paper templates with a digital household budget and in-app plan — log spending and close each month.',
      'faq8.q': 'How does ForFuture help me save money?',
      'faq8.a':
        'You see monthly spending clearly, set savings goals, and close the month deliberately — a repeatable plan, not just charts.',
      'seo.label': 'Budget app',
      'seo.title': 'Digital household budget instead of Excel & templates',
      'seo.sub':
        'Many people search for a budget app, a template, or Excel — and simply want to save money. ForFuture is the digital alternative: expense tracker and household plan in one.',
      'seo1.title': 'Budget book without Excel',
      'seo1.p':
        'No spreadsheet chaos: log expenses by voice, typing, or wallet alert. Your digital household budget stays on your phone — ideal for monthly spending.',
      'seo2.title': 'Save money with a plan',
      'seo2.p':
        'If you ask how to save money, you need overview and goals. ForFuture connects expense tracking with up to three savings goals — a real money-saving app.',
      'seo3.title': 'In-app household plan, not paper',
      'seo3.p':
        'Build fixed costs and variable budget actively. Your classic household book becomes a living plan — no bank connection, optional EU backup.',
      'cta.title': 'Your money deserves a plan.',
      'cta.sub': 'Start now and turn spending into progress.',
      'cta.note': 'No bank · iOS & Android',
      'footer.tagline': 'Spending under control. Goals in sight.',
      'footer.legal': 'Legal',
      'footer.privacy': 'Privacy',
      'footer.terms': 'Terms',
      'footer.imprint': 'Imprint',
      'footer.delete': 'Delete account',
      'footer.opensource': 'Open source',
      'footer.app': 'App',
      'footer.support': 'Support',
      'footer.seo': 'Budget app',
      'footer.faq': 'FAQ',
      'footer.download': 'Download',
      'footer.copyright': '© 2026 ForFuture. All rights reserved.',
      'footer.cookies': 'Cookie settings',
    },
  };

  function detectLang() {
    var stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'de' || stored === 'en') return stored;
    return navigator.language && navigator.language.toLowerCase().startsWith('de') ? 'de' : 'en';
  }

  function t(lang, key) {
    var bucket = STRINGS[lang] || STRINGS.de;
    return bucket[key] != null ? bucket[key] : STRINGS.de[key] || '';
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
    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      el.setAttribute('alt', t(lang, el.getAttribute('data-i18n-alt')));
    });
    document.querySelectorAll('[data-i18n-src]').forEach(function (el) {
      el.setAttribute('src', t(lang, el.getAttribute('data-i18n-src')));
    });

    document.title = t(lang, 'meta.title');
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', t(lang, 'meta.description'));
    var ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', t(lang, 'meta.title'));
    var ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', t(lang, 'meta.description'));
    var twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', t(lang, 'meta.title'));
    var twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute('content', t(lang, 'meta.description'));

    document.querySelectorAll('.lang-switch-btn').forEach(function (btn) {
      var active = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  }

  function initI18n() {
    var lang = detectLang();
    applyLang(lang);

    document.querySelectorAll('.lang-switch-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyLang(btn.getAttribute('data-lang'));
      });
    });
  }

  window.ForFutureI18n = { initI18n: initI18n, applyLang: applyLang };
})();

(function () {
  'use strict';

  // Update with live store URLs when published (also regenerate assets/qr/*.png if URLs change)
  var STORE_LINKS = {
    ios: 'https://apps.apple.com/de/app/forfuture/id6757244689',
    android: 'https://play.google.com/store/apps/details?id=com.forfuture',
  };

  function initNav() {
    var toggle = document.querySelector('.nav-toggle');
    var mobileNav = document.querySelector('.nav-mobile');
    var header = document.querySelector('.site-header');

    if (toggle && mobileNav) {
      toggle.addEventListener('click', function () {
        var open = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', open ? 'false' : 'true');
        mobileNav.classList.toggle('is-open', !open);
      });

      mobileNav.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          toggle.setAttribute('aria-expanded', 'false');
          mobileNav.classList.remove('is-open');
        });
      });
    }

    if (header) {
      window.addEventListener(
        'scroll',
        function () {
          header.classList.toggle('is-scrolled', window.scrollY > 8);
        },
        { passive: true }
      );
    }
  }

  function animateRing(el) {
    var progress = parseFloat(el.getAttribute('data-progress')) || 0;
    var circumference = parseFloat(el.getAttribute('data-circumference')) || 188.5;
    var offset = circumference - (progress / 100) * circumference;
    el.style.setProperty('--ring-offset', String(offset));
    el.classList.add('is-visible');
  }

  function initGoalRings() {
    var legacyRings = document.querySelectorAll('.goal-ring-wrap[data-progress], .goal-ring-large[data-progress]');
    if (!legacyRings.length) return;

    var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function observeList(nodes, animateFn) {
      if (!nodes.length) return;

      if (prefersReduced) {
        nodes.forEach(animateFn);
        return;
      }

      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            animateFn(entry.target);
            observer.unobserve(entry.target);
          });
        },
        { threshold: 0.25, rootMargin: '0px 0px -32px 0px' }
      );

      nodes.forEach(function (ring) {
        observer.observe(ring);
        var rect = ring.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          animateFn(ring);
          observer.unobserve(ring);
        }
      });
    }

    observeList(legacyRings, animateRing);
  }

  function initFaq() {
    document.querySelectorAll('.faq-question').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var item = btn.closest('.faq-item');
        var open = item.classList.contains('is-open');
        document.querySelectorAll('.faq-item.is-open').forEach(function (el) {
          el.classList.remove('is-open');
          el.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        });
        if (!open) {
          item.classList.add('is-open');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  function initStoreLinks() {
    document.querySelectorAll('[data-store="ios"]').forEach(function (el) {
      el.setAttribute('href', STORE_LINKS.ios);
      el.addEventListener('click', function () {
        if (window.ForFutureAnalytics) {
          window.ForFutureAnalytics.track('store_click', { store: 'ios' });
        }
      });
    });
    document.querySelectorAll('[data-store="android"]').forEach(function (el) {
      el.setAttribute('href', STORE_LINKS.android);
      el.addEventListener('click', function () {
        if (window.ForFutureAnalytics) {
          window.ForFutureAnalytics.track('store_click', { store: 'android' });
        }
      });
    });
  }

  function initHeroVideo() {
    var video = document.querySelector('.hero-video');
    if (!video) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      video.removeAttribute('autoplay');
      video.pause();
      return;
    }
    video.play().catch(function () {});
  }

  initNav();
  if (window.ForFutureI18n) window.ForFutureI18n.initI18n();
  initGoalRings();
  initFaq();
  initStoreLinks();
  initHeroVideo();
})();
