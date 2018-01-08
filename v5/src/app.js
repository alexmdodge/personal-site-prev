/* jshint esversion: 6 */

export class App {

   // - - - - - - - - - - - - - - - Explanation of Routing - - - - - - - - - - - - - - - - - - - - - - - - -
   //
   //    The 'route' is what appears in the bar of your browser when you click whatever you used for the nav
   //
   //    The 'moduleId' is where the actual files are located, under the directory, and the file name
   //
   //    The 'title' is what shows up in the tab in front of the main title you give in config.title
   //
   //    The 'name' is what you use to reference the route when clicking a button or a link
   //
   // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
   
   configureRouter(config, router){
      config.title = ' Alex Dodge';
      config.map([
         { route: ''          , moduleId: 'welcome'             , title: 'Welcome'   , name:'home', nav: true},
         { route: 'about'     , moduleId: 'about/about'         , title: 'About'     , name:'about', nav: true},
         { route: 'portfolio' , moduleId: 'portfolio/portfolio' , title: 'Portfolio' , name:'portfolio', nav: true},
         { route: 'blog'      , moduleId: 'blog/blog'           , title: 'Blog'      , name:'blog', nav: true},
         { route: 'contact'   , moduleId: 'contact/contact'     , title: 'Contact'   , name:'contact' , nav: true}
      ]);

      this.router = router;
   }

   attached() {
      $(document).ready(function() {    
         let width = $(window).width();

         if (width < 768) {
         //clearHeader, not clearheader - caps H
            $(".alex-dodge-navigation").addClass("lower-page-nav");
         } else {
            $(window).scroll(function() {    
               let scroll = $(window).scrollTop();

               // Detects scroll position for top header
               if (scroll >= 25) {
                  $(".alex-dodge-navigation").addClass("lower-page-nav");
               } else if (scroll <= 25) {
                  $(".alex-dodge-navigation").removeClass("lower-page-nav");
               }
            });
         }

         $(window).scroll(function() {    
            let scroll = $(window).scrollTop();

            // Detects scroll position for top button
            if (scroll >= 600) {
               $('#to-top').fadeIn('fast');
            } else {
               $('#to-top').fadeOut('fast');   
            }
         });
      });

      // To Top
      $('#to-top').click(function() {
         $('html, body').animate({
              scrollTop: 0
          }, 1000);

          return false;
      });

      // Mobile Menu Animations
      $('#navbar-mobile-click').click(function() {

         if ($('#navbar-mobile-menu').hasClass("mobile-closed")) {
            $('#navbar-mobile-menu').removeClass('mobile-closed').addClass('mobile-open');
            $('#mobile-bars').removeClass('mobile-no-rotate').addClass('mobile-rotate');
         }
         else if ($('#navbar-mobile-menu').hasClass("mobile-open")) {
            $('#navbar-mobile-menu').removeClass('mobile-open').addClass('mobile-closed');
            $('#mobile-bars').removeClass('mobile-rotate').addClass('mobile-no-rotate');
         }
            
      });

   }
}
