'use strict';

/*
*
* ============================
* ============================
*
* Include lib:
*
* - webFontLoader.js;
* - preventBehavior.js;
* - svg4everybody.js;
*
* ============================
* ============================
* */

/**
 *
 * @type {{init(): void, change(): void, chooseVal(*): void, focusElem(*): void, blurElem(*): void}}
 * @private
 */
var customSelect = {
  init: function init() {
    var _select = document.querySelectorAll('select');

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = _select[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var elem = _step.value;

        elem.previousElementSibling.innerHTML = elem.options[elem.selectedIndex].text;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  },
  change: function change() {
    var _select = document.querySelectorAll('select');

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = _select[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var elem = _step2.value;

        var _selectedOption = elem.options[elem.selectedIndex],
            _selectedValue = _selectedOption.value,
            _selectedText = _selectedOption.text;

        if (_selectedValue !== '') {
          this.chooseVal(elem);
        }

        elem.previousElementSibling.innerHTML = _selectedText;
        this.blurElem(elem);
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  },
  chooseVal: function chooseVal(elem) {
    elem.closest('.c-form__select-wrapper').classList.add('is-choose');
  },
  focusElem: function focusElem(elem) {
    elem.closest('.c-form__select-wrapper').classList.add('is-focus');
  },
  blurElem: function blurElem(elem) {
    elem.closest('.c-form__select-wrapper').classList.remove('is-focus');
  }
};

/**
 * @name initCustomSelect
 *
 * @description
 */
var initCustomSelect = function initCustomSelect() {
  var _select = document.querySelectorAll('select');

  customSelect.init();

  var _loop = function _loop(elem) {
    elem.addEventListener('change', function () {
      customSelect.change(elem);
    });
    elem.addEventListener('focus', function () {
      customSelect.focusElem(elem);
    });
    elem.addEventListener('click', function () {
      customSelect.focusElem(elem);
    });
    elem.addEventListener('blur', function () {
      customSelect.blurElem(elem);
    });
  };

  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = _select[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var elem = _step3.value;

      _loop(elem);
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3.return) {
        _iterator3.return();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }
};

/**
 * @name initHamburger
 *
 * @description Init hamburger logic with animated
 */
var initHamburger = function initHamburger() {

  var btn = document.querySelector("[hamburger-js]"),
      hideScrollContainer = document.querySelectorAll("html, body"),
      mobileContainer = document.querySelector("[mobile-block-js]");

  /**
    * @description
   */
  btn.addEventListener("click", function (ev) {
    var elem = ev.currentTarget;

    elem.classList.toggle("is-active");
    mobileContainer.classList.toggle("is-open");

    hideScrollContainer.forEach(function (val, idx) {
      val.classList.toggle("is-hideScroll");
    });
  });
};

/**
 * @name initPreventBehavior
 *
 * @description
 */
var initPreventBehavior = function initPreventBehavior() {

  var link = document.querySelectorAll("a");

  link.forEach(function (val, idx) {

    val.addEventListener("click", function (e) {
      if (val.getAttribute("href") === "#") {
        e.preventDefault();
      }
    });
  });
};

/**
 * @name initStellar
 * @description Stellar.js is a jQuery plugin that provides parallax scrolling effects to any scrolling element.
 *
 * Parallax Elements
 * - data-stellar-ratio="1"
 *
 * Parallax Backgrounds
 * - data-stellar-background-ratio="1"
 */
var initStellar = function initStellar() {
  if ($("[parallax-js]").length) {
    $(function () {
      $.stellar({
        // Set scrolling to be in either one or both directions
        horizontalScrolling: false,
        verticalScrolling: true,

        // Set the global alignment offsets
        horizontalOffset: 0,
        verticalOffset: 0,

        // Refreshes parallax content on window load and resize
        responsive: false,

        // Select which property is used to calculate scroll.
        // Choose 'scroll', 'position', 'margin' or 'transform',
        // or write your own 'scrollProperty' plugin.
        scrollProperty: 'scroll',

        // Select which property is used to position elements.
        // Choose between 'position' or 'transform',
        // or write your own 'positionProperty' plugin.
        positionProperty: 'position',

        // Enable or disable the two types of parallax
        parallaxBackgrounds: true,
        parallaxElements: true,

        // Hide parallax elements that move outside the viewport
        hideDistantElements: false,

        // Customise how elements are shown and hidden
        hideElement: function hideElement($elem) {
          $elem.hide();
        },
        showElement: function showElement($elem) {
          $elem.show();
        }
      });
    });
  }
};

/**
 * @name initSvg4everybody
 *
 * @description SVG for Everybody adds external spritemaps support to otherwise SVG-capable browsers.
 */
var initSvg4everybody = function initSvg4everybody() {

  svg4everybody();
};

/**
 * @name initSwiper
 *
 * @description initialize Swiper
 */
var initSwiper = function initSwiper() {

  var swiperThink = new Swiper('.swiper-container-think', {
    // Optional parameters
    wrapperClass: "swiper-wrapper",
    slideClass: "swiper-slide",
    direction: 'horizontal', // 'horizontal' or 'vertical'
    loop: true,
    watchOverflow: true,
    normalizeSlideIndex: true,
    grabCursor: true,
    freeMode: false,
    speed: 500,
    effect: 'slide', // "slide", "fade", "cube", "coverflow" or "flip"
    // autoplay: {
    //   delay: 5000,
    // },
    // Disable preloading of all images
    // preloadImages: false,
    // Enable lazy loading
    // lazy: {
    //   loadPrevNext: true,
    // },

    // off touch for destop
    // touchMoveStopPropagation:false,
    // simulateTouch : false,
    // allowSwipeToNext: true,
    // allowSwipeToPrev: true,
    // allowPageScroll: "auto ",

    initialSlide: 1,
    slidesPerView: 'auto',
    spaceBetween: 37,
    centeredSlides: true,
    /*breakpoints: {
      // when window width is <= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      // when window width is <= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is <= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    },*/

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
      // renderBullet: function (index, className) {
      //   return `
      //     <div class="${className}">
      //       ${index}
      //     </div>
      //   `;
      // }
    }

    // Navigation arrows
    /*navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },*/

    // And if we need scrollbar
    /*scrollbar: {
      el: '.swiper-scrollbar',
    },*/

    /*on: {
      "slideChange": function () {
        console.log("slideChange");
      },
    }*/
  });

  var swiperApply = new Swiper('.swiper-container-apply', {
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
      clickable: true
    }
  });

  var swiperStand = new Swiper('.swiper-container-stand', {
    // Optional parameters
    wrapperClass: "swiper-wrapper",
    slideClass: "swiper-slide",
    direction: 'horizontal', // 'horizontal' or 'vertical'
    loop: true,
    watchOverflow: true,
    normalizeSlideIndex: true,
    grabCursor: true,
    freeMode: false,
    speed: 500,
    effect: 'slide', // "slide", "fade", "cube", "coverflow" or "flip"
    // autoplay: {
    //   delay: 5000,
    // },
    // Disable preloading of all images
    // preloadImages: false,
    // Enable lazy loading
    // lazy: {
    //   loadPrevNext: true,
    // },

    // off touch for destop
    // touchMoveStopPropagation:false,
    // simulateTouch : false,
    // allowSwipeToNext: true,
    // allowSwipeToPrev: true,
    // allowPageScroll: "auto ",

    initialSlide: 1,
    slidesPerView: 'auto',
    spaceBetween: 20,
    centeredSlides: true,
    /*breakpoints: {
      // when window width is <= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      // when window width is <= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is <= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    },*/

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
      // renderBullet: function (index, className) {
      //   return `
      //     <div class="${className}">
      //       ${index}
      //     </div>
      //   `;
      // }
    }

    // Navigation arrows
    /*navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },*/

    // And if we need scrollbar
    /*scrollbar: {
      el: '.swiper-scrollbar',
    },*/

    /*on: {
      "slideChange": function () {
        console.log("slideChange");
      },
    }*/
  });

  var swiperExpertise = new Swiper('.swiper-container-expertise', {
    // Optional parameters
    wrapperClass: "swiper-wrapper",
    slideClass: "swiper-slide",
    direction: 'horizontal', // 'horizontal' or 'vertical'
    loop: true,
    watchOverflow: true,
    normalizeSlideIndex: true,
    grabCursor: true,
    freeMode: false,
    speed: 500,
    effect: 'slide', // "slide", "fade", "cube", "coverflow" or "flip"
    // autoplay: {
    //   delay: 5000,
    // },
    // Disable preloading of all images
    // preloadImages: false,
    // Enable lazy loading
    // lazy: {
    //   loadPrevNext: true,
    // },

    // off touch for destop
    // touchMoveStopPropagation:false,
    // simulateTouch : false,
    // allowSwipeToNext: true,
    // allowSwipeToPrev: true,
    // allowPageScroll: "auto ",

    slidesPerView: 1,
    spaceBetween: 25,
    /*breakpoints: {
      // when window width is <= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      // when window width is <= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is <= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    },*/

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
      // renderBullet: function (index, className) {
      //   return `
      //     <div class="${className}">
      //       ${index}
      //     </div>
      //   `;
      // }
    }

    // Navigation arrows
    /*navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },*/

    // And if we need scrollbar
    /*scrollbar: {
      el: '.swiper-scrollbar',
    },*/

    /*on: {
      "slideChange": function () {
        console.log("slideChange");
      },
    }*/
  });
};

/**
 * @name scrollAnimation
 *
 * @param elem
 * @param el
 *
 * @description
 */
var scrollAnimation = function scrollAnimation(elem, el) {

  $(elem).css({
    'animation-name': $(el).data('animation-name') ? $(el).data('animation-name') + ", fadeIn" : 'slideInUp, fadeIn',
    'animation-delay': $(el).data('animation-delay') || '0s',
    'animation-duration': $(el).data('animation-duration') || '1s'
  });
};

/**
 * @name initViewPortChecker
 *
 * @param className {String}              - default is `viewport-hide-js`
 * @param classNameToAdd {String}         - default is `viewport-show-js animated`
 * @param offsetVal {Number}              - default is 100
 * @param callbackFunctionName {Object}   - default is `scrollAnimation()`
 *
 * @description Detects if an element is in the viewport and adds a class to it
 *
 * You can to add some attribute:
 * - <div data-vp-add-class="random"></div>                       > classToAdd
 * - <div data-vp-remove-class="random"></div>                    > classToRemove
 * - <div data-vp-remove-after-animation="true|false"></div>      > Removes added classes after CSS3 animation has completed
 * - <div data-vp-offset="[100 OR 10%]"></div>                    > offset
 * - <div data-vp-repeat="true"></div>                            > repeat
 * - <div data-vp-scrollHorizontal="false"></div>                 > scrollHorizontal
 */
var initViewPortChecker = function initViewPortChecker() {
  var className = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "viewport-hide-js";
  var classNameToAdd = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "viewport-show-js animated";
  var offsetVal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
  var callbackFunctionName = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : scrollAnimation;


  $("." + className).not(".full-visible").each(function (idx, el) {

    $(el).viewportChecker({
      classToAdd: classNameToAdd,
      classToAddForFullView: 'full-visible',
      classToRemove: className,
      removeClassAfterAnimation: true,
      offset: offsetVal,
      repeat: false,
      callbackFunction: function callbackFunction(elem, action) {

        callbackFunctionName(elem, el);
      }
    });
  });
};
var initViewPortCheckerCount = function initViewPortCheckerCount() {
  var className = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "viewport-hide-js";
  var classNameToAdd = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "viewport-show-js animated";
  var offsetVal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;


  $("." + className).not(".full-visible").each(function (idx, el) {

    $(el).viewportChecker({
      classToAdd: classNameToAdd,
      classToAddForFullView: 'full-visible',
      classToRemove: className,
      removeClassAfterAnimation: true,
      offset: offsetVal,
      repeat: false,
      callbackFunction: function callbackFunction(elem, action) {

        $('.viewport-show-js [advantages-num-js]').countTo();
        $('.viewport-show-js [network-num-js]').countTo();
      }
    });
  });
};

/**
 * @name initWebFontLoader
 *
 * @description Loading fonts regardless of the source, then adds a standard set of events you may use to control the loading experience... for more details => https://github.com/typekit/fvd
 */
var initWebFontLoader = function initWebFontLoader() {

  /**
    * @description
   */
  WebFont.load({
    google: {
      families: ['Roboto:100,300,400,500,700,900']
    }
  });

  /**
    * @description
   */
  // const WebFontConfig = {
  //   custom: {
  //     families: [
  //       'Lato:n1,n3,n4,n5,n6,n7,n9'
  //     ]
  //   }
  // };
};
/**
 * @description Document DOM ready.
 */
(function () {
  /*
  * =============================================
  * CALLBACK :: start
  * ============================================= */
  var initTabs = function initTabs() {
    $('.mapping__tabs-btn').on('click', function (ev) {
      var _elem = $(ev.currentTarget),
          _elemID = _elem.data('btn-id');

      $('.mapping__tabs-btn').removeClass('is-active');
      _elem.addClass('is-active');

      $('.mapping__content').hide().removeClass('is-active');
      $('.mapping__content[data-content="' + _elemID + '"]').fadeIn('350').addClass('is-active');
    });
  };
  /*
  * CALLBACK :: end
  * ============================================= */

  /**
   * @name initNative
   *
   * @description Init all method
   */
  var initNative = function initNative() {
    // default
    initWebFontLoader();
    initPreventBehavior();
    initSvg4everybody();
    // ==========================================

    // lib
    // ==========================================
    initSwiper();
    initViewPortCheckerCount();
    initStellar();
    initCustomSelect();
    initHamburger();

    // callback
    // ==========================================
    initTabs();
  };
  initNative();
})();