/* stylelint-disable */
const header = document.querySelector(".header");
const toggleMenu = header.querySelector(".toggle-menu");
const menu = header.querySelector(".menu");

if (!menu.classList.contains("menu--scriptable")) {
  menu.classList.add("menu--scriptable");
  toggleMenu.classList.remove("toggle-menu--hide");
}

toggleMenu.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("toggle-menu")) {
    menu.classList.toggle("menu--show");
    toggleMenu.classList.toggle("toggle-menu--close");
  }
})
