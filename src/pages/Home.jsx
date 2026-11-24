import { Link } from 'react-router-dom';
import {
  ArrowRight, CheckCircle2, UserCheck, Layers, FileCheck, BellRing, LifeBuoy, Award,
  Users, HeartHandshake, Truck, ShieldCheck,
} from 'lucide-react';
import usePageTitle from '../components/usePageTitle.js';
import ServiceCard from '../components/ServiceCard.jsx';
import Process from '../components/Process.jsx';
import Faq from '../components/Faq.jsx';
import CtaBand from '../components/CtaBand.jsx';
import HeroSlider from '../components/HeroSlider.jsx';
import ProductGrid from '../components/ProductGrid.jsx';
import Testimonials from '../components/Testimonials.jsx';
import StackCards from '../components/StackCards.jsx';
import { SERVICES } from '../data/services.js';
import { FAQS } from '../data/site.js';

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
      <HeroSlider />

      <section className="stats">
        <div className="container stats-grid">
          <div><strong>7+</strong><span>Insurance Categories</span></div>
          <div><Users size={22} /><span>Individuals & Families</span></div>
          <div><Truck size={22} /><span>Vehicles & Fleets</span></div>
          <div><HeartHandshake size={22} /><span>Renewal & Claim Support</span></div>
        </div>
      </section>

      <StackCards>
      <section className="section section-products">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Choose Your Cover</span>
            <h2>What Would You Like to Insure?</h2>
          </div>
          <ProductGrid />
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
          <div className="matters-visual">
            <img src="/images/matters.jpg" alt="A family walking together on the beach" className="matters-photo" loading="lazy" />
            <div className="matters-badge">
              <img src="/logo-icon.jpg" alt="Aryan Insurance Consultant logo" />
              <div><strong>Trusted Advisor</strong><small>Lucknow, Uttar Pradesh</small></div>
            </div>
            <div className="matters-chip"><ShieldCheck size={16} /> Health · Motor · Life · Business</div>
            <Link to="/services/commercial-vehicle-insurance" className="matters-card">
              <img src="/images/fleet.jpg" alt="Truck on a highway" loading="lazy" />
              <div>
                <span className="matters-card-tag"><Truck size={14} /> Commercial Vehicle</span>
                <h3>Keep your fleet moving</h3>
                <p>Trucks, buses, taxis, tempos, tractors and full fleets.</p>
                <span className="matters-card-link">Get a Quote <ArrowRight size={16} /></span>
              </div>
            </Link>
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
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Testimonials</span>
            <h2>What Our Clients Say</h2>
            <p>Real feedback from our clients on Google.</p>
          </div>
          <Testimonials />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container narrow">
          <div className="section-head">
            <span className="eyebrow">FAQs</span>
            <h2>Frequently Asked Questions</h2>
          </div>
          <Faq items={FAQS.slice(0, 4)} />
          <div className="center mt"><Link to="/faqs" className="btn btn-ghost">View All FAQs</Link></div>
        </div>
      </section>

      </StackCards>

      <CtaBand />
    </>
  );
}
