/* =============================================
   Total Range Fascia Stretch — Main JavaScript
   ============================================= */

(function () {
  'use strict';

  /* ---- Mobile Nav Toggle ---- */
  const navToggle = document.getElementById('nav-toggle');
  const mobileNav = document.getElementById('mobile-nav');

  if (navToggle && mobileNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!isOpen));
      mobileNav.classList.toggle('is-open', !isOpen);
      document.body.style.overflow = !isOpen ? 'hidden' : '';
    });

    // Close on link click
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.setAttribute('aria-expanded', 'false');
        mobileNav.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });

    // Close on Escape key
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && mobileNav.classList.contains('is-open')) {
        navToggle.setAttribute('aria-expanded', 'false');
        mobileNav.classList.remove('is-open');
        document.body.style.overflow = '';
        navToggle.focus();
      }
    });
  }

  /* ---- Sticky header scroll class ---- */
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---- Scroll Reveal (Intersection Observer) ---- */
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length > 0) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach(el => observer.observe(el));
  }

  /* ---- Active nav link ---- */
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(link => {
    const href = link.getAttribute('href').replace(/\/$/, '') || '/';
    if (href === currentPath || (href !== '/' && currentPath.startsWith(href))) {
      link.setAttribute('aria-current', 'page');
    }
  });

  /* ---- Contact Form Validation & Submission ---- */
  const form = document.getElementById('contact-form');
  if (form) {
    const successMsg = document.getElementById('form-success');
    const formInner = document.getElementById('form-inner');

    const showError = (inputId, show) => {
      const input = document.getElementById(inputId);
      const error = document.getElementById(inputId + '-error');
      if (input) input.classList.toggle('is-error', show);
      if (error) error.classList.toggle('is-visible', show);
    };

    const validateField = (input) => {
      const id = input.id;
      if (id === 'name') {
        const ok = input.value.trim().length >= 2;
        showError(id, !ok);
        return ok;
      }
      if (id === 'email') {
        const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim());
        showError(id, !ok);
        return ok;
      }
      if (id === 'message') {
        const ok = input.value.trim().length >= 10;
        showError(id, !ok);
        return ok;
      }
      return true;
    };

    // Live validation on blur
    ['name', 'email', 'message'].forEach(id => {
      const input = document.getElementById(id);
      if (input) input.addEventListener('blur', () => validateField(input));
    });

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const inputs = ['name', 'email', 'message'].map(id => document.getElementById(id));
      const valid = inputs.every(input => input && validateField(input));
      if (!valid) return;

      const submitBtn = form.querySelector('[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending…';

      try {
        const data = new FormData(form);
        const response = await fetch(form.action, {
          method: 'POST',
          body: data,
          headers: { Accept: 'application/json' }
        });
        if (response.ok) {
          formInner.style.display = 'none';
          if (successMsg) successMsg.classList.add('is-visible');
        } else {
          throw new Error('Server error');
        }
      } catch {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
        alert('Sorry, there was an issue sending your message. Please try again or email us directly.');
      }
    });
  }

  /* ---- Footer: dynamic copyright year ---- */
  const yearEl = document.getElementById('copyright-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

})();
