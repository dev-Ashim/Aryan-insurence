import { Phone, MessageCircle } from 'lucide-react';
import { SITE, whatsappLink } from '../data/site.js';

export default function FloatingButtons() {
  return (
    <div className="floating">
      <a href={`tel:${SITE.phoneLinks[0]}`} className="float-btn call" aria-label="Call us">
        <Phone size={22} />
      </a>
      <a href={whatsappLink()} target="_blank" rel="noreferrer" className="float-btn wa" aria-label="Chat on WhatsApp">
        <MessageCircle size={24} />
      </a>
    </div>
  );
}
