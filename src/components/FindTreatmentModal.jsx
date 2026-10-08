import { useNavigate } from 'react-router-dom';
import { concerns, treatments } from '../data/siteConfig';

export default function FindTreatmentModal({ onClose }) {
  const navigate = useNavigate();

  const handleSelect = (concern) => {
    const related = treatments.filter((t) =>
      concern.relatedTreatments.includes(t.id)
    );
    onClose();
    if (related.length > 0) {
      navigate(`/treatments/${related[0].slug}`);
    } else {
      navigate('/treatments');
    }
  };

  return (
    <div
      className="find-treatment-modal"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Find My Treatment"
    >
      <div className="find-treatment-card">
        <button
          className="find-treatment-close"
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>

        <span className="eyebrow" style={{ marginBottom: '0.75rem' }}>
          Treatment Finder
        </span>
        <h2>What Would You Like to Improve?</h2>
        <p>
          Select a concern below to explore treatments commonly used to address
          it. This is not a diagnosis — just a starting point.
        </p>

        <div className="find-treatment-options">
          {concerns.map((concern) => (
            <button
              key={concern.id}
              className="find-treatment-option"
              onClick={() => handleSelect(concern)}
              id={`find-treatment-${concern.id}`}
            >
              <span className="icon">{concern.icon}</span>
              <div className="find-treatment-option-text">
                <h4>{concern.label}</h4>
                <p>{concern.shortDesc}</p>
              </div>
            </button>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '1.25rem' }}>
          <button
            onClick={() => {
              onClose();
              navigate('/treatment-matcher');
            }}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--color-navy)',
              fontSize: '0.82rem',
              fontWeight: 600,
              textDecoration: 'underline',
              cursor: 'pointer',
            }}
          >
            Launch Full Interactive Matcher Page →
          </button>
        </div>
      </div>
    </div>
  );
}
