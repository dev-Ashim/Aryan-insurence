import { Link } from 'react-router-dom';
import {
  ArrowRight, CheckCircle2, UserCheck, Layers, FileCheck, BellRing, LifeBuoy, Award,
  Users, HeartHandshake, Truck, Phone,
} from 'lucide-react';
import usePageTitle from '../components/usePageTitle.js';
import ServiceCard from '../components/ServiceCard.jsx';
import Process from '../components/Process.jsx';
import Faq from '../components/Faq.jsx';
import CtaBand from '../components/CtaBand.jsx';
import { SERVICES } from '../data/services.js';
import { SITE, FAQS } from '../data/site.js';

const WHY = [
  { icon: Award, t: 'Expert Insurance Guidance', d: 'Clear, honest advice to help you understand every option.' },
  { icon: Layers, t: 'Customized Solutions', d: 'Coverage matched to your needs, lifestyle and budget.' },
  { icon: FileCheck, t: 'Transparent Assistance', d: 'We explain coverage, exclusions and premiums in plain words.' },
  { icon: UserCheck, t: 'Hassle-Free Documentation', d: 'Step-by-step help with forms, KYC and paperwork.' },
  { icon: BellRing, t: 'Renewal Reminders', d: 'Timely reminders so your protection never lapses.' },
  { icon: LifeBuoy, t: 'Claim Process Support', d: 'Guidance through claim documentation when you need it most.' },
];

const MATTERS = [
  "Protect your family's financial future.",
  'Manage unexpected medical expenses.',
  'Protect your vehicles and business assets.',
  'Reduce financial exposure from covered accidents.',
  'Support your business continuity.',
  'Secure valuable livestock and farming investments.',
];

export default function Home() {
  usePageTitle('Aryan Insurance Consultant – Insurance Services in Lucknow');

  return (
    <>
      <section className="hero">
        <div className="hero-shape" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="hero-text">
            <span className="eyebrow light">{SITE.tagline}</span>
            <h1>
              Insurance Solutions for <span className="accent">Every Stage</span> of Life
            </h1>
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
        </div>
      </section>

      <section className="stats">
        <div className="container stats-grid">
          <div><strong>7+</strong><span>Insurance Categories</span></div>
          <div><Users size={22} /><span>Individuals & Families</span></div>
          <div><Truck size={22} /><span>Vehicles & Fleets</span></div>
          <div><HeartHandshake size={22} /><span>Renewal & Claim Support</span></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Our Insurance Services</span>
            <h2>One Trusted Partner for All Your Insurance Needs</h2>
            <p>From your family's health to your business fleet, we guide you to the right cover.</p>
          </div>
          <div className="services-grid">
            {SERVICES.map((s) => <ServiceCard key={s.slug} service={s} />)}
            <Link to="/contact" className="service-card service-card-cta">
              <h3>Not sure what you need?</h3>
              <p>Tell us your requirements and we'll suggest suitable options, free of charge.</p>
              <span className="btn btn-white">Ask an Expert <ArrowRight size={16} /></span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Why Choose Us</span>
            <h2>Why Choose Aryan Insurance Consultant?</h2>
          </div>
          <div className="why-grid">
            {WHY.map((w) => (
              <div className="why-card" key={w.t}>
                <div className="why-icon"><w.icon size={24} /></div>
                <div>
                  <h4>{w.t}</h4>
                  <p>{w.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">Why Insurance Matters</span>
            <h2>Your Protection Today. Your Peace of Mind Tomorrow.</h2>
            <p>
              Life is unpredictable, but financial protection can help you prepare for unexpected situations.
              The right insurance policy can help:
            </p>
            <ul className="check-list">
              {MATTERS.map((m) => <li key={m}><CheckCircle2 size={20} /> {m}</li>)}
            </ul>
            <Link to="/about" className="btn btn-navy">About Us <ArrowRight size={18} /></Link>
          </div>
          <div className="feature-panel">
            <div className="feature-panel-inner">
              <h3>Commercial Vehicle Insurance</h3>
              <p>Trucks, buses, taxis, school buses, pickup vans, tempos, tractors and full fleets — protection for your business on every journey.</p>
              <Link to="/services/commercial-vehicle-insurance" className="btn btn-red">Get a Quote <ArrowRight size={18} /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Our Process</span>
            <h2>Simple Steps to the Right Policy</h2>
          </div>
          <Process />
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <div className="section-head">
            <span className="eyebrow">FAQs</span>
            <h2>Frequently Asked Questions</h2>
          </div>
          <Faq items={FAQS.slice(0, 4)} />
          <div className="center mt"><Link to="/faqs" className="btn btn-ghost">View All FAQs</Link></div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
