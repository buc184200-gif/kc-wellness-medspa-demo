import { Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileStickyCTA from './components/MobileStickyCTA';
import ScrollProgress from './components/ScrollProgress';
import FindTreatmentModal from './components/FindTreatmentModal';
import HomePage from './pages/HomePage';
import TreatmentsPage from './pages/TreatmentsPage';
import TreatmentDetailPage from './pages/TreatmentDetailPage';
import ResultsPage from './pages/ResultsPage';
import ProvidersPage from './pages/ProvidersPage';
import AboutPage from './pages/AboutPage';

function App() {
  const [showFindTreatment, setShowFindTreatment] = useState(false);
  const location = useLocation();

  // Scroll to top on route change (unless navigating to an anchor)
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <>
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
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/providers" element={<ProvidersPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
      <Footer />
      <MobileStickyCTA onFindTreatment={() => setShowFindTreatment(true)} />
      {showFindTreatment && (
        <FindTreatmentModal onClose={() => setShowFindTreatment(false)} />
      )}
    </>
  );
}

export default App;
