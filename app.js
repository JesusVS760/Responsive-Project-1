const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

const hamburger = document.querySelector(".hamburger-Icon");
const navMenu = document.querySelector(".navbar__menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
