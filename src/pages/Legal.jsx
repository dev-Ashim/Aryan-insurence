import usePageTitle from '../components/usePageTitle.js';
import PageHero from '../components/PageHero.jsx';
import { SITE } from '../data/site.js';

const CONTENT = {
  privacy: {
    title: 'Privacy Policy',
    sections: [
      ['Information We Collect', 'When you contact us by phone, WhatsApp, email or our enquiry form, we may collect your name, phone number, email address, city and details about your insurance requirements.'],
      ['How We Use Your Information', 'We use your information only to respond to your enquiry, provide insurance guidance, share relevant policy options, assist with documentation, renewals and claims, and send service-related reminders.'],
      ['Sharing of Information', 'Your information may be shared with insurance companies only to the extent required to obtain quotations or process a policy you have requested. We do not sell your personal information.'],
      ['Data Security', 'We take reasonable steps to keep your information secure. However, no method of transmission over the internet is completely secure.'],
      ['Your Choices', 'You may ask us to update or delete your information, or stop contacting you, at any time by writing to ' + SITE.email + '.'],
    ],
  },
  terms: {
    title: 'Terms & Conditions',
    sections: [
      ['Use of Website', 'The information on this website is for general guidance only and does not constitute an offer of insurance. By using this website you agree to these terms.'],
      ['Consultancy Services', 'Aryan Insurance Consultant provides insurance consultancy and assistance. The final decision to purchase a policy rests with you, and issuance is subject to the insurer\'s underwriting and approval.'],
      ['Policy Terms', 'All coverage, benefits, premiums, exclusions and claim settlements are governed by the policy document issued by the respective insurer.'],
      ['Accuracy of Information', 'We strive to keep information accurate and up to date, but we do not guarantee completeness. Please read the policy wording carefully before buying.'],
      ['Changes', 'We may update these terms from time to time. Continued use of the website means you accept the updated terms.'],
    ],
  },
  disclaimer: {
    title: 'Disclaimer',
    sections: [
      ['Consultancy Only', 'Aryan Insurance Consultant provides insurance consultancy and assistance. All policies are subject to the respective insurer\'s underwriting, terms, conditions, exclusions and approval.'],
      ['Benefits & Claims', 'Insurance benefits and claims are governed by the policy document. Final claim approval rests solely with the insurer.'],
      ['No Guarantee', 'Information on this website is general in nature. Product features mentioned may vary between insurers and plans and are subject to change.'],
      ['Read Before You Buy', 'Insurance is the subject matter of solicitation. For more details on risk factors, terms and conditions, please read the sales brochure and policy wording carefully before concluding a sale.'],
    ],
  },
};

export default function Legal({ type }) {
  const page = CONTENT[type];
  usePageTitle(`${page.title} – Aryan Insurance Consultant`);
  return (
    <>
      <PageHero title={page.title} />
      <section className="section">
        <div className="container narrow legal">
          {page.sections.map(([h, p]) => (
            <div key={h}>
              <h3>{h}</h3>
              <p>{p}</p>
            </div>
          ))}
          <p className="muted">For any questions, contact us at <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or {SITE.phones[0]}.</p>
        </div>
      </section>
    </>
  );
}
