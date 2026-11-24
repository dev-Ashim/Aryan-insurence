export const SITE = {
  name: 'Aryan Insurance Consultant',
  tagline: 'Protection You Trust. Security You Deserve.',
  hindiTagline: 'सुरक्षा का वादा, आपका भरोसा!',
  person: 'Aryan Singh',
  role: 'Insurance Consultant & Director',
  phones: ['+91 82997 29020', '+91 87951 69140'],
  phoneLinks: ['+918299729020', '+918795169140'],
  whatsapp: '918299729020',
  email: 'info@aryaninsurance.com',
  addressLines: [
    'Office No. 1415, 14th Floor, Skyline Plaza-3',
    'International Business Bay-1, Sushant Golf City',
    'Lucknow, Uttar Pradesh, India – 226030',
  ],
  mapQuery: 'Skyline Plaza 3, Sushant Golf City, Lucknow 226030',
  // Google business profile (reviews panel)
  googleReviewsUrl: 'https://www.google.com/search?q=Aryan+Insurance+Consultant&kgmid=/g/11nfqn8t8s',
};

// Client reviews copied word-for-word from the Google Maps listing.
// Format: { name: 'Client Name', rating: 5, text: 'Review text…', note?: 'Translated from Hindi' }
export const TESTIMONIALS = [
  {
    name: 'Arun Tiwari',
    rating: 5,
    text: 'I got my health insurance from them, they provide excellent service. My Tata Punch claim was processed very easily and timely. Best car and health insurance in Lucknow. Recommended from My Side',
    note: 'Translated from Hindi',
  },
  {
    name: 'Anshika Singh',
    rating: 5,
    text: 'The company offers excellent services with smooth and hassle-free processes. Special mention to Aryan Singh—he is sweet, supportive, and always pleasant to interact with.',
  },
  {
    name: 'Jyoti Singh',
    rating: 5,
    text: 'Good service and best insurance policy for car. I got claim through qcs within 3 days at my bank account superb service.',
  },
  {
    name: 'Abhishek Tiwari',
    rating: 5,
    text: 'Best Health insurance claim settlement. Quick Approval of claim and supportive team.',
  },
  {
    name: 'Dileep Kashyap',
    rating: 5,
    text: 'Very loyal person. Great 👍 job brother. Timely reminding for renewal policy.',
  },
  {
    name: 'Saurabh Srivastava',
    rating: 5,
    text: 'Best insurance agency in Lucknow. Best car insurance in Lucknow. Best health insurance in Lucknow. Ower all Good support.',
  },
];

export const whatsappLink = (text = 'Hello Aryan Insurance Consultant, I would like insurance guidance.') =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;

export const FAQS = [
  {
    q: 'What types of insurance do you provide?',
    a: 'We offer consultancy and assistance for motor, health, life, term, shop, business, personal accident, livestock and commercial vehicle insurance.',
  },
  {
    q: 'Can I get commercial vehicle insurance?',
    a: 'Yes. We assist with insurance options for trucks, buses, taxis, cabs, pickup vans, goods vehicles and eligible commercial fleets.',
  },
  {
    q: 'Can I renew my existing insurance policy?',
    a: 'Yes. We can assist you with policy renewal options and documentation.',
  },
  {
    q: 'Can I compare different insurance plans?',
    a: 'We can help you understand available policy options, coverage, exclusions and premiums so you can make an informed decision.',
  },
  {
    q: 'Do you provide claim assistance?',
    a: "Yes. We provide guidance regarding claim documentation and the applicable claim process. Final claim approval is subject to the insurer's policy terms.",
  },
  {
    q: 'How can I get an insurance quotation?',
    a: 'Contact us through phone, WhatsApp or the website enquiry form with your insurance requirements, and we will get back to you.',
  },
];
