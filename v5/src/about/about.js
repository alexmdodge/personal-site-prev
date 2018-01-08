export class About {

   /*
    * Notice how the route configuration is the same as it would be for upper levels.
    * This seems like a really nice logical feature. You would expect the child routes
    * to work this way.
    */
   configureRouter(config, router){
      config.map([
         { route: ['','academic']  , moduleId: 'about/academic/academic'   , title: 'Academic'  , name:'academic'},
         { route: 'goals'    , moduleId: 'about/goals/goals'         , title: 'Goals'     , name:'goals'},
         { route: 'interests', moduleId: 'about/interests/interests' , title: 'Interests' , name:'interests'},
         { route: 'work'     , moduleId: 'about/work/work'           , title: 'Work'      , name:'work'}
      ]);

      this.router = router;
   }

   attached(){
      $('.route-link').removeClass('nav-active');
      $('.route-link-about').addClass('nav-active');
      $(document).ready(function() {
         $(window).scroll(function() {    
            let scroll = $(window).scrollTop();

            // Detects scroll position for top button
            if (scroll >= 600) {
               $('.about-navigation-fixed-container').slideDown('fast');
            } else {
               $('.about-navigation-fixed-container').slideUp('fast');
            }
         });
      });
      $('#navbar-mobile-menu').removeClass('mobile-open').addClass('mobile-closed');
      $('#mobile-bars').removeClass('mobile-rotate').addClass('mobile-no-rotate');
      $(document).scrollTop(0);
   }
}
