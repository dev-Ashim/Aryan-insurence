import usePageTitle from '../components/usePageTitle.js';
import PageHero from '../components/PageHero.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import CtaBand from '../components/CtaBand.jsx';
import { SERVICES } from '../data/services.js';

export default function Services() {
  usePageTitle('Our Insurance Services – Aryan Insurance Consultant');
  return (
    <>
      <PageHero
        title="Our Insurance Services"
        subtitle="Insurance guidance for individuals, families, vehicle owners, farmers and businesses — all under one roof."
      />
      <section className="section">
        <div className="container">
          <div className="services-grid">
            {SERVICES.map((s) => <ServiceCard key={s.slug} service={s} />)}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
