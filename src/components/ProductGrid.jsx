import { Link } from 'react-router-dom';
import {
  ShieldCheck, HeartPulse, Users, HeartHandshake, Car, Bike, Truck, Store, Flame, Activity, Beef, Baby,
} from 'lucide-react';

// Quick-pick insurance tiles. img = /public/images/<img>.jpg; badge = optional highlight strip.
const PRODUCTS = [
  { t: 'Term Life Insurance', img: 'term', to: 'life-term-insurance', icon: ShieldCheck, color: '#6d4ae0', badge: 'Family Protection' },
  { t: 'Health Insurance', img: 'health', to: 'health-insurance', icon: HeartPulse, color: '#e2382f', badge: 'Cashless Hospitals' },
  { t: 'Family Health Insurance', img: 'family', to: 'health-insurance', icon: Users, color: '#f08c1a', badge: 'Family Floater' },
  { t: 'Senior Citizen Health', img: 'senior', to: 'health-insurance', icon: HeartHandshake, color: '#0e9f6e' },
  { t: 'Car Insurance', img: 'car', to: 'motor-insurance', icon: Car, color: '#1c3270', badge: 'Easy Renewal' },
  { t: '2 Wheeler Insurance', img: 'bike', to: 'motor-insurance', icon: Bike, color: '#16a34a' },
  { t: 'Commercial Vehicle', img: 'truck', to: 'commercial-vehicle-insurance', icon: Truck, color: '#0284c7', badge: 'Fleet Plans' },
  { t: 'Shop & Business', img: 'shop', to: 'shop-business-insurance', icon: Store, color: '#7c3aed' },
  { t: 'Fire & Burglary', img: 'fire', to: 'shop-business-insurance', icon: Flame, color: '#ea580c' },
  { t: 'Personal Accident', img: 'accident', to: 'personal-accident-insurance', icon: Activity, color: '#db2777' },
  { t: 'Livestock Insurance', img: 'cow', to: 'livestock-insurance', icon: Beef, color: '#92400e', badge: 'For Farmers', hot: true },
  { t: 'Child Future Plans', img: 'child', to: 'life-term-insurance', icon: Baby, color: '#0891b2' },
];

export default function ProductGrid() {
  return (
    <div className="product-grid">
      {PRODUCTS.map((p) => (
        <Link key={p.t} to={`/services/${p.to}`} className="product">
          <div className="product-tile" style={{ '--tint': p.color }}>
            <img src={`/images/${p.img}.jpg`} alt="" className="product-photo" loading="lazy" />
            {p.badge && <span className={`product-badge ${p.hot ? 'hot' : ''}`}>{p.badge}</span>}
            <span className="product-icon" style={{ color: p.color }}>
              <p.icon size={22} />
            </span>
          </div>
          <span className="product-name">{p.t}</span>
        </Link>
      ))}
    </div>
  );
}
