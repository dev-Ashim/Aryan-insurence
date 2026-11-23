import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock, Send } from 'lucide-react';
import usePageTitle from '../components/usePageTitle.js';
import PageHero from '../components/PageHero.jsx';
import { SERVICES } from '../data/services.js';
import { SITE, whatsappLink } from '../data/site.js';

const EMPTY = { name: '', phone: '', email: '', service: '', city: '', message: '' };

export default function Contact() {
  usePageTitle('Contact Aryan Insurance Consultant');
  const [form, setForm] = useState(EMPTY);
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !/^[+\d\s-]{10,15}$/.test(form.phone.trim())) {
      setError('Please enter your name and a valid phone number.');
      return;
    }
    setError('');
    const text = [
      'New Insurance Enquiry',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.email && `Email: ${form.email}`,
      form.service && `Insurance: ${form.service}`,
      form.city && `City: ${form.city}`,
      form.message && `Message: ${form.message}`,
    ].filter(Boolean).join('\n');
    window.open(whatsappLink(text), '_blank', 'noopener');
    setSent(true);
    setForm(EMPTY);
  };

  return (
    <>
      <PageHero title="Contact Us" subtitle="Let's protect what matters to you. Get personalized insurance guidance today." />
      <section className="section">
        <div className="container contact-grid">
          <div className="contact-info">
            <span className="eyebrow">Get in Touch</span>
            <h2>{SITE.person}</h2>
            <p className="role">{SITE.role}</p>
            <ul className="contact-list">
              <li>
                <div className="why-icon"><Phone size={20} /></div>
                <div>
                  <h4>Call Us</h4>
                  {SITE.phones.map((p, i) => <a key={p} href={`tel:${SITE.phoneLinks[i]}`}>{p}</a>)}
                </div>
              </li>
              <li>
                <div className="why-icon"><MessageCircle size={20} /></div>
                <div>
                  <h4>WhatsApp</h4>
                  <a href={whatsappLink()} target="_blank" rel="noreferrer">Chat with us on WhatsApp</a>
                </div>
              </li>
              <li>
                <div className="why-icon"><Mail size={20} /></div>
                <div>
                  <h4>Email</h4>
                  <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                </div>
              </li>
              <li>
                <div className="why-icon"><MapPin size={20} /></div>
                <div>
                  <h4>Office Address</h4>
                  {SITE.addressLines.map((l) => <span key={l}>{l}</span>)}
                </div>
              </li>
              <li>
                <div className="why-icon"><Clock size={20} /></div>
                <div>
                  <h4>Office Hours</h4>
                  <span>Monday – Saturday, 10:00 AM – 7:00 PM</span>
                </div>
              </li>
            </ul>
          </div>

          <form className="contact-form" onSubmit={submit} noValidate>
            <h3>Send an Enquiry</h3>
            <p className="muted">Fill in your details — your enquiry will open in WhatsApp, ready to send.</p>
            <div className="form-row">
              <label>Full Name*<input name="name" value={form.name} onChange={update} placeholder="Your name" /></label>
              <label>Phone Number*<input name="phone" value={form.phone} onChange={update} placeholder="+91 XXXXX XXXXX" inputMode="tel" /></label>
            </div>
            <div className="form-row">
              <label>Email<input name="email" type="email" value={form.email} onChange={update} placeholder="you@example.com" /></label>
              <label>City<input name="city" value={form.city} onChange={update} placeholder="Lucknow" /></label>
            </div>
            <label>Insurance Type
              <select name="service" value={form.service} onChange={update}>
                <option value="">Select insurance type</option>
                {SERVICES.map((s) => <option key={s.slug}>{s.title}</option>)}
                <option>Policy Renewal</option>
                <option>Claim Assistance</option>
                <option>Other</option>
              </select>
            </label>
            <label>Message<textarea name="message" rows="4" value={form.message} onChange={update} placeholder="Tell us about your requirements" /></label>
            {error && <p className="form-error">{error}</p>}
            {sent && <p className="form-success">Thank you! Please press send in WhatsApp to complete your enquiry.</p>}
            <button type="submit" className="btn btn-red btn-block"><Send size={18} /> Send Enquiry</button>
          </form>
        </div>
      </section>
      <section className="map-wrap">
        <iframe
          title="Office location map"
          src={`https://maps.google.com/maps?q=${encodeURIComponent(SITE.mapQuery)}&z=15&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
