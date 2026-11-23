import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Faq({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq-list">
      {items.map((f, i) => (
        <div key={f.q} className={`faq-item ${open === i ? 'open' : ''}`}>
          <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
            <span>Q{i + 1}. {f.q}</span>
            <ChevronDown size={20} />
          </button>
          <div className="faq-answer"><p>{f.a}</p></div>
        </div>
      ))}
    </div>
  );
}
