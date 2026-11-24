import { useEffect, useRef, useState } from 'react';
import { Star, Quote, ExternalLink } from 'lucide-react';
import { SITE, TESTIMONIALS } from '../data/site.js';

const ROTATE_MS = 4000; // time between each card update
const LEAVE_MS = 450; // must match the .is-leaving animation duration in index.css

const Stars = ({ n = 5 }) => (
  <div className="stars" aria-label={`${n} out of 5 stars`}>
    {Array.from({ length: 5 }, (_, i) => (
      <Star key={i} size={16} fill={i < n ? 'currentColor' : 'none'} style={{ '--i': i }} />
    ))}
  </div>
);

// How many cards fit side by side at the current screen width.
const getVisibleCount = () => {
  if (typeof window === 'undefined') return 3;
  if (window.matchMedia('(max-width: 600px)').matches) return 1;
  if (window.matchMedia('(max-width: 1080px)').matches) return 2;
  return 3;
};

const reducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function Testimonials() {
  const total = TESTIMONIALS.length;
  const [visible, setVisible] = useState(getVisibleCount);
  const count = Math.min(visible, total);
  const [slots, setSlots] = useState(() => Array.from({ length: count }, (_, i) => i));
  const [leaving, setLeaving] = useState(-1); // slot currently animating out
  const [active, setActive] = useState(-1); // slot that was just updated (highlighted)
  const [inView, setInView] = useState(false);
  const [seen, setSeen] = useState(false); // entrance animation plays once
  const swapped = useRef(false);
  const [paused, setPaused] = useState(false);
  const turn = useRef(0); // which slot updates next
  const next = useRef(count); // which review comes in next
  const wrapRef = useRef(null);
  const static_ = reducedMotion() || total <= count;

  // Re-layout when the screen size changes the number of columns.
  useEffect(() => {
    const onResize = () => setVisible(getVisibleCount());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    setSlots(Array.from({ length: count }, (_, i) => i));
    turn.current = 0;
    next.current = count % total;
    setActive(-1);
  }, [count, total]);

  // Start the entrance + rotation only once the section is on screen.
  useEffect(() => {
    const el = wrapRef.current;
    if (!el || !('IntersectionObserver' in window)) {
      setInView(true);
      setSeen(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        setInView(e.isIntersecting);
        if (e.isIntersecting) setSeen(true);
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Swap one card at a time, left to right.
  useEffect(() => {
    if (static_ || !inView || paused) return;
    let swapTimer;
    const id = setInterval(() => {
      const slot = turn.current;
      setLeaving(slot);
      swapTimer = setTimeout(() => {
        setSlots((prev) => {
          const copy = [...prev];
          // pick the next review that isn't already on screen
          let n = next.current;
          for (let k = 0; k < total && prev.includes(n); k++) n = (n + 1) % total;
          copy[slot] = n;
          next.current = (n + 1) % total;
          return copy;
        });
        swapped.current = true;
        setLeaving(-1);
        setActive(slot);
        turn.current = (slot + 1) % count;
      }, LEAVE_MS);
    }, ROTATE_MS);
    return () => {
      clearInterval(id);
      clearTimeout(swapTimer);
    };
  }, [static_, inView, paused, count, total]);

  const shown = static_ ? TESTIMONIALS.map((_, i) => i) : slots;
  const average = total ? (TESTIMONIALS.reduce((s, r) => s + r.rating, 0) / total).toFixed(1) : '5.0';

  return (
    <>
      {total > 0 && (
        <div
          ref={wrapRef}
          className={`testimonial-wrap${seen ? ' is-visible' : ''}`}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div className="testimonial-summary">
            <span className="live-dot" aria-hidden="true" />
            <strong>{average}</strong>
            <Stars n={5} />
            <span>
              from {total}+ Google reviews{!static_ && <em>{paused ? ' · paused' : ' · updating live'}</em>}
            </span>
          </div>

          <div className="testimonial-grid" aria-live="polite">
            {shown.map((reviewIndex, slot) => {
              const r = TESTIMONIALS[reviewIndex];
              const cls = [
                'testimonial',
                leaving === slot && 'is-leaving',
                active === slot && 'is-active',
                !static_ && turn.current === slot && !paused && inView && 'is-next',
              ]
                .filter(Boolean)
                .join(' ');
              return (
                <figure
                  className={cls}
                  key={`${slot}-${r.name}`}
                  style={{ '--d': swapped.current ? '0ms' : `${slot * 160}ms`, '--rotate': `${ROTATE_MS - LEAVE_MS}ms` }}
                >
                  <Quote className="testimonial-quote" size={28} />
                  <Stars n={r.rating} />
                  <blockquote>{r.text}</blockquote>
                  <figcaption>
                    <span className="avatar">{r.name.charAt(0)}</span>
                    <span>
                      <strong>{r.name}</strong>
                      <small>Google review{r.note ? ` · ${r.note}` : ''}</small>
                    </span>
                  </figcaption>
                  <span className="testimonial-timer" aria-hidden="true" />
                </figure>
              );
            })}
          </div>

          {!static_ && (
            <div className="testimonial-dots" aria-hidden="true">
              {TESTIMONIALS.map((r, i) => (
                <span key={r.name} className={shown.includes(i) ? 'on' : ''} />
              ))}
            </div>
          )}
        </div>
      )}
      <div className="center mt">
        <a href={SITE.googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
          Read our reviews on Google <ExternalLink size={16} />
        </a>
      </div>
    </>
  );
}
