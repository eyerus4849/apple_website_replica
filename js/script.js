// ******

$(document).ready(function () {
	// 1st condition, if window's browser is originally < 767 when we open the browser
	if ($(window).width() < 767) {
		$(".footer-link").addClass("shoplist-mobile");
	}
	
	$(window).on("resize", function () {
		// 2nd condition, whenever we resize our window
		if ($(window).width() < 767) {
			$(".footer-link").addClass("shoplist-mobile");
			$(".arrow").removeClass("cross");
			$(".arrow").addClass("plus");
			$("footer ul").hide();
		}
		if ($(window).width() >768) {
			$(".footer-link").removeClass("shoplist-mobile");
			$("ul").show();
		}
	});
	$(document).on("click", ".shoplist-mobile h3", function () {
		$(this).next("ul").slideToggle();
	});
	

	$(document).on("click", ".footer-link h3", function () {
		$(this).parent().toggleClass("plus cross")
	});





});
