import { Target, Eye, CheckCircle2 } from 'lucide-react';
import usePageTitle from '../components/usePageTitle.js';
import PageHero from '../components/PageHero.jsx';
import Process from '../components/Process.jsx';
import CtaBand from '../components/CtaBand.jsx';
import { SITE } from '../data/site.js';

export default function About() {
  usePageTitle('About Aryan Insurance Consultant');
  return (
    <>
      <PageHero title="About Us" subtitle="Making insurance simple, accessible and understandable for everyone." />
      <section className="section">
        <div className="container split">
          <div className="about-logo">
            <img src="/logo-full.jpg" alt="Aryan Insurances Consultant logo" />
          </div>
          <div>
            <span className="eyebrow">Who We Are</span>
            <h2>About Aryan Insurance Consultant</h2>
            <p>
              Aryan Insurance Consultant is committed to providing reliable and customer-focused insurance
              consultancy services.
            </p>
            <p>
              Led by <strong>{SITE.person}</strong>, {SITE.role}, our aim is to simplify insurance decisions by
              helping customers understand different insurance products and select suitable coverage for their
              personal and professional requirements.
            </p>
            <p>
              From life and health insurance to motor, commercial vehicle, business and livestock insurance, we
              provide assistance throughout your insurance journey.
            </p>
            <ul className="check-list">
              <li><CheckCircle2 size={20} /> Customer-first, transparent advice</li>
              <li><CheckCircle2 size={20} /> Support from enquiry to renewal and claims</li>
              <li><CheckCircle2 size={20} /> Serving individuals, families, farmers and businesses</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container mv-grid">
          <div className="mv-card">
            <div className="why-icon"><Target size={26} /></div>
            <h3>Our Mission</h3>
            <p>To make insurance simple, accessible and understandable for everyone.</p>
          </div>
          <div className="mv-card red">
            <div className="why-icon"><Eye size={26} /></div>
            <h3>Our Vision</h3>
            <p>To become a trusted insurance consultancy partner for individuals, families and businesses.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">How We Work</span>
            <h2>Our Process</h2>
          </div>
          <Process />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
