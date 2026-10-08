import { siteConfig } from '../data/siteConfig';

export default function MobileStickyCTA({ onFindTreatment }) {
  return (
    <div className="mobile-sticky-cta" role="complementary" aria-label="Quick actions">
      <a
        href={siteConfig.bookingUrl}
        className="btn btn-primary"
        target="_blank"
        rel="noopener noreferrer"
        id="mobile-sticky-book-cta"
      >
        {siteConfig.bookingCtaShort}
      </a>
      <div className="mobile-sticky-cta-secondary">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onFindTreatment();
          }}
          id="mobile-sticky-find-cta"
        >
          Find My Treatment
        </a>
      </div>
    </div>
  );
}
