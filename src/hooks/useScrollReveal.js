import { useEffect, useRef } from 'react';

/**
 * Custom hook for Intersection Observer-based scroll animations.
 * Observes container and child .animate-in elements.
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion) {
      if (el.classList.contains('animate-in')) el.classList.add('visible');
      el.querySelectorAll('.animate-in').forEach((child) => child.classList.add('visible'));
      return;
    }

    // Immediately reveal any elements already in or near the initial viewport
    const checkImmediate = (target) => {
      const rect = target.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        target.classList.add('visible');
        return true;
      }
      return false;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: options.threshold || 0.05,
        rootMargin: options.rootMargin || '50px 0px 50px 0px',
      }
    );

    if (el.classList.contains('animate-in')) {
      if (!checkImmediate(el)) {
        observer.observe(el);
      }
    }

    const animElements = el.querySelectorAll('.animate-in');
    animElements.forEach((child) => {
      if (!checkImmediate(child)) {
        observer.observe(child);
      }
    });

    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin]);

  return ref;
}

/**
 * Scroll to element by ID with offset for fixed nav.
 */
export function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    const offset = 90;
    const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}
