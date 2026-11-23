export const SITE = {
  name: 'Aryan Insurance Consultant',
  tagline: 'Protection You Trust. Security You Deserve.',
  hindiTagline: 'सुरक्षा का वादा, आपका भरोसा!',
  person: 'Aryan Singh',
  role: 'Insurance Consultant & Director',
  phones: ['+91 83997 29020', '+91 95066 88867'],
  phoneLinks: ['+918399729020', '+919506688867'],
  whatsapp: '918399729020',
  email: 'info@aryaninsurance.com',
  addressLines: [
    'Office No. 1415, 14th Floor, Skyline Plaza-3',
    'International Business Bay-1, Sushant Golf City',
    'Lucknow, Uttar Pradesh, India – 226030',
  ],
  mapQuery: 'Skyline Plaza 3, Sushant Golf City, Lucknow 226030',
};

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
