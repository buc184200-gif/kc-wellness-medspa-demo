import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const [marketingEnabled, setMarketingEnabled] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('kc_cookie_consent');
    if (!saved) {
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    } else {
      try {
        const parsed = JSON.parse(saved);
        setAnalyticsEnabled(!!parsed.analytics);
        setMarketingEnabled(!!parsed.marketing);
      } catch (e) {
        // Fallback
      }
    }

    const openHandler = () => {
      setShowPreferences(true);
      setVisible(true);
    };

    window.addEventListener('openCookiePreferences', openHandler);
    return () => window.removeEventListener('openCookiePreferences', openHandler);
  }, []);

  const handleAcceptAll = () => {
    const preferences = { essential: true, analytics: true, marketing: true, timestamp: Date.now() };
    localStorage.setItem('kc_cookie_consent', JSON.stringify(preferences));
    setAnalyticsEnabled(true);
    setMarketingEnabled(true);
    setVisible(false);
    setShowPreferences(false);
  };

  const handleEssentialOnly = () => {
    const preferences = { essential: true, analytics: false, marketing: false, timestamp: Date.now() };
    localStorage.setItem('kc_cookie_consent', JSON.stringify(preferences));
    setAnalyticsEnabled(false);
    setMarketingEnabled(false);
    setVisible(false);
    setShowPreferences(false);
  };

  const handleSavePreferences = () => {
    const preferences = {
      essential: true,
      analytics: analyticsEnabled,
      marketing: marketingEnabled,
      timestamp: Date.now(),
    };
    localStorage.setItem('kc_cookie_consent', JSON.stringify(preferences));
    setVisible(false);
    setShowPreferences(false);
  };

  if (!visible) return null;

  return (
    <>
      {/* Floating Bottom Consent Bar */}
      {!showPreferences && (
        <div
          className="cookie-banner"
          role="region"
          aria-label="Cookie consent banner"
        >
          <div className="cookie-banner-content">
            <div className="cookie-banner-title">
              <span>✦</span> Privacy & Cookie Preferences
            </div>
            <p className="cookie-banner-text">
              We respect your privacy. KC Wellness uses strictly essential cookies
              for security and navigation. Optional performance cookies help us refine our
              service experience. Learn more in our{' '}
              <Link to="/privacy" className="cookie-link">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
          <div className="cookie-banner-actions">
            <button
              onClick={handleEssentialOnly}
              className="btn btn-secondary-cookie"
              id="cookie-reject-btn"
            >
              Essential Only
            </button>
            <button
              onClick={() => setShowPreferences(true)}
              className="btn btn-secondary-cookie"
              id="cookie-pref-btn"
            >
              Preferences
            </button>
            <button
              onClick={handleAcceptAll}
              className="btn btn-primary-cookie"
              id="cookie-accept-btn"
            >
              Accept All
            </button>
          </div>
        </div>
      )}

      {/* Preferences Modal */}
      {showPreferences && (
        <div
          className="cookie-modal-backdrop"
          onClick={() => setShowPreferences(false)}
        >
          <div
            className="cookie-modal"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-modal-heading"
          >
            <div className="cookie-modal-header">
              <h3 id="cookie-modal-heading">Cookie Preferences</h3>
              <button
                className="cookie-modal-close"
                onClick={() => setShowPreferences(false)}
                aria-label="Close preferences"
              >
                ✕
              </button>
            </div>

            <p className="cookie-modal-desc">
              Manage your cookie choices below. Essential cookies are required to
              operate this website and cannot be deactivated.
            </p>

            <div className="cookie-preference-item">
              <div className="cookie-preference-info">
                <strong>Strictly Essential</strong>
                <p>Required for basic security, page routing, and session reliability.</p>
              </div>
              <span className="cookie-status-badge">Always Active</span>
            </div>

            <div className="cookie-preference-item">
              <div className="cookie-preference-info">
                <strong>Performance & Analytics</strong>
                <p>Anonymized measurement of page engagement to improve user flow.</p>
              </div>
              <label className="cookie-toggle-label">
                <input
                  type="checkbox"
                  checked={analyticsEnabled}
                  onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                />
                <span className="cookie-toggle-slider" />
              </label>
            </div>

            <div className="cookie-preference-item">
              <div className="cookie-preference-info">
                <strong>Marketing & Personalization</strong>
                <p>Tailored treatment recommendations based on browsing interests.</p>
              </div>
              <label className="cookie-toggle-label">
                <input
                  type="checkbox"
                  checked={marketingEnabled}
                  onChange={(e) => setMarketingEnabled(e.target.checked)}
                />
                <span className="cookie-toggle-slider" />
              </label>
            </div>

            <div className="cookie-modal-footer">
              <button
                onClick={handleEssentialOnly}
                className="btn btn-secondary"
                style={{ fontSize: '0.75rem', padding: '0.75rem 1.4rem' }}
              >
                Reject Non-Essential
              </button>
              <button
                onClick={handleSavePreferences}
                className="btn btn-primary"
                style={{ fontSize: '0.75rem', padding: '0.75rem 1.4rem' }}
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
