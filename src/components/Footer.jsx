import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { SITE } from '../data/site.js';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">
            <img src="/logo-icon.jpg" alt="" />
            <div>
              <strong>ARYAN</strong>
              <small>Insurances Consultant</small>
            </div>
          </div>
          <p>Your Trusted Partner for Insurance Solutions.</p>
          <p className="muted">
            Explore insurance solutions for your life, health, vehicles, commercial vehicles, business and livestock.
          </p>
          <p className="hindi">{SITE.hindiTagline}</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Our Services</Link></li>
            <li><Link to="/faqs">FAQs</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4>Insurance</h4>
          <ul>
            <li><Link to="/services/motor-insurance">Motor Insurance</Link></li>
            <li><Link to="/services/health-insurance">Health Insurance</Link></li>
            <li><Link to="/services/life-term-insurance">Life & Term Insurance</Link></li>
            <li><Link to="/services/commercial-vehicle-insurance">Commercial Vehicle Insurance</Link></li>
            <li><Link to="/services/shop-business-insurance">Shop & Business Insurance</Link></li>
            <li><Link to="/services/livestock-insurance">Livestock Insurance</Link></li>
          </ul>
        </div>
        <div>
          <h4>Get in Touch</h4>
          <ul className="footer-contact">
            <li><MapPin size={18} /><span>{SITE.addressLines.join(', ')}</span></li>
            {SITE.phones.map((p, i) => (
              <li key={p}><Phone size={18} /><a href={`tel:${SITE.phoneLinks[i]}`}>{p}</a></li>
            ))}
            <li><Mail size={18} /><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="container disclaimer-box">
        <strong>Important Disclaimer:</strong> Aryan Insurance Consultant provides insurance consultancy and assistance.
        All policies are subject to the respective insurer's underwriting, terms, conditions, exclusions and approval.
        Insurance benefits and claims are governed by the policy document.
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© {new Date().getFullYear()} Aryan Insurance Consultant. All rights reserved.</span>
          <span className="legal-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-and-conditions">Terms & Conditions</Link>
            <Link to="/disclaimer">Disclaimer</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
