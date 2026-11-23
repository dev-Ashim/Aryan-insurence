import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ServiceCard({ service }) {
  const Icon = service.icon;
  return (
    <Link to={`/services/${service.slug}`} className="service-card">
      <span className="service-num">{service.num}</span>
      <div className="service-icon"><Icon size={28} /></div>
      <h3>{service.title}</h3>
      <p>{service.short}</p>
      <span className="service-link">Learn more <ArrowRight size={16} /></span>
    </Link>
  );
}
