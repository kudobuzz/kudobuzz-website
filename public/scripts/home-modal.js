const initHomepageModal = () => {
  const modal = document.querySelector('[data-modal="homepage-banner"]');
  if (!modal) return;

  // Prevent running twice if re-initialized
  if (modal.dataset.bound === "true") return;
  modal.dataset.bound = "true";

  const closeButton = modal.querySelector("[data-close]");
  const backdrop = modal.querySelector("[data-backdrop]");

  const showModal = () => {
    modal.classList.add("is-visible");
    modal.setAttribute("aria-hidden", "false");
  };

  const hideModal = () => {
    modal.classList.remove("is-visible");
    modal.setAttribute("aria-hidden", "true");
  };

  // Show modal after 10 seconds
  const showTimer = window.setTimeout(showModal, 10000);

  closeButton?.addEventListener("click", () => {
    hideModal();
    window.clearTimeout(showTimer);
  });
  backdrop?.addEventListener("click", () => {
    hideModal();
    window.clearTimeout(showTimer);
  });
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initHomepageModal, { once: true });
} else {
  initHomepageModal();
}
