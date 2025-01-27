let buttonShow = document.querySelectorAll(".button-hide-show");
let brands = document.querySelector(".brands");
let brandHidden1120 = brands.querySelectorAll(".brand");
/*внизу то, что должно изменять ширину экрана */
let swiperSearch = document.querySelector(".swiper--search");
let swiperPagination = document.querySelector(".swiper-pagination--hid");
let swiperButtonPrev = document.querySelector(".swiper-button-prev--hid");
let swiperButtonNext = document.querySelector(".swiper-button-next--hid");

/*наверху то, что должно изменять ширину экрана */

let mySwiper = null;

let showButton = function (oneBrandHidden1120) {
  buttonShow[0].addEventListener("click", function () {
    buttonShow[1].classList.remove("button-hide-show--hide-1120px");
    buttonShow[0].classList.add("button-hide-show--hide-1120px");
    if (oneBrandHidden1120.classList.contains("brand__hidden1120")) {
      oneBrandHidden1120.classList.remove("brand__hidden1120");
      oneBrandHidden1120.classList.add("brand__flex1120");
    }
  });
};

let hideButton = function (oneBrandHidden1120) {
  buttonShow[1].addEventListener("click", function () {
    buttonShow[0].classList.remove("button-hide-show--hide-1120px");
    buttonShow[1].classList.add("button-hide-show--hide-1120px");
    if (oneBrandHidden1120.classList.contains("brand__flex1120")) {
      oneBrandHidden1120.classList.remove("brand__flex1120");
      oneBrandHidden1120.classList.add("brand__hidden1120");
    }
  });
};

for (let i = 0; i < brandHidden1120.length; i++) {
  showButton(brandHidden1120[i]);
  hideButton(brandHidden1120[i]);
}

let widthСheck = function (win) {
  if (win <= 768) {
    if (!swiperSearch.classList.contains("swiper")) {
      console.log("Экран уменьшился");
      swiperSearch.classList.add("swiper");
      brands.classList.add("swiper-wrapper");
      swiperPagination.classList.add("swiper-pagination");
      swiperButtonPrev.classList.add("swiper-button-prev");
      swiperButtonNext.classList.add("swiper-button-next");

      let functionSwiperSlide = function (slide) {
        slide.classList.add("swiper-slide");
      };

      for (let i = 0; i < brandHidden1120.length; i++) {
        functionSwiperSlide(brandHidden1120[i]);
      }

      swype();
    }
  } else {
    if (swiperSearch.classList.contains("swiper")) {
      mySwiper.destroy(true, true);
      mySwiper = null;
      console.log("свайпер уничтожен");

      console.log("Экран увеличился");
      swiperSearch.classList.remove("swiper");
      brands.classList.remove("swiper-wrapper");
      swiperPagination.classList.remove("swiper-pagination");
      swiperButtonPrev.classList.remove("swiper-button-prev");
      swiperButtonNext.classList.remove("swiper-button-next");

      let functionSwiperSlide = function (slide) {
        slide.classList.remove("swiper-slide");
      };

      for (let i = 0; i < brandHidden1120.length; i++) {
        functionSwiperSlide(brandHidden1120[i]);
      }
    }
  }
};

let swype = function () {
  /*document.addEventListener("DOMContentLoaded", function () {*/
  console.log("сработал свайпер");
  mySwiper = new Swiper(".swiper", {
    threshold: 4,
    touchRatio: 1,

    direction: "horizontal",
    loop: false,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      768: {
        enabled: false,
      },
    },
    slidesPerView: 3,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  /*});*/
};

widthСheck(window.innerWidth);

window.addEventListener("resize", () => {
  widthСheck(window.innerWidth);
});
