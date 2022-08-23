const modalBG = document.querySelector(".window-background");
const modalCloseBtn = modalBG.querySelector(".modal__close");
const toBasketButtons = document.querySelectorAll(".js-to-basket");

modalCloseBtn.classList.add("modal__close--show");

modalCloseBtn.addEventListener("click" || "touch", function (event) {
  event.preventDefault()
  modalBG.classList.remove("window-background--show");
});

modalBG.addEventListener("click" || "touch", function (event) {
  if (event.path.length < 6) {
    modalBG.classList.remove("window-background--show");
  }
});

document.addEventListener("keydown", function (e) {
  if (e.keyCode === 27) {
    e.preventDefault();
    modalBG.classList.remove("window-background--show");
  }
})

function showModal() {
  modalBG.classList.add("window-background--show")
}

toBasketButtons.forEach(function (item) {
  item.addEventListener("click" || "touch", function (e) {
    e.preventDefault();
    showModal();
  })
})
