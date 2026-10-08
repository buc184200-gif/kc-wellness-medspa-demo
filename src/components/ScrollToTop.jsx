import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Ensures that navigating between routes always scrolls immediately
 * to the very top of the page, eliminating preserved scroll offsets.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);

  return null;
}
