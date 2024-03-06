import Swiper from "swiper/bundle";

function rewiewsSwiper() {
  const rewiewsSwiper = new Swiper(".reviews-swiper", {
		loop: true,
		parallax: true,
		speed: 1000,
    slidesPerView: 2,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination", // Элемент для пагинации
      clickable: true, // Возможность кликать на пагинацию
    },
    navigation: {
      nextEl: ".slider__btn-next", // Кнопка "Следующий слайд"
      prevEl: ".slider__btn-prew", // Кнопка "Предыдущий слайд"
    },
  });
}

export default rewiewsSwiper;