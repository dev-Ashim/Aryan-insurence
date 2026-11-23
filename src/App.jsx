import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import SmoothScroll from './components/SmoothScroll.jsx';
import ScrollReveal from './components/ScrollReveal.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import FloatingButtons from './components/FloatingButtons.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import ServiceDetail from './pages/ServiceDetail.jsx';
import CommercialVehicle from './pages/CommercialVehicle.jsx';
import FAQ from './pages/FAQ.jsx';
import Contact from './pages/Contact.jsx';
import Legal from './pages/Legal.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  const location = useLocation();
  return (
    <>
      <SmoothScroll />
      <ScrollProgress />
      <Header />
      {/* key forces a fresh fade-in animation on every page change */}
      <main key={location.pathname} className="page-fade">
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/commercial-vehicle-insurance" element={<CommercialVehicle />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/faqs" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<Legal type="privacy" />} />
          <Route path="/terms-and-conditions" element={<Legal type="terms" />} />
          <Route path="/disclaimer" element={<Legal type="disclaimer" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <FloatingButtons />
      <ScrollReveal />
    </>
  );
}
