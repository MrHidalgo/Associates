

/**
 * @description Document DOM ready.
 */
$(document).ready((ev) => {
  /**
   *
   * @type {*|jQuery|HTMLElement}
   * @private
   */
  const _document = $(document),
    _window = $(window);


	/*
	* =============================================
	* CALLBACK :: start
	* ============================================= */
  const initTabs = () => {
    $('.mapping__tabs-btn').on('click', (ev) => {
      const _elem = $(ev.currentTarget),
        _elemID = _elem.data('btn-id');

      $('.mapping__tabs-btn').removeClass('is-active');
      _elem.addClass('is-active');

      $('.mapping__content').hide().removeClass('is-active');
      $('.mapping__content[data-content="' + _elemID + '"]').fadeIn('350').addClass('is-active');
    });
  };

  const initAreImageLoad = () => {
    setTimeout(() => {
      $('.a-main').addClass('is-animated');
    }, 0);
  };
	/*
	* CALLBACK :: end
	* ============================================= */



  /**
   * @description Init all method
   */
  const initJquery = () => {
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
    initAreImageLoad();
  };
  initJquery();
});

