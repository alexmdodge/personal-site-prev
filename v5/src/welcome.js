export class Welcome {

	attached(){
    $('.route-link').removeClass('nav-active');
    $('.route-link-home').addClass('nav-active');
		$('#mobile-bars').removeClass('mobile-rotate').addClass('mobile-no-rotate');
		$('#navbar-mobile-menu').removeClass('mobile-open').addClass('mobile-closed');
    	$(document).scrollTop(0);

    	$('.splash-continue').click(function() {
		    $('html, body').animate({
		        scrollTop: $('.section-splash-skills').offset().top-40
		    }, 1000);

		    return false;
		});
  	}
}
