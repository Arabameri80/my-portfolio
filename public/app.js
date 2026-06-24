const menu_icon = document.getElementById("menu-icon");
const icon = document.querySelector(".hambergur-icon");
const mobile_menu = document.querySelector(".mobile_menu");
const overlay = document.querySelector(".overlay");
const nav = document.querySelector(".nav");

menu_icon.addEventListener("click", function () {
  icon.classList.toggle("x-icon");
  mobile_menu.classList.toggle("mobile_menu-open");
  overlay.classList.toggle("overlay-open");
});

overlay.addEventListener("click", function () {
  icon.classList.toggle("x-icon");
  mobile_menu.classList.toggle("mobile_menu-open");
  overlay.classList.toggle("overlay-open");
});

// nav.addEventListener("click", function () {
//   icon.classList.remove("x-icon");
//   mobile_menu.classList.remove("mobile_menu-open");
//   overlay.classList.remove("overlay-open");
// });
