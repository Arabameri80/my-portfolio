const menu_icon = document.getElementById("menu-icon");
const icon = document.querySelector(".hambergur-icon");
const mobile_menu = document.querySelector(".mobile_menu");
const overlay = document.querySelector(".overlay");
const nav = document.querySelector(".nav");
const items = document.querySelectorAll(".item");

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

items.forEach(function (item) {
  item.addEventListener("click", function () {
    items.forEach(function (otherItem) {
      const linkBtn = otherItem.querySelector(".link_btn");
      const colorSpan = otherItem.querySelector(".item_color");

      linkBtn.classList.remove("selected_item");
      colorSpan.classList.remove("text-white");
    });

    const currentLinkBtn = this.querySelector(".link_btn");
    const currentColorSpan = this.querySelector(".item_color");

    currentLinkBtn.classList.add("selected_item");
    currentColorSpan.classList.add("text-white");
  });
});
