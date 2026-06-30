const menu_icon = document.getElementById("menu-icon");
const icon = document.querySelector(".hambergur-icon");
const mobile_menu = document.querySelector(".mobile_menu");
const overlay = document.querySelector(".overlay");
const nav = document.querySelector(".nav");
const items = document.querySelectorAll(".item");
// const resumeTabs = document.querySelectorAll(".resume-tab");
const portfolioListItems = document.querySelectorAll(".portfolio-list_item");

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
    document
      .querySelector(".resume-tab-show")
      .classList.remove("resume-tab-show");

    const currentLinkBtn = this.querySelector(".link_btn");
    const currentColorSpan = this.querySelector(".item_color");

    currentLinkBtn.classList.add("selected_item");
    currentColorSpan.classList.add("text-white");
    const dataContent = this.getAttribute("data-content");
    document.querySelector(dataContent).classList.add("resume-tab-show");
  });
});

portfolioListItems.forEach(function (item) {
  item.addEventListener("click", function () {
    document
      .querySelector(".portfolio-list_item_active")
      .classList.remove("portfolio-list_item_active");
    this.classList.add("portfolio-list_item_active");
  });
});

// swiper js

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  breakpoints: {
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 49,
    },
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
