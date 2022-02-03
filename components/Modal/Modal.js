const openModalsAll = document.querySelectorAll("[data-modal-target]");
const closeModalsAll = document.querySelectorAll("[data-modal-close]");
const overlay = document.getElementById("overlay");

function closeAllModal() {
  const modals = document.querySelectorAll(".modals.active");
  modals.forEach((modal) => close(modal));
}

function openModalHandler(e) {
  const modal = document.querySelector(e.target.dataset.modalTarget);

  openModal(modal);
}

function closeModalHandler(e) {
  const modal = e.target.closest(".modal");

  closeModal(modal);
}

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

overlay.addEventListener("click", closeAllModal);

openModalsAll.forEach((modalbtn) =>
  modalbtn.addEventListener("click", openModalHandler)
);

closeModalsAll.forEach((closeBtn) =>
  closeBtn.addEventListener("click", closeModalHandler)
);
