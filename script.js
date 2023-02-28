const modal = document.querySelector(".modal-bg");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.getElementById("contactUs");

const openModal = () => {
  modal.classList.add("bg-active");
};

const closeModal = () => {
  modal.classList.remove("bg-active");
};

btnOpenModal.addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
