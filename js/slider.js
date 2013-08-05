!function($) {
	$(function() {
		$("#h_slider").jCarouselLite({
		    btnNext : "#h_slider .next",
		    btnPrev : "#h_slider .prev",
		    visible : 1,
		    scroll : 1,
		    easing : "easeinout",
		    speed : 800,
		    auto : true,
		    timeout : 6000,
		    btnGo : $("#slide-nav .pages a"),
		    activeClass : "on",
		    circular : true
		});

	})
}(window.jQuery);

/* slider in content */
!function($) {
	$(function() {
		$("#carousel-wrapp").jCarouselLite({
		    btnNext : "#carousel .next",
		    btnPrev : "#carousel .prev",
		    auto : true,
		    visible : 5,
		    scroll : 1,
		    easing : "easeinout",
		    speed : 800,
		    timeout : 6000,
		    circular : true,
		    autoCss:false
		});

	})
}(window.jQuery);
