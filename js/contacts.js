/* карты */
!function($) {
	"use strict"; // jshint ;_;
	var myLatlng = new google.maps.LatLng(49.97723, 36.24945);
	var myOptions = {
		zoom : 15,
		center : myLatlng,
		mapTypeId : google.maps.MapTypeId.ROADMAP
	}
	var map = new google.maps.Map(document.getElementById("g_maps"), myOptions);
	var marker = new google.maps.Marker({
		position : myLatlng,
		map : map,
		title : "Студия праздников \"Шоколад\""
	});
}(window.jQuery);

