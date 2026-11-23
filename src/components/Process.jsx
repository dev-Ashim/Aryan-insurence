import { ClipboardList, Search, CheckSquare, FileText, RefreshCw } from 'lucide-react';

const STEPS = [
  { icon: ClipboardList, t: 'Share Your Requirements', d: 'Tell us what you want to insure and your coverage requirements.' },
  { icon: Search, t: 'Explore Suitable Plans', d: 'We help you understand available policy options and coverage.' },
  { icon: CheckSquare, t: 'Select Your Policy', d: 'Choose the policy that best matches your requirements and budget.' },
  { icon: FileText, t: 'Documentation & Assistance', d: 'Get guidance with documentation and the application process.' },
  { icon: RefreshCw, t: 'Renewal & Claim Guidance', d: 'Receive assistance with renewals and claim-related procedures.' },
];

export default function Process() {
  return (
    <div className="process">
      {STEPS.map((s, i) => (
        <div className="process-step" key={s.t}>
          <div className="process-icon"><s.icon size={26} /><span>{i + 1}</span></div>
          <h4>{s.t}</h4>
          <p>{s.d}</p>
        </div>
      ))}
    </div>
  );
}
