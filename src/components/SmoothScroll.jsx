import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from 'lenis';

let lenis = null;
const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Smooth, eased scrolling for the whole page + scroll-to-top on page change.
export default function SmoothScroll() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (reduceMotion()) return;
    lenis = new Lenis({ duration: 1.15, easing: (t) => 1 - Math.pow(1 - t, 4), smoothWheel: true });
    let id;
    const raf = (time) => {
      lenis.raf(time);
      id = requestAnimationFrame(raf);
    };
    id = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
      lenis = null;
    };
  }, []);

  useEffect(() => {
    if (lenis) lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function scrollToTop() {
  if (lenis) lenis.scrollTo(0);
  else window.scrollTo({ top: 0, behavior: 'smooth' });
}
