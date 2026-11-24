import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Elements that fade/slide in when they scroll into view.
const SELECTORS = [
  '.section-head', '.service-card', '.why-card', '.process-step', '.faq-item', '.vehicle-card',
  '.cover-item', '.mv-card', '.split > div', '.contact-info', '.contact-form', '.side-card',
  '.cta-inner > *', '.stats-grid > div', '.legal > div', 'article > *', '.footer-grid > div', '.map-wrap',
  '.product',
].join(',');

// Cards get a stronger "slide in from the side" effect, direction based on where they sit on screen.
const CARDS = '.service-card, .why-card, .product, .vehicle-card, .cover-item, .mv-card, .process-step';

// Elements that slide in from the side instead of from below.
const LEFT = '.split > div:first-child, .contact-info';
const RIGHT = '.split > div:last-child, .contact-form';

export default function ScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Skip only elements already shown. (Don't skip ones that merely have .reveal —
    // React dev mode runs this effect twice, and they must be observed again.)
    const els = [...document.querySelectorAll(SELECTORS)].filter((el) => !el.classList.contains('in-view'));
    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    els.forEach((el) => {
      // Stagger siblings so cards in a grid appear one after another.
      const index = [...el.parentElement.children].indexOf(el);
      el.style.transitionDelay = `${(index % 4) * 90}ms`;
      el.classList.add('reveal');
      if (el.matches(CARDS)) {
        const r = el.getBoundingClientRect();
        const fromLeft = r.left + r.width / 2 < window.innerWidth / 2;
        el.classList.add('reveal-card', fromLeft ? 'from-left' : 'from-right');
      } else if (el.matches(LEFT)) el.classList.add('reveal-left');
      else if (el.matches(RIGHT)) el.classList.add('reveal-right');
      observer.observe(el);
    });

    // Safety net: anything already on screen is shown even if the observer misses it.
    const check = () => {
      els.forEach((el) => {
        if (el.classList.contains('in-view')) return;
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) el.classList.add('in-view');
      });
    };
    const timer = setTimeout(check, 600);
    window.addEventListener('scroll', check, { passive: true });

    return () => {
      observer.disconnect();
      clearTimeout(timer);
      window.removeEventListener('scroll', check);
    };
  }, [pathname]);

  return null;
}
