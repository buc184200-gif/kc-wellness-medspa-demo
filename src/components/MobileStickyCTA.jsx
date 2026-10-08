import { Link } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig';

export default function MobileStickyCTA({ onFindTreatment }) {
  return (
    <div className="mobile-sticky-cta" role="complementary" aria-label="Quick booking actions">
      <Link
        to="/consultation"
        className="btn btn-primary"
        id="mobile-sticky-book-cta"
      >
        <span>{siteConfig.bookingCtaShort}</span>
        <span className="btn-arrow">→</span>
      </Link>
      <div className="mobile-sticky-cta-secondary">
        <Link
          to="/treatment-matcher"
          id="mobile-sticky-find-cta"
          aria-label="Open treatment matcher"
        >
          ✦ Match My Treatment
        </Link>
      </div>
    </div>
  );
}
