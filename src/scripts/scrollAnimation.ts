/**
 * Animate sections on scroll using Intersection Observer
 * Adds/removes 'visible' class to trigger fade + slide up animation
 */
export function initScrollAnimation() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const content = entry.target.querySelector('.section-content');
        if (content) {
          if (entry.isIntersecting) {
            content.classList.add('visible');
          } else {
            content.classList.remove('visible');
          }
        }
      });
    },
    {
      threshold: 0.2, // Trigger when 20% visible
    }
  );

  // Observe all sections
  document.querySelectorAll('[data-section]').forEach((section) => {
    observer.observe(section);
  });
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initScrollAnimation);
} else {
  initScrollAnimation();
}
