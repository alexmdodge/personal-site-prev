export class Blog {
	
	attached(){
    $('.route-link').removeClass('nav-active');
    $('.route-link-blog').addClass('nav-active');
		$('#mobile-bars').removeClass('mobile-rotate').addClass('mobile-no-rotate');
		$('#navbar-mobile-menu').removeClass('mobile-open').addClass('mobile-closed');
    	$(document).scrollTop(0);
   }
}
