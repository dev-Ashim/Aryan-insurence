import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { scrollToTop } from './SmoothScroll.jsx';

// Thin red progress bar at the top + "back to top" button.
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <>
      <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} />
      <button
        className={`back-to-top ${progress > 0.15 ? 'show' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>
    </>
  );
}
