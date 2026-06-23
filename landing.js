(function () {
  'use strict';

  var STORAGE_KEY = 'ff-lang';

  var STRINGS = {
    de: {
      'meta.title': 'ForFuture — Ausgaben im Griff. Ziele im Blick.',
      'meta.description':
        'Budget- und Ziel-App ohne Bank-Anbindung. Ausgaben in Sekunden erfassen, Sparziele verfolgen, Monate abschließen.',
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
      'hero.eyebrow': 'Budget-App · Keine Bank-Anbindung',
      'hero.title': 'Ausgaben im Griff. Ziele im Blick.',
      'hero.sub':
        'Erfasse Ausgaben in Sekunden und sieh, wie dein Budget dich Monat für Monat deinen Zielen näher bringt.',
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
      'trust.pill3': 'Daten bleiben auf deinem Gerät',
      'trust.bar': 'Keine Bank · Kein Tracking · Local-first · Optional EU-Cloud · Volle Kontrolle',
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
        'ForFuture ist keine Bank und keine Finanzberatung. Du erfasst selbst. Deine Daten liegen standardmäßig auf deinem Gerät.',
      'priv1.title': 'Kein Bankzugriff',
      'priv1.p': 'Kein Kontozugriff, kein PSD2, keine Drittanbieter-APIs für deine Kontodaten.',
      'priv2.title': 'Local-first Speicherung',
      'priv2.p': 'Ausgaben, Budgets und Ziele starten auf deinem Gerät — nicht in der Cloud.',
      'priv3.title': 'EU-Cloud optional',
      'priv3.p': 'Sicherung auf EU-Servern, wenn du sie aktivieren möchtest.',
      'priv4.title': 'Kein Tracking / Analytics SDKs',
      'priv4.p':
        'Keine Analytics- oder Crash-SDKs in der App. Siehe <a href="privacy-policy.html">Datenschutzerklärung</a>.',
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
      'cta.title': 'Dein Geld verdient einen Plan.',
      'cta.sub': 'Starte jetzt und sieh, wie deine Ausgaben zu Fortschritt werden.',
      'cta.note': 'Keine Bank · iOS & Android',
      'footer.tagline': 'Ausgaben im Griff. Ziele im Blick.',
      'footer.legal': 'Rechtliches',
      'footer.privacy': 'Datenschutz',
      'footer.terms': 'AGB',
      'footer.imprint': 'Impressum',
      'footer.delete': 'Konto löschen',
      'footer.opensource': 'Open Source',
      'footer.app': 'App',
      'footer.support': 'Support',
      'footer.faq': 'FAQ',
      'footer.download': 'Download',
      'footer.copyright': '© 2026 ForFuture. Alle Rechte vorbehalten.',
    },
    en: {
      'meta.title': 'ForFuture — Expenses under control. Goals in sight.',
      'meta.description':
        'Budget and goals app with no bank connection. Log expenses in seconds, track savings goals, close months.',
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
      'hero.title': 'Expenses under control. Goals in sight.',
      'hero.sub':
        'Log expenses in seconds and watch your budget move you closer to your goals month by month.',
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
      'trust.pill3': 'Data stays on your device',
      'trust.bar': 'No bank · No tracking · Local-first · Optional EU cloud · Full control',
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
        'ForFuture is not a bank or financial advice. You log yourself. Data stays on your device by default.',
      'priv1.title': 'No bank access',
      'priv1.p': 'No account access, no PSD2, no third-party APIs for your bank data.',
      'priv2.title': 'Local-first storage',
      'priv2.p': 'Expenses, budgets, and goals start on your device — not in the cloud.',
      'priv3.title': 'Optional EU cloud',
      'priv3.p': 'Backup on EU servers if you choose to enable it.',
      'priv4.title': 'No tracking / analytics SDKs',
      'priv4.p':
        'No analytics or crash SDKs in the app. See our <a href="privacy-policy.html">Privacy Policy</a>.',
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
      'cta.title': 'Your money deserves a plan.',
      'cta.sub': 'Start now and turn spending into progress.',
      'cta.note': 'No bank · iOS & Android',
      'footer.tagline': 'Expenses under control. Goals in sight.',
      'footer.legal': 'Legal',
      'footer.privacy': 'Privacy',
      'footer.terms': 'Terms',
      'footer.imprint': 'Imprint',
      'footer.delete': 'Delete account',
      'footer.opensource': 'Open source',
      'footer.app': 'App',
      'footer.support': 'Support',
      'footer.faq': 'FAQ',
      'footer.download': 'Download',
      'footer.copyright': '© 2026 ForFuture. All rights reserved.',
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
    });
    document.querySelectorAll('[data-store="android"]').forEach(function (el) {
      el.setAttribute('href', STORE_LINKS.android);
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
