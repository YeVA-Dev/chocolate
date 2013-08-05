!function($) {
	$("aside>ul>li.dropdown").on("click", ">a", function(e) {
		$(e.delegateTarget).toggleClass("active")
		$("aside>ul>li ul").slideToggle()
		return false
	}).has('ul li.active').addClass("active").find('ul').show()
	
	
	$("#in_view1,#in_view2").on("click", "ul a", function(e) {
		$(e.delegateTarget).find(".full_img").attr("src", $(this).attr("href"))
		return false
	})
}(window.jQuery);
