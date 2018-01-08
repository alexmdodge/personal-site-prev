/* jshint esversion: 6 */

export class Skills {

  activate() {
    $(document).ready(function() {

      if( $('.section-portfolio-topics').length) {
          $('html, body').animate({
                  scrollTop: $('.section-portfolio-topics').offset().top-50
              }, 1000);
        }
    });
  }

	// The DOM has been rendered and is ready for jQuery manipulation
	attached() {

		let prevElement = '#slide-html';
		$('.portfolio-skills-container').hover( function() {
			$(this).find('.skills-indicator-level').children().each( function() {
				switch ($(this).attr('id')) {
					case 'slide-test':
						$(prevElement).stop().animate({ width: '0%' });
						$('#slide-test').animate({ width: '50%' });
						prevElement = '#slide-test';
						break;
					case 'slide-html':
						$(prevElement).stop().animate({ width: '0%' });
						$('#slide-html').animate({ width: '85%' });
						prevElement = '#slide-html';
						break;
					case 'slide-css':
						$(prevElement).stop().animate({ width: '0%' });
						$('#slide-css').animate({ width: '75%' });
						prevElement = '#slide-css';
						break;
					case 'slide-javascript':
						$(prevElement).stop().animate({ width: '0%' });
						$('#slide-javascript').animate({ width: '70%' });
						prevElement = '#slide-javascript';
						break;
					case 'slide-php':
						$(prevElement).stop().animate({ width: '0%' });
						$('#slide-php').animate({ width: '40%' });
						prevElement = '#slide-php';
						break;
					case 'slide-mysql':
						$(prevElement).stop().animate({ width: '0%' });
						$('#slide-mysql').animate({ width: '30%' });
						prevElement = '#slide-mysql';
						break;
					case 'slide-design':
						$(prevElement).stop().animate({ width: '0%' });
						$('#slide-design').animate({ width: '85%' });
						prevElement = '#slide-design';
						break;
					case 'slide-java':
						$(prevElement).stop().animate({ width: '0%' });
						$('#slide-java').animate({ width: '70%' });
						prevElement = '#slide-java';
						break;
					case 'slide-editors':
						$(prevElement).stop().animate({ width: '0%' });
						$('#slide-editors').animate({ width: '90%' });
						prevElement = '#slide-editors';
						break;	
					case 'slide-build':
						$(prevElement).stop().animate({ width: '0%' });
						$('#slide-build').animate({ width: '80%' });
						prevElement = '#slide-build';
						break;
					case 'slide-git':
						$(prevElement).stop().animate({ width: '0%' });
						$('#slide-git').animate({ width: '80%' });
						prevElement = '#slide-git';
						break;
					case 'slide-linux':
						$(prevElement).stop().animate({ width: '0%' });
						$('#slide-linux').animate({ width: '80%' });
						prevElement = '#slide-linux';
						break;
				}
			});
		});

		$('.extra-skills').click(function() {
			$(this).siblings('.skills-extra-dropdown').slideToggle('fast', function() {
				$(this).children().each(function() {
					switch($(this).attr('id')) {
						case 'slide-sass':
							$('#slide-sass').animate({ width: '75%' });
							break;
						case 'slide-boot-css':
							$('#slide-boot-css').animate({ width: '90%' });
							break;
						case 'slide-aurelia':
							$('#slide-aurelia').animate({ width: '44%' });
							break;
						case 'slide-jquery':
							$('#slide-jquery').animate({ width: '85%' });
							break;
						case 'slide-velocity':
							$('#slide-velocity').animate({ width: '50%' });
							break;
						case 'slide-boot-js':
							$('#slide-boot-js').animate({ width: '90%' });
							break;
						case 'slide-mocha':
							$('#slide-mocha').animate({ width: '20%' });
							break;
						case 'slide-gulp':
							$('#slide-gulp').animate({ width: '80%' });
							break;
						case 'slide-grunt':
							$('#slide-grunt').animate({ width: '50%' });
							break;
						case 'slide-npm':
							$('#slide-npm').animate({ width: '80%' });
							break;
						case 'slide-babel':
							$('#slide-babel').animate({ width: '30%' });
							break;
						case 'slide-photoshop':
							$('#slide-photoshop').animate({ width: '90%' });
							break;
						case 'slide-ae':
							$('#slide-ae').animate({ width: '35%' });
							break;
						case 'slide-gimp':
							$('#slide-gimp').animate({ width: '70%' });
							break;
						case 'slide-sony':
							$('#slide-sony').animate({ width: '90%' });
							break;
						case 'slide-sublime':
							$('#slide-sublime').animate({ width: '90%' });
							break;
						case 'slide-eclipse':
							$('#slide-eclipse').animate({ width: '60%' });
							break;
						case 'slide-vim':
							$('#slide-vim').animate({ width: '50%' });
							break;
						case 'slide-ubuntu':
							$('#slide-ubuntu').animate({ width: '90%' });
							break;
						case 'slide-windows':
							$('#slide-windows').animate({ width: '95%' });
							break;
						case 'slide-mac':
							$('#slide-mac').animate({ width: '70%' });
							break;
					}
				});
			});
		});
	}
}
