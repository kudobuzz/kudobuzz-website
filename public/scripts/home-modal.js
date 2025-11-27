const initHomepageModal = () => {
  const modal = document.querySelector('[data-modal="homepage-banner"]');
  if (!modal) return;

  // Prevent running twice if re-initialized
  if (modal.dataset.bound === "true") return;
  modal.dataset.bound = "true";

  const closeButton = modal.querySelector("[data-close]");
  const backdrop = modal.querySelector("[data-backdrop]");

  const hideModal = () => {
    modal.classList.add("is-hidden");
    modal.setAttribute("aria-hidden", "true");
  };

  const timer = window.setTimeout(hideModal, 10000);
  closeButton?.addEventListener("click", () => {
    hideModal();
    window.clearTimeout(timer);
  });
  backdrop?.addEventListener("click", () => {
    hideModal();
    window.clearTimeout(timer);
  });
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initHomepageModal, { once: true });
} else {
  initHomepageModal();
}
