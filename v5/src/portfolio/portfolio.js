/* jshint esversion: 6 */
export class Portfolio {


   /*
    * Notice how the route configuration is the same as it would be for upper levels.
    * This seems like a really nice logical feature. You would expect the child routes
    * to work this way.
    */
   configureRouter(config, router){
      config.map([
         { 
            route: ['','projects'],
            moduleId: './projects/projects', 
            title: 'Projects',
            name:'projects',
            nav: true
         },

         { 
            route: 'resume',
            moduleId: './resume/resume',
            title: 'Resume',
            name:'resume',
            nav: true
         },

         { 
            route: 'skills',
            moduleId: './skills/skills',
            title: 'Skills',
            name:'skills',
            nav: true
         },

         { 
            route: 'education', 
            moduleId: './education/education',
            title: 'Education',
            name:'education',
            nav: true
         }
      ]);

      this.router = router;
   }

   attached(){
      $('.route-link').removeClass('nav-active');
      $('.route-link-portfolio').addClass('nav-active');
      $(document).ready(function() {
         $(window).scroll(function() {    
            let scroll = $(window).scrollTop();

            // Detects scroll position for top button
            if (scroll >= 600) {
               $('.portfolio-navigation-fixed-container').slideDown('fast');
            } else {
               $('.portfolio-navigation-fixed-container').slideUp('fast');
            }
         });
      });      
      $('#navbar-mobile-menu').removeClass('mobile-open').addClass('mobile-closed');
      $('#mobile-bars').removeClass('mobile-rotate').addClass('mobile-no-rotate');
      $(document).scrollTop(0);
   }

   slideTo() {
    $(document).ready(function() {
      $('html, body').animate({
          scrollTop: $('.section-portfolio-topics').offset().top-67
      }, 1000);

      return false;
    });
  }
   
}
