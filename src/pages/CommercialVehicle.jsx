import { Link } from 'react-router-dom';
import {
  CheckCircle2, Truck, Bus, Car, Package, Tractor, School, ShieldCheck, Wrench, CloudLightning,
  RefreshCw, Network, Scale, MessageCircle, ArrowRight,
} from 'lucide-react';
import usePageTitle from '../components/usePageTitle.js';
import PageHero from '../components/PageHero.jsx';
import CtaBand from '../components/CtaBand.jsx';
import { getService } from '../data/services.js';
import { whatsappLink } from '../data/site.js';

const VEHICLES = [
  { icon: Truck, t: 'Heavy & Light Commercial Trucks' },
  { icon: Bus, t: 'Buses & Mini Buses' },
  { icon: School, t: 'School Buses' },
  { icon: Car, t: 'Taxis & Private Cabs' },
  { icon: Car, t: 'Passenger Auto Rickshaws' },
  { icon: Package, t: 'Goods Carrying Vehicles' },
  { icon: Truck, t: 'Pickup Trucks & Delivery Vans' },
  { icon: Truck, t: 'Tempo & Mini Trucks' },
  { icon: Tractor, t: 'Tractors & Other Eligible Commercial Vehicles' },
];

const BENEFITS = [
  { icon: Scale, t: 'Third-party liability protection as per policy coverage.' },
  { icon: ShieldCheck, t: 'Own damage protection under comprehensive policies.' },
  { icon: Wrench, t: 'Coverage against specified accidental damage.' },
  { icon: CloudLightning, t: 'Protection against covered theft and natural calamities.' },
  { icon: RefreshCw, t: 'Policy renewal assistance.' },
  { icon: Network, t: 'Guidance on suitable fleet insurance options.' },
];

export default function CommercialVehicle() {
  usePageTitle('Commercial Vehicle Insurance in Lucknow – Aryan Insurance Consultant');
  const service = getService('commercial-vehicle-insurance');

  return (
    <>
      <PageHero
        title="Commercial Vehicle Insurance"
        subtitle="Protection for your business on every journey."
        image="/images/truck.jpg"
        crumb={<><Link to="/services">Services</Link> <span>/</span> Commercial Vehicle Insurance</>}
      />
      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">What is Commercial Vehicle Insurance?</span>
            <h2>Keep Your Business Moving</h2>
            <p>
              Your commercial vehicles are an important part of your business. Whether you own a single commercial
              vehicle or manage an entire fleet, the right insurance coverage helps protect your business from
              unexpected financial losses — and meets applicable legal insurance requirements.
            </p>
            <p>
              Aryan Insurance Consultant provides guidance on commercial vehicle insurance solutions designed for
              transporters, fleet owners, logistics companies, travel operators and business owners.
            </p>
            <a href={whatsappLink('Hello, I need a Commercial Vehicle Insurance quote.')} target="_blank" rel="noreferrer" className="btn btn-red">
              Get Commercial Vehicle Insurance Quote <ArrowRight size={18} />
            </a>
          </div>
          <div className="fleet-visual">
            <div className="fleet-photo">
              <img src="/images/fleet.jpg" alt="Truck driving on a mountain highway" loading="lazy" />
            </div>
            <img src="/images/truck.jpg" alt="Commercial truck on the road" className="fleet-inset" loading="lazy" />
            <span className="fleet-chip"><span className="live-dot" /> Fleet Plans Available</span>
            <div className="fleet-card">
              <h3>Single Vehicle or Full Fleet</h3>
              <div className="fleet-tags">
                {['Trucks', 'Buses', 'Taxis', 'Vans', 'Tempos', 'Tractors'].map((t) => <span key={t}>{t}</span>)}
              </div>
              <div className="fleet-road" aria-hidden="true">
                <Truck size={26} className="fleet-road-truck" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Vehicles We Cover</span>
            <h2>Insurance for Every Kind of Commercial Vehicle</h2>
          </div>
          <div className="vehicle-grid">
            {VEHICLES.map((v) => (
              <div className="vehicle-card" key={v.t}><v.icon size={30} /><span>{v.t}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Key Benefits</span>
            <h2>Why Insure Your Commercial Vehicles?</h2>
          </div>
          <div className="why-grid">
            {BENEFITS.map((b) => (
              <div className="why-card" key={b.t}>
                <div className="why-icon"><b.icon size={24} /></div>
                <p className="strong">{b.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Policy Options</span>
            <h2>Commercial Vehicle Insurance Solutions</h2>
          </div>
          <div className="cover-grid three">
            {service.items.map((it) => (
              <div className="cover-item" key={it}><CheckCircle2 size={20} /> {it}</div>
            ))}
          </div>
          <div className="center mt">
            <a href={whatsappLink('Hello, I need a Commercial Vehicle Insurance quote.')} target="_blank" rel="noreferrer" className="btn btn-navy">
              <MessageCircle size={18} /> Request a Quote on WhatsApp
            </a>
          </div>
        </div>
      </section>
      <CtaBand title="Get Commercial Vehicle Insurance Quote" text="Share your vehicle details and we'll help you find suitable cover for your business." />
    </>
  );
}
