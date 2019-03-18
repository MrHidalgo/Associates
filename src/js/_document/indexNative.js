/**
 * @description Document DOM ready.
 */
(function () {
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
	const initNative = () => {
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

		// callback
		// ==========================================
		initTabs();
	};
	initNative();
})();
