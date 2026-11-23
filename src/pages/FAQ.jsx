import usePageTitle from '../components/usePageTitle.js';
import PageHero from '../components/PageHero.jsx';
import Faq from '../components/Faq.jsx';
import CtaBand from '../components/CtaBand.jsx';
import { FAQS } from '../data/site.js';

export default function FAQ() {
  usePageTitle('FAQs – Aryan Insurance Consultant');
  return (
    <>
      <PageHero title="Frequently Asked Questions" subtitle="Quick answers to common insurance questions." crumb="FAQs" />
      <section className="section">
        <div className="container narrow">
          <Faq items={FAQS} />
        </div>
      </section>
      <CtaBand title="Still have questions?" text="Call or WhatsApp us — we're happy to help." />
    </>
  );
}
