import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { SITE } from '../data/site.js';
import { SERVICES } from '../data/services.js';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const headerRef = useRef(null);

  useEffect(() => setOpen(false), [pathname]);

  // Keep a CSS variable with the real header height so the mobile menu sits right below it
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const setH = () => document.documentElement.style.setProperty('--header-h', `${el.offsetHeight}px`);
    setH();
    const ro = new ResizeObserver(setH);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Lock page scroll while the mobile menu is open; close on Escape or when resizing to desktop
  useEffect(() => {
    document.documentElement.classList.toggle('menu-open', open);
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    const onResize = () => window.innerWidth > 1080 && setOpen(false);
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
      document.documentElement.classList.remove('menu-open');
    };
  }, [open]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header ref={headerRef} className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="topbar">
        <div className="container topbar-inner">
          <span className="hindi">{SITE.hindiTagline}</span>
          <div className="topbar-links">
            <a href={`tel:${SITE.phoneLinks[0]}`}><Phone size={14} /> {SITE.phones[0]}</a>
            <a href={`mailto:${SITE.email}`} className="hide-sm"><Mail size={14} /> {SITE.email}</a>
          </div>
        </div>
      </div>
      <div className="container nav-inner">
        <Link to="/" className="brand" aria-label="Aryan Insurance Consultant home">
          <img src="/logo-header.png" alt="Aryan Insurances Consultant" width="640" height="255" />
        </Link>

        <nav className={`nav ${open ? 'open' : ''}`} data-lenis-prevent>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <div className="dropdown">
            <NavLink to="/services">Services <ChevronDown size={16} /></NavLink>
            <div className="dropdown-menu">
              {SERVICES.map((s) => (
                <Link key={s.slug} to={`/services/${s.slug}`}>
                  <s.icon size={16} /> {s.title}
                </Link>
              ))}
            </div>
          </div>
          <NavLink to="/services/commercial-vehicle-insurance">Commercial Vehicle</NavLink>
          <NavLink to="/faqs">FAQs</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <Link to="/contact" className="btn btn-red nav-cta">Free Consultation</Link>
        </nav>

        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
