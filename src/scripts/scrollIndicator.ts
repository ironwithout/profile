/**
 * Handle scroll indicator navigation
 * Note: Active section tracking is now handled in scrollAnimation.ts
 * to avoid duplicate Intersection Observers
 */
export function initScrollIndicator() {
  // Handle click events for scroll navigation
  document.addEventListener('click', (event) => {
    const button = (event.target as HTMLElement).closest('[data-scroll-to]');
    if (!button) return;

    const sectionIndex = button.getAttribute('data-scroll-to');
    if (sectionIndex === null) return;

    const targetSection = document.querySelector(`[data-section="${sectionIndex}"]`);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initScrollIndicator);
} else {
  initScrollIndicator();
}
