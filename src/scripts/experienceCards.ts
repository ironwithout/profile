/**
 * Handle expandable experience cards
 * Uses event delegation for better performance and maintainability
 */
export function initExperienceCards() {
  // Use event delegation on the document
  document.addEventListener('click', (event) => {
    const button = (event.target as HTMLElement).closest('[data-experience-toggle]');
    if (!button) return;

    const cardId = button.getAttribute('data-experience-toggle');
    if (!cardId) return;

    const content = document.getElementById(cardId);
    const icon = button.querySelector('.expand-icon');
    
    if (!content || !icon) return;

    // Close all other experience cards
    document.querySelectorAll('[id^="experience-"]').forEach((el) => {
      if (el.id !== cardId) {
        el.classList.remove('expanded');
        // Find and reset the icon for closed cards
        const otherButton = document.querySelector(`[data-experience-toggle="${el.id}"]`);
        if (otherButton) {
          otherButton.querySelector('.expand-icon')?.classList.remove('rotate-90');
        }
      }
    });

    // Toggle current card
    const isExpanded = content.classList.toggle('expanded');
    icon.classList.toggle('rotate-90');
    
    // Update ARIA attribute
    button.setAttribute('aria-expanded', String(isExpanded));
  });
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initExperienceCards);
} else {
  initExperienceCards();
}
