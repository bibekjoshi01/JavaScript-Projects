const openModal = document.querySelector(".open-modal");
const closeModal = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const container = document.querySelector(".container");


openModal.addEventListener("click", function () {
  modal.classList.add("show-modal");
  container.style.display = "none";
});

closeModal.addEventListener("click", function () {
  modal.classList.remove("show-modal");
  container.style.display = "block";
});
