/* stylelint-disable */
const header = document.querySelector(".header");
const toggleMenu = header.querySelector(".toggle-menu");
const nav = header.querySelector(".header__nav");

if (!nav.classList.contains("header__nav--hide")) {

  nav.classList.add("header__nav--hide");
  header.classList.add("page__header--hide");
  toggleMenu.classList.remove("toggle-menu--hide");
}

toggleMenu.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("toggle-menu")) {
    nav.classList.toggle("header__nav--show");
    toggleMenu.classList.toggle("toggle-menu--close");
  }
})
