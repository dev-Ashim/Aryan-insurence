import { Link, useParams } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Phone, MessageCircle } from 'lucide-react';
import usePageTitle from '../components/usePageTitle.js';
import PageHero from '../components/PageHero.jsx';
import CtaBand from '../components/CtaBand.jsx';
import NotFound from './NotFound.jsx';
import { SERVICES, getService } from '../data/services.js';
import { SITE, whatsappLink } from '../data/site.js';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getService(slug);
  usePageTitle(service ? `${service.seo} – Aryan Insurance Consultant` : 'Page Not Found');
  if (!service) return <NotFound />;
  const Icon = service.icon;

  return (
    <>
      <PageHero title={service.title} subtitle={service.short} crumb={<><Link to="/services">Services</Link> <span>/</span> {service.title}</>} />
      <section className="section">
        <div className="container detail-grid">
          <article>
            <div className="detail-icon"><Icon size={34} /></div>
            <h2>{service.title}</h2>
            <p className="lead">{service.intro}</p>
            <h3>What We Can Help You With</h3>
            <div className="cover-grid">
              {service.items.map((it) => (
                <div className="cover-item" key={it}><CheckCircle2 size={20} /> {it}</div>
              ))}
            </div>
            <div className="note">
              Coverage, benefits and exclusions vary by insurer and plan. All policies are subject to the insurer's
              underwriting, terms and conditions. We'll help you read the fine print before you decide.
            </div>
          </article>
          <aside className="sidebar">
            <div className="side-card quote">
              <h4>Get a Free Quote</h4>
              <p>Share your requirements and we'll guide you to suitable {service.title.toLowerCase()} options.</p>
              <a href={whatsappLink(`Hello, I need a quote for ${service.title}.`)} target="_blank" rel="noreferrer" className="btn btn-white btn-block">
                <MessageCircle size={18} /> WhatsApp Us
              </a>
              <a href={`tel:${SITE.phoneLinks[0]}`} className="btn btn-outline-white btn-block"><Phone size={18} /> {SITE.phones[0]}</a>
            </div>
            <div className="side-card">
              <h4>Other Services</h4>
              <ul className="side-links">
                {SERVICES.filter((s) => s.slug !== slug).map((s) => (
                  <li key={s.slug}><Link to={`/services/${s.slug}`}><s.icon size={16} /> {s.title} <ArrowRight size={14} /></Link></li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
