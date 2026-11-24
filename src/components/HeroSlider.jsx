import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, Phone, ShieldCheck,
  Car, Bike, Wrench, KeyRound,
  HeartPulse, Stethoscope, Hospital, Pill, Users,
  Baby, PiggyBank, House,
  Store, Flame, Lock, Package, Building2,
  Activity, Ambulance, Briefcase, HeartHandshake,
  Beef, Tractor, Wheat, Milk,
  Truck, Bus, CarTaxiFront,
} from 'lucide-react';
import { SITE } from '../data/site.js';
import { getService } from '../data/services.js';

const AUTOPLAY_MS = 6500;

// One banner per insurance type. `points` are pulled from services.js so the copy stays in sync.
const BANNERS = [
  {
    slug: 'motor-insurance', tab: 'Motor', color: '#3b82f6', img: '/images/car.jpg', anim: 'drive',
    title: <>Drive Worry-Free with the Right <span className="accent">Motor Cover</span></>,
    icon: Car, orbit: [Bike, Wrench, KeyRound, ShieldCheck],
    chips: ['Cashless Garages', 'Easy Renewal'],
  },
  {
    slug: 'health-insurance', tab: 'Health', color: '#ef4444', img: '/images/health.jpg', anim: 'beat',
    title: <>Protect Your Savings with <span className="accent">Health Insurance</span></>,
    icon: HeartPulse, orbit: [Stethoscope, Hospital, Pill, Users],
    chips: ['Cashless Hospitals', 'Family Floater'],
  },
  {
    slug: 'life-term-insurance', tab: 'Life & Term', color: '#8b5cf6', img: '/images/family.jpg', anim: 'glow',
    title: <>Secure Your Family's <span className="accent">Tomorrow</span>, Today</>,
    icon: ShieldCheck, orbit: [Users, Baby, PiggyBank, House],
    chips: ['Term Plans', 'Child Future'],
  },
  {
    slug: 'shop-business-insurance', tab: 'Business', color: '#f59e0b', img: '/images/shop.jpg', anim: 'swing',
    title: <>Keep Your <span className="accent">Business</span> Running, Whatever Happens</>,
    icon: Store, orbit: [Flame, Lock, Package, Building2],
    chips: ['Fire & Burglary', 'Stock Cover'],
  },
  {
    slug: 'personal-accident-insurance', tab: 'Accident', color: '#ec4899', img: '/images/accident.jpg', anim: 'shake',
    title: <>Financial Support When <span className="accent">Accidents</span> Happen</>,
    icon: Activity, orbit: [Ambulance, Briefcase, HeartHandshake, Users],
    chips: ['Accidental Death', 'Disability Cover'],
  },
  {
    slug: 'livestock-insurance', tab: 'Livestock', color: '#22c55e', img: '/images/cow.jpg', anim: 'bob',
    title: <>Protect Your <span className="accent">Livestock</span>, Protect Your Livelihood</>,
    icon: Beef, orbit: [Tractor, Wheat, Milk, HeartHandshake],
    chips: ['Cow & Buffalo', 'For Farmers'],
  },
  {
    slug: 'commercial-vehicle-insurance', tab: 'Commercial', color: '#0ea5e9', img: '/images/fleet.jpg', anim: 'drive',
    title: <>Keep Your <span className="accent">Fleet</span> Moving, Every Journey</>,
    icon: Truck, orbit: [Bus, CarTaxiFront, Tractor, Package],
    chips: ['Fleet Plans', 'Trucks & Buses'],
  },
].map((b) => {
  const s = getService(b.slug);
  return { ...b, eyebrow: s.title, text: s.short, points: s.items.slice(0, 4) };
});

const TABS = ['Overview', ...BANNERS.map((b) => b.tab)];

function IntroSlide() {
  return (
    <>
      <div className="hero-text">
        <span className="eyebrow light">{SITE.tagline}</span>
        <h1>Insurance Solutions for <span className="accent">Every Stage</span> of Life</h1>
        <p className="hindi-lg">{SITE.hindiTagline}</p>
        <p>
          Protect your family, health, vehicles, business and valuable assets with the right insurance coverage.
          At Aryan Insurance Consultant, we help you understand, compare and choose insurance solutions
          according to your needs and budget.
        </p>
        <ul className="hero-points">
          <li><CheckCircle2 size={18} /> Personalized Insurance Guidance</li>
          <li><CheckCircle2 size={18} /> Multiple Insurance Solutions</li>
          <li><CheckCircle2 size={18} /> Easy Policy Assistance</li>
          <li><CheckCircle2 size={18} /> Renewal & Claim Support</li>
        </ul>
        <div className="hero-actions">
          <Link to="/contact" className="btn btn-red">Get a Free Consultation <ArrowRight size={18} /></Link>
          <Link to="/services" className="btn btn-outline-white">Explore Our Services</Link>
        </div>
      </div>
      <div className="hero-card">
        <img src="/logo-icon.jpg" alt="Aryan Insurance Consultant shield logo" className="hero-logo" />
        <h3>Talk to an Insurance Expert</h3>
        <p>{SITE.person}<br /><small>{SITE.role}</small></p>
        <a href={`tel:${SITE.phoneLinks[0]}`} className="btn btn-navy btn-block"><Phone size={18} /> {SITE.phones[0]}</a>
        <a href={`tel:${SITE.phoneLinks[1]}`} className="btn btn-ghost btn-block"><Phone size={18} /> {SITE.phones[1]}</a>
      </div>
    </>
  );
}

function BannerSlide({ b }) {
  return (
    <>
      <div className="hero-text">
        <span className="eyebrow light">{b.eyebrow}</span>
        <h1>{b.title}</h1>
        <p>{b.text}</p>
        <ul className="hero-points">
          {b.points.map((p) => <li key={p}><CheckCircle2 size={18} /> {p}</li>)}
        </ul>
        <div className="hero-actions">
          <Link to={`/services/${b.slug}`} className="btn btn-red">Get a Quote <ArrowRight size={18} /></Link>
          <Link to="/contact" className="btn btn-outline-white">Free Consultation</Link>
        </div>
      </div>
      <div className="hv" aria-hidden="true">
        <div className="hv-glow" />
        <div className="hv-ring">
          {b.orbit.map((Icon, i) => (
            <span key={i} className="hv-orb" style={{ '--i': i }}>
              <span className="hv-orb-inner"><Icon size={24} /></span>
            </span>
          ))}
        </div>
        <div className="hv-core">
          <span className="hv-pulse" />
          <span className="hv-pulse d2" />
          <span className="hv-photo">
            <img src={b.img} alt="" decoding="async" />
            <span className="hv-shine" />
          </span>
          <span className={`hv-badge anim-${b.anim}`}><b.icon size={30} strokeWidth={2} /></span>
        </div>
        <span className="hv-chip c1"><CheckCircle2 size={16} /> {b.chips[0]}</span>
        <span className="hv-chip c2"><ShieldCheck size={16} /> {b.chips[1]}</span>
      </div>
    </>
  );
}

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef(null);
  const tabsRef = useRef(null);
  const count = TABS.length;

  const go = useCallback((i) => setActive((i + count) % count), [count]);
  const next = useCallback(() => setActive((a) => (a + 1) % count), [count]);

  // Pause when the tab is in the background.
  useEffect(() => {
    const onVis = () => setPaused(document.hidden);
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, []);

  // Keep the active tab visible in the scrollable tab strip (mobile).
  useEffect(() => {
    const strip = tabsRef.current;
    const tab = strip?.children[active];
    if (strip && tab) {
      strip.scrollTo({ left: tab.offsetLeft - strip.clientWidth / 2 + tab.clientWidth / 2, behavior: 'smooth' });
    }
  }, [active]);

  const color = active === 0 ? '#e2382f' : BANNERS[active - 1].color;

  return (
    <section
      className={`hero hero-slider${paused ? ' is-paused' : ''}`}
      style={{ '--slide': color, '--autoplay': `${AUTOPLAY_MS}ms` }}
      aria-roledescription="carousel"
      aria-label="Insurance types"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={(e) => { if (e.target.matches(':focus-visible')) setPaused(true); }}
      onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false); }}
      onTouchStart={(e) => { touchX.current = e.target.closest('.hero-tabs') ? null : e.touches[0].clientX; }}
      onTouchEnd={(e) => {
        if (touchX.current == null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) go(active + (dx < 0 ? 1 : -1));
        touchX.current = null;
      }}
    >
      <div className="hero-shape" aria-hidden="true" />
      <div className="hero-photos" aria-hidden="true">
        {BANNERS.map((b, i) => (
          <img
            key={b.slug}
            src={b.img}
            alt=""
            decoding="async"
            className={i + 1 === active ? 'is-active' : ''}
          />
        ))}
      </div>
      <div className="hero-tint" aria-hidden="true" />

      <div className="container hero-stage">
        {TABS.map((t, i) => (
          <div
            key={t}
            className={`hero-slide hero-grid${i === active ? ' is-active' : ''}`}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${count}: ${t}`}
            aria-hidden={i !== active}
          >
            {i === 0 ? <IntroSlide /> : <BannerSlide b={BANNERS[i - 1]} />}
          </div>
        ))}
      </div>

      <div className="container hero-controls">
        <button type="button" className="hero-arrow" onClick={() => go(active - 1)} aria-label="Previous slide">
          <ChevronLeft size={20} />
        </button>
        <div className="hero-tabs" ref={tabsRef} role="tablist">
          {TABS.map((t, i) => (
            <button
              key={t}
              type="button"
              role="tab"
              aria-selected={i === active}
              className={`hero-tab${i === active ? ' is-active' : ''}`}
              onClick={() => go(i)}
            >
              {t}
              {i === active && <span className="hero-tab-bar" onAnimationEnd={next} />}
            </button>
          ))}
        </div>
        <button type="button" className="hero-arrow" onClick={() => go(active + 1)} aria-label="Next slide">
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}
