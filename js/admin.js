const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const cancel = document.querySelector(".cancel");
const imageAddButton = document.querySelector(".add-action-card");

function closeModal() {
  modal.style.display = "none";
  overlay.style.display = "none";
}

function openModal() {
  modal.style.display = "block";
  overlay.style.display = "block";
}

imageAddButton.addEventListener("click", () => {
  openModal();
  cancel.addEventListener("click", closeModal);
});
