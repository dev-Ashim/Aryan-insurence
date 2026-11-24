import { Children, useEffect, useRef } from 'react';

// Wraps each child section in a sticky "card". As you scroll, every next card
// slides up over the previous one, which shrinks and dims slightly behind it.
// Cards taller than the screen scroll normally first and only stick once their
// bottom edge is reached, so no content is ever hidden.
export default function StackCards({ children }) {
  const wrapRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      wrap.classList.add('stack-off');
      return;
    }

    const cards = [...wrap.children];
    let tops = [];
    let frame = 0;

    const headerH = () =>
      parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 0;

    // Where each card sticks: just under the header, or higher if it is taller than the screen.
    const layout = () => {
      const vh = window.innerHeight;
      const h = headerH();
      tops = cards.map((card) => {
        const top = Math.min(h, vh - card.offsetHeight);
        card.style.top = `${top}px`;
        // Shrink around the middle of the part that is actually visible.
        const originY = h - top + (vh - h) / 2;
        card.style.transformOrigin = `50% ${originY}px`;
        return top;
      });
      update();
    };

    // How far the next card has covered this one (0 → 1).
    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      cards.forEach((card, i) => {
        const next = cards[i + 1];
        let p = 0;
        if (next) {
          const nextTop = next.getBoundingClientRect().top;
          const range = vh - tops[i + 1];
          p = range > 0 ? Math.min(1, Math.max(0, (vh - nextTop) / range)) : 0;
        }
        card.style.setProperty('--stack-p', p.toFixed(3));
      });
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    layout();
    const ro = new ResizeObserver(layout);
    cards.forEach((c) => ro.observe(c));
    window.addEventListener('resize', layout);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      ro.disconnect();
      window.removeEventListener('resize', layout);
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="stack" ref={wrapRef}>
      {Children.map(children, (child) => child && <div className="stack-card">{child}</div>)}
    </div>
  );
}
