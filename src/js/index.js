import loader from "./modules/loader.js";
import rewiewsSwiper from "./modules/rewiewsSwiper.js";
import toggleBtn from "./modules/toggle-btn.js";
import spoilers from "./modules/spoilers.js";

loader();
rewiewsSwiper();
toggleBtn();
spoilers();

import Swiper from "swiper/bundle";
import "swiper/css/bundle";

// init Swiper:
const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  parallax: true,
  speed: 1000,

  keyboard: {
    enabled: true,
  },

  // If we need pagination
  pagination: {
    el: ".slider-controls__count",
    type: "fraction",
    formatFractionCurrent: function (number) {
      return ("0" + number).slice(-2);
    },
    formatFractionTotal: function (number) {
      return ("0" + number).slice(-2);
    },
    renderFraction: function (currentClass, totalClass) {
      return (
        '<span class="' +
        currentClass +
        '"></span>' +
        "<span>/</span>" +
        '<span class="' +
        totalClass +
        '"></span>'
      );
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: "#sliderNext",
    prevEl: "#sliderPrev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// Объявление переменных
const bodyClass = document.body;
let ariaLabel;

const changeTheme = () => {
  const headerElements = document.querySelector(".header");
  const headerChildren = headerElements.querySelectorAll("*");

  if (ariaLabel != "1 / 7" && ariaLabel != "7 / 7") {
    const slideElement = document.querySelectorAll(".slide");
    slideElement.forEach((el) => {
      el.classList.add("_dark-mode");
      // Добавляем класс _dark-mode всем дочерним классам элемента header
      headerChildren.forEach((child) => {
        child.classList.add("_dark-mode");
      });
    });
  } else {
    // Удаляем класс _dark-mode всем дочерним классам элемента header
    headerChildren.forEach((child) => {
      child.classList.remove("_dark-mode");
    });
  }
};

function logCurrentSlideAriaLabel() {
  const activeSlide = swiper.slides[swiper.activeIndex];
  ariaLabel = activeSlide.getAttribute("aria-label");

  changeTheme();
}

if (bodyClass.classList.contains("main-screen")) {
  logCurrentSlideAriaLabel();
  swiper.on("slideChange", logCurrentSlideAriaLabel);
}

const headerElements = document.querySelector(".header__content");
const headerChildren = headerElements.querySelectorAll("*");

if (headerElements.classList.contains("_dark-mode")) {
  // Добавляем класс _dark-mode всем дочерним классам элемента header
  headerChildren.forEach((child) => {
    child.classList.add("_dark-mode");
  });
}
