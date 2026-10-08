import { Routes, Route, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileStickyCTA from './components/MobileStickyCTA';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';
import FindTreatmentModal from './components/FindTreatmentModal';
import CookieConsent from './components/CookieConsent';
import HomePage from './pages/HomePage';
import TreatmentsPage from './pages/TreatmentsPage';
import TreatmentDetailPage from './pages/TreatmentDetailPage';
import ConcernsPage from './pages/ConcernsPage';
import ResultsPage from './pages/ResultsPage';
import ReviewsPage from './pages/ReviewsPage';
import ProvidersPage from './pages/ProvidersPage';
import AboutPage from './pages/AboutPage';
import FAQPage from './pages/FAQPage';
import TreatmentMatcherPage from './pages/TreatmentMatcherPage';
import ConsultationPage from './pages/ConsultationPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';

function App() {
  const [showFindTreatment, setShowFindTreatment] = useState(false);

  return (
    <>
      <ScrollToTop />
      <ScrollProgress />
      <Navbar onFindTreatment={() => setShowFindTreatment(true)} />
      <main>
        <Routes>
          <Route
            path="/"
            element={<HomePage onFindTreatment={() => setShowFindTreatment(true)} />}
          />
          <Route path="/treatments" element={<TreatmentsPage />} />
          <Route path="/treatments/:slug" element={<TreatmentDetailPage />} />
          <Route path="/concerns" element={<ConcernsPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/provider" element={<ProvidersPage />} />
          <Route path="/providers" element={<ProvidersPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/treatment-matcher" element={<TreatmentMatcherPage />} />
          <Route path="/consultation" element={<ConsultationPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
      </main>
      <Footer />
      <MobileStickyCTA onFindTreatment={() => setShowFindTreatment(true)} />
      {showFindTreatment && (
        <FindTreatmentModal onClose={() => setShowFindTreatment(false)} />
      )}
      <CookieConsent />
    </>
  );
}

export default App;
