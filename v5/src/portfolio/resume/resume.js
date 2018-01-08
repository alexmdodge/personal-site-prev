export class Resume {

  activate() {
    $(document).ready(function() {

      if( $('.section-portfolio-topics').length) {
          $('html, body').animate({
                  scrollTop: $('.section-portfolio-topics').offset().top-50
              }, 1000);
        }
    });
  }
	
}
