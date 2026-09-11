(function () {
  "use strict";

  function initVideoStrip() {
    var el = document.querySelector(".video-swiper");
    if (!el || typeof Swiper === "undefined") return;
    new Swiper(el, {
      slidesPerView: 1.3,
      spaceBetween: 20,
      freeMode: true,
      mousewheel: { forceToAxis: true },
      breakpoints: {
        640: { slidesPerView: 2.2, spaceBetween: 24 },
        1024: { slidesPerView: 3.3, spaceBetween: 28 },
      },
    });
  }

  function initTestimonials() {
    var el = document.querySelector(".testimonial-swiper");
    if (!el || typeof Swiper === "undefined") return;
    new Swiper(el, {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: false,
      autoHeight: false,
      pagination: {
        el: el.querySelector(".swiper-pagination"),
        clickable: true,
      },
      navigation: {
        nextEl: el.parentElement.querySelector(".swiper-next"),
        prevEl: el.parentElement.querySelector(".swiper-prev"),
      },
      breakpoints: {
        768: { slidesPerView: 2, spaceBetween: 28 },
      },
    });
  }

  window.SABB_CAROUSELS = {
    init: function () {
      initVideoStrip();
      initTestimonials();
    },
  };
})();
