import { Link } from 'react-router-dom';
import { Phone, MessageCircle } from 'lucide-react';
import { SITE, whatsappLink } from '../data/site.js';

export default function CtaBand({
  title = "Let's Protect What Matters to You!",
  text = 'Get in touch with Aryan Insurance Consultant for personalized insurance guidance.',
}) {
  return (
    <section className="cta-band">
      <div className="container cta-inner">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="cta-actions">
          <Link to="/contact" className="btn btn-white">Get a Free Consultation</Link>
          <a href={`tel:${SITE.phoneLinks[0]}`} className="btn btn-outline-white"><Phone size={18} /> Call Now</a>
          <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn btn-outline-white"><MessageCircle size={18} /> WhatsApp</a>
        </div>
      </div>
    </section>
  );
}
