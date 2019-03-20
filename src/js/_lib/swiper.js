

/**
 * @name initSwiper
 *
 * @description initialize Swiper
 */
const initSwiper = () => {

  const swiperThink = new Swiper('.swiper-container-think', {
    direction: 'horizontal', // 'horizontal' or 'vertical'
    loop: true,
    watchOverflow: true,
    normalizeSlideIndex: true,
    grabCursor: true,
    freeMode: false,
    speed: 500,
    effect: 'slide', // "slide", "fade", "cube", "coverflow" or "flip"
    initialSlide: 1,
    slidesPerView: 'auto',
    spaceBetween: 37,
    centeredSlides: true,
    breakpoints: {
      767: {
        slidesPerView: 1,
        spaceBetween: 15,
        centeredSlides: false
      }
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  });

  const swiperApply = new Swiper('.swiper-container-apply', {
    direction: 'vertical', // 'horizontal' or 'vertical'
    loop: true,
    watchOverflow: true,
    normalizeSlideIndex: true,
    grabCursor: true,
    freeMode: false,
    speed: 500,
    effect: 'slide', // "slide", "fade", "cube", "coverflow" or "flip"
    initialSlide: 1,
    slidesPerView: 'auto',
    spaceBetween: 47,
    centeredSlides: true,
    breakpoints: {
      // when window width is <= 767px
      767: {
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: false
      }
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  });

  const swiperStand = new Swiper('.swiper-container-stand', {
    direction: 'horizontal', // 'horizontal' or 'vertical'
    loop: true,
    watchOverflow: true,
    normalizeSlideIndex: true,
    grabCursor: true,
    freeMode: false,
    speed: 500,
    effect: 'slide', // "slide", "fade", "cube", "coverflow" or "flip"
    initialSlide: 1,
    slidesPerView: 'auto',
    spaceBetween: 20,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  });

  const swiperExpertise = new Swiper('.swiper-container-expertise', {
    direction: 'horizontal', // 'horizontal' or 'vertical'
    loop: true,
    watchOverflow: true,
    normalizeSlideIndex: true,
    grabCursor: true,
    freeMode: false,
    speed: 500,
    effect: 'slide', // "slide", "fade", "cube", "coverflow" or "flip"
    slidesPerView: 1,
    spaceBetween: 25,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  });
};
