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
