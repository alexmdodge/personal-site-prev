export class Academic {

  activate() {
    $(document).ready(function() {

      if( $('.section-about-topics').length) {
          $('html, body').animate({
                  scrollTop: $('.section-about-topics').offset().top-50
              }, 1000);
        }
    });
  }
}
