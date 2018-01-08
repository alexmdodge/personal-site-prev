export class Projects {

  activate() {
    $(document).ready(function() {

      if( $('.section-portfolio-topics').length) {
          $('html, body').animate({
                  scrollTop: $('.section-portfolio-topics').offset().top-50
              }, 1000);
        }
    });
  }

	configureRouter(config, router){
      config.map([
         { 
         	route: ['','apex'], 
         	moduleId: './cases/apex', 
         	title: 'Apex Training', 
         	name:'apex',
         	nav: true
         },

         { 
         	route: 'student-search', 
         	moduleId: './cases/studentSearch',
         	title: 'Student Search',
         	name:'student-search',
         	nav: true
         },

         { 
         	route: 'grid-grind',
         	moduleId: './cases/gridgrind',
         	title: 'Grid Grind',
         	name:'grid-grind',
         	nav: true
      	}
      ]);

      this.router = router;
   }

}
