/**
 * Consolidated scroll observer for both animations and navigation tracking
 * Handles fade-in animations and active section tracking
 */

type ScrollCallback = (entry: IntersectionObserverEntry) => void;

export function initScrollObserver() {
  const callbacks: ScrollCallback[] = [];

  // Callback for fade-in animations
  const animationCallback: ScrollCallback = (entry) => {
    const content = entry.target.querySelector('.section-content');
    if (content) {
      if (entry.isIntersecting) {
        content.classList.add('visible');
      } else {
        content.classList.remove('visible');
      }
    }
  };

  // Callback for active section tracking (scroll indicator)
  const navigationCallback: ScrollCallback = (entry) => {
    // Only process when intersection ratio is above 0.5 (majority visible)
    if (entry.intersectionRatio > 0.5) {
      const sectionIndex = entry.target.getAttribute('data-section');
      // Update active dot
      document.querySelectorAll('.scroll-dot').forEach((dot, index) => {
        if (index === parseInt(sectionIndex || '0')) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    }
  };

  callbacks.push(animationCallback, navigationCallback);

  // Single observer for all section-related functionality
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        callbacks.forEach(callback => callback(entry));
      });
    },
    {
      threshold: [0.2, 0.5, 0.6], // 0.2 for animations, 0.5+ for navigation tracking
    }
  );

  // Observe all sections
  document.querySelectorAll('[data-section]').forEach((section) => {
    observer.observe(section);
  });
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initScrollObserver);
} else {
  initScrollObserver();
}
