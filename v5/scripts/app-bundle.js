define('app',['exports'], function (exports) {
   'use strict';

   Object.defineProperty(exports, "__esModule", {
      value: true
   });

   function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
         throw new TypeError("Cannot call a class as a function");
      }
   }

   var App = exports.App = function () {
      function App() {
         _classCallCheck(this, App);
      }

      App.prototype.configureRouter = function configureRouter(config, router) {
         config.title = ' Alex Dodge';
         config.map([{ route: '', moduleId: 'welcome', title: 'Welcome', name: 'home', nav: true }, { route: 'about', moduleId: 'about/about', title: 'About', name: 'about', nav: true }, { route: 'portfolio', moduleId: 'portfolio/portfolio', title: 'Portfolio', name: 'portfolio', nav: true }, { route: 'blog', moduleId: 'blog/blog', title: 'Blog', name: 'blog', nav: true }, { route: 'contact', moduleId: 'contact/contact', title: 'Contact', name: 'contact', nav: true }]);

         this.router = router;
      };

      App.prototype.attached = function attached() {
         $(document).ready(function () {
            var width = $(window).width();

            if (width < 768) {
               $(".alex-dodge-navigation").addClass("lower-page-nav");
            } else {
               $(window).scroll(function () {
                  var scroll = $(window).scrollTop();

                  if (scroll >= 25) {
                     $(".alex-dodge-navigation").addClass("lower-page-nav");
                  } else if (scroll <= 25) {
                     $(".alex-dodge-navigation").removeClass("lower-page-nav");
                  }
               });
            }

            $(window).scroll(function () {
               var scroll = $(window).scrollTop();

               if (scroll >= 600) {
                  $('#to-top').fadeIn('fast');
               } else {
                  $('#to-top').fadeOut('fast');
               }
            });
         });

         $('#to-top').click(function () {
            $('html, body').animate({
               scrollTop: 0
            }, 1000);

            return false;
         });

         $('#navbar-mobile-click').click(function () {

            if ($('#navbar-mobile-menu').hasClass("mobile-closed")) {
               $('#navbar-mobile-menu').removeClass('mobile-closed').addClass('mobile-open');
               $('#mobile-bars').removeClass('mobile-no-rotate').addClass('mobile-rotate');
            } else if ($('#navbar-mobile-menu').hasClass("mobile-open")) {
               $('#navbar-mobile-menu').removeClass('mobile-open').addClass('mobile-closed');
               $('#mobile-bars').removeClass('mobile-rotate').addClass('mobile-no-rotate');
            }
         });
      };

      return App;
   }();
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('welcome',['exports'], function (exports) {
		'use strict';

		Object.defineProperty(exports, "__esModule", {
				value: true
		});

		function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
				}
		}

		var Welcome = exports.Welcome = function () {
				function Welcome() {
						_classCallCheck(this, Welcome);
				}

				Welcome.prototype.attached = function attached() {
						$('.route-link').removeClass('nav-active');
						$('.route-link-home').addClass('nav-active');
						$('#mobile-bars').removeClass('mobile-rotate').addClass('mobile-no-rotate');
						$('#navbar-mobile-menu').removeClass('mobile-open').addClass('mobile-closed');
						$(document).scrollTop(0);

						$('.splash-continue').click(function () {
								$('html, body').animate({
										scrollTop: $('.section-splash-skills').offset().top - 40
								}, 1000);

								return false;
						});
				};

				return Welcome;
		}();
});
define('about/about',['exports'], function (exports) {
   'use strict';

   Object.defineProperty(exports, "__esModule", {
      value: true
   });

   function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
         throw new TypeError("Cannot call a class as a function");
      }
   }

   var About = exports.About = function () {
      function About() {
         _classCallCheck(this, About);
      }

      About.prototype.configureRouter = function configureRouter(config, router) {
         config.map([{ route: ['', 'academic'], moduleId: 'about/academic/academic', title: 'Academic', name: 'academic' }, { route: 'goals', moduleId: 'about/goals/goals', title: 'Goals', name: 'goals' }, { route: 'interests', moduleId: 'about/interests/interests', title: 'Interests', name: 'interests' }, { route: 'work', moduleId: 'about/work/work', title: 'Work', name: 'work' }]);

         this.router = router;
      };

      About.prototype.attached = function attached() {
         $('.route-link').removeClass('nav-active');
         $('.route-link-about').addClass('nav-active');
         $(document).ready(function () {
            $(window).scroll(function () {
               var scroll = $(window).scrollTop();

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
      };

      return About;
   }();
});
define('blog/blog',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Blog = exports.Blog = function () {
    function Blog() {
      _classCallCheck(this, Blog);
    }

    Blog.prototype.attached = function attached() {
      $('.route-link').removeClass('nav-active');
      $('.route-link-blog').addClass('nav-active');
      $('#mobile-bars').removeClass('mobile-rotate').addClass('mobile-no-rotate');
      $('#navbar-mobile-menu').removeClass('mobile-open').addClass('mobile-closed');
      $(document).scrollTop(0);
    };

    return Blog;
  }();
});
define('contact/contact',['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var Contact = exports.Contact = function () {
		function Contact() {
			_classCallCheck(this, Contact);
		}

		Contact.prototype.attached = function attached() {
			$('.route-link').removeClass('nav-active');
			$('.route-link-contact').addClass('nav-active');
			$('#navbar-mobile-menu').removeClass('mobile-open').addClass('mobile-closed');
			$('#mobile-bars').removeClass('mobile-rotate').addClass('mobile-no-rotate');
			$(document).scrollTop(0);
			var self = this;

			$('#contact-button').click(function () {
				self.copyToClipboard('contact-button');
				$('.success-copy').animate({ opacity: '1', top: '85', left: '1' }, 'fast');
			});
		};

		Contact.prototype.copyToClipboard = function copyToClipboard(elem) {
			var targetId = "_hiddenElement_";
			var target = "";
			var isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
			var origSelectionStart = void 0,
			    origSelectionEnd = void 0;

			if (isInput) {
				target = elem;
				origSelectionStart = elem.selectionStart;
				origSelectionEnd = elem.selectionEnd;
			} else {
				target = document.getElementById(targetId);
				if (!target) {
					target = document.createElement("textarea");
					target.style.position = "absolute";
					target.style.left = "-9999px";
					target.style.top = "0";
					target.id = targetId;
					document.body.appendChild(target);
				}
				target.textContent = "alex.mdodge@gmail.com";
			}

			var currentFocus = document.activeElement;
			target.focus();
			target.setSelectionRange(0, target.value.length);

			var succeed;

			try {
				succeed = document.execCommand("copy");
			} catch (e) {
				succeed = false;
			}

			if (currentFocus && typeof currentFocus.focus === "function") {
				currentFocus.focus();
			}

			if (isInput) {
				elem.setSelectionRange(origSelectionStart, origSelectionEnd);
			} else {
				target.textContent = "";
			}

			if (succeed) {
				$();
			}
			return succeed;
		};

		return Contact;
	}();
});
define('portfolio/portfolio',['exports'], function (exports) {
   'use strict';

   Object.defineProperty(exports, "__esModule", {
      value: true
   });

   function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
         throw new TypeError("Cannot call a class as a function");
      }
   }

   var Portfolio = exports.Portfolio = function () {
      function Portfolio() {
         _classCallCheck(this, Portfolio);
      }

      Portfolio.prototype.configureRouter = function configureRouter(config, router) {
         config.map([{
            route: ['', 'projects'],
            moduleId: './projects/projects',
            title: 'Projects',
            name: 'projects',
            nav: true
         }, {
            route: 'resume',
            moduleId: './resume/resume',
            title: 'Resume',
            name: 'resume',
            nav: true
         }, {
            route: 'skills',
            moduleId: './skills/skills',
            title: 'Skills',
            name: 'skills',
            nav: true
         }, {
            route: 'education',
            moduleId: './education/education',
            title: 'Education',
            name: 'education',
            nav: true
         }]);

         this.router = router;
      };

      Portfolio.prototype.attached = function attached() {
         $('.route-link').removeClass('nav-active');
         $('.route-link-portfolio').addClass('nav-active');
         $(document).ready(function () {
            $(window).scroll(function () {
               var scroll = $(window).scrollTop();

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
      };

      Portfolio.prototype.slideTo = function slideTo() {
         $(document).ready(function () {
            $('html, body').animate({
               scrollTop: $('.section-portfolio-topics').offset().top - 67
            }, 1000);

            return false;
         });
      };

      return Portfolio;
   }();
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('about/academic/academic',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Academic = exports.Academic = function () {
    function Academic() {
      _classCallCheck(this, Academic);
    }

    Academic.prototype.activate = function activate() {
      $(document).ready(function () {

        if ($('.section-about-topics').length) {
          $('html, body').animate({
            scrollTop: $('.section-about-topics').offset().top - 50
          }, 1000);
        }
      });
    };

    return Academic;
  }();
});
define('about/goals/goals',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Goals = exports.Goals = function () {
    function Goals() {
      _classCallCheck(this, Goals);
    }

    Goals.prototype.activate = function activate() {
      $(document).ready(function () {

        if ($('.section-about-topics').length) {
          $('html, body').animate({
            scrollTop: $('.section-about-topics').offset().top - 50
          }, 1000);
        }
      });
    };

    return Goals;
  }();
});
define('about/interests/interests',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Interests = exports.Interests = function () {
    function Interests() {
      _classCallCheck(this, Interests);
    }

    Interests.prototype.activate = function activate() {
      $(document).ready(function () {

        if ($('.section-about-topics').length) {
          $('html, body').animate({
            scrollTop: $('.section-about-topics').offset().top - 50
          }, 1000);
        }
      });
    };

    return Interests;
  }();
});
define('about/work/work',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Work = exports.Work = function () {
    function Work() {
      _classCallCheck(this, Work);
    }

    Work.prototype.activate = function activate() {
      $(document).ready(function () {

        if ($('.section-about-topics').length) {
          $('html, body').animate({
            scrollTop: $('.section-about-topics').offset().top - 50
          }, 1000);
        }
      });
    };

    return Work;
  }();
});
define('portfolio/projects/projects',['exports'], function (exports) {
   'use strict';

   Object.defineProperty(exports, "__esModule", {
      value: true
   });

   function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
         throw new TypeError("Cannot call a class as a function");
      }
   }

   var Projects = exports.Projects = function () {
      function Projects() {
         _classCallCheck(this, Projects);
      }

      Projects.prototype.activate = function activate() {
         $(document).ready(function () {

            if ($('.section-portfolio-topics').length) {
               $('html, body').animate({
                  scrollTop: $('.section-portfolio-topics').offset().top - 50
               }, 1000);
            }
         });
      };

      Projects.prototype.configureRouter = function configureRouter(config, router) {
         config.map([{
            route: ['', 'apex'],
            moduleId: './cases/apex',
            title: 'Apex Training',
            name: 'apex',
            nav: true
         }, {
            route: 'student-search',
            moduleId: './cases/studentSearch',
            title: 'Student Search',
            name: 'student-search',
            nav: true
         }, {
            route: 'grid-grind',
            moduleId: './cases/gridgrind',
            title: 'Grid Grind',
            name: 'grid-grind',
            nav: true
         }]);

         this.router = router;
      };

      return Projects;
   }();
});
define('portfolio/resume/resume',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Resume = exports.Resume = function () {
    function Resume() {
      _classCallCheck(this, Resume);
    }

    Resume.prototype.activate = function activate() {
      $(document).ready(function () {

        if ($('.section-portfolio-topics').length) {
          $('html, body').animate({
            scrollTop: $('.section-portfolio-topics').offset().top - 50
          }, 1000);
        }
      });
    };

    return Resume;
  }();
});
define('portfolio/skills/skills',['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var Skills = exports.Skills = function () {
		function Skills() {
			_classCallCheck(this, Skills);
		}

		Skills.prototype.activate = function activate() {
			$(document).ready(function () {

				if ($('.section-portfolio-topics').length) {
					$('html, body').animate({
						scrollTop: $('.section-portfolio-topics').offset().top - 50
					}, 1000);
				}
			});
		};

		Skills.prototype.attached = function attached() {

			var prevElement = '#slide-html';
			$('.portfolio-skills-container').hover(function () {
				$(this).find('.skills-indicator-level').children().each(function () {
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

			$('.extra-skills').click(function () {
				$(this).siblings('.skills-extra-dropdown').slideToggle('fast', function () {
					$(this).children().each(function () {
						switch ($(this).attr('id')) {
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
		};

		return Skills;
	}();
});
define('portfolio/projects/cases/apex',['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var Apex = exports.Apex = function () {
		function Apex() {
			_classCallCheck(this, Apex);
		}

		Apex.prototype.attached = function attached() {
			$('#apex').click(function () {
				$('.section-portfolio-cases').hide();
				$('#section-apex').show();
			});

			$('#student-search').click(function () {
				$('.section-portfolio-cases').hide();
				$('#section-student').show();
			});

			$('#grid-grind').click(function () {
				$('.section-portfolio-cases').hide();
				$('#section-gridgrind').show();
			});
		};

		return Apex;
	}();
});
define('portfolio/projects/cases/gridgrind',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Gridgrind = exports.Gridgrind = function Gridgrind() {
    _classCallCheck(this, Gridgrind);
  };
});
define('portfolio/projects/cases/studentSearch',["exports"], function (exports) {
	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var StudentSearch = exports.StudentSearch = function StudentSearch() {
		_classCallCheck(this, StudentSearch);
	};
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n\n   <header class=\"alex-dodge-navigation\">\n      <nav class=\"navbar navbar-default \" role=\"navigation\">\n\n         <div id=\"bs-example-navbar-collapse-1\" class=\"collapse navbar-collapse\">\n            <ul class=\"nav navbar-nav pull-right\">\n               <li class=\"route-link route-link-home nav-active\"><a route-href=\"route: home\">Home </a></li>\n               <li class=\"route-link route-link-about\"><a route-href=\"route: about\">About </a></li>\n               <li class=\"route-link route-link-blog\"><a route-href=\"route: blog\">Blog </a></li>\n               <li class=\"route-link route-link-contact\"><a route-href=\"route: contact\">Contact </a></li>\n            </ul>\n         </div>\n\n         <div id=\"navbar-mobile-click\" class=\"navbar-mobile visible-xs-block\">\n            <div id=\"mobile-bars\" class=\"mobile-no-rotate\">\n               <span class=\"fa fa-bars\"></span>\n            </div>\n         </div>\n\n         <div id=\"navbar-mobile-menu\" class=\" mobile-closed\">\n            <ul class=\"navbar-mobile-content\">\n               <li><a route-href=\"route: home\">Home </a></li>\n               <li><a route-href=\"route: about\">About </a></li>\n               <li><a route-href=\"route: blog\">Blog </a></li>\n               <li><a route-href=\"route: contact\">Contact </a></li>\n            </ul>\n         </div>\n\n      </nav>\n   </header>\n\n   <main>\n      <router-view></router-view>\n   </main>\n\n   <footer>\n\n      <div class=\"container-fluid\">\n         <div class=\"row\"> \n            <div class=\"footer-social col-xs-12\">\n               <div class=\"footer-social-center\">\n                  <a href=\"https://ca.linkedin.com/in/malexdodge\" class=\"footer-social-icon\" target=\"_blank\">\n                     <i class=\"fa fa-linkedin\"></i> \n                  </a>\n\n                  <a href=\"https://twitter.com/alexmdodge\" class=\"footer-social-icon\" target=\"_blank\">\n                     <i class=\"fa fa-twitter\"></i> \n                  </a>\n\n                  <a href=\"https://github.com/alexmdodge\" class=\"footer-social-icon\" target=\"_blank\">\n                     <i class=\"fa fa-github\"></i> \n                  </a>\n\n                  <a href=\"https://dribbble.com/alexmdodge\" class=\"footer-social-icon\" target=\"_blank\">\n                     <i class=\"fa fa-dribbble\"></i> \n                  </a>\n\n                  <a href=\"http://stackoverflow.com/users/3189008/alexmdodge\" class=\"footer-social-icon\" target=\"_blank\">\n                     <i class=\"fa fa-stack-overflow\"></i> \n                  </a>\n               </div>\n            </div>\n\n            <div class=\"clearfix\"></div>\n\n            <div class=\"footer-copyright col-xs-12 col-sm-offset-4 col-sm-4 col-md-offset-4 col-md-4\">\n               <img src=\"assets/img/main-logo.png\" alt=\"Alex Dodge Logo Small\" \n                  class=\"footer-copyright-logo\">\n               <small class=\"footer-copyright-text\">\n                  <span class=\"footer-copyright-text-name\">Alex Dodge</span>\n                  <span class=\"footer-copyright-text-date\">2016</span>\n\n               </small>\n\n               <small class=\"footer-copyright-acknowledge\">\n                  Images were collected from <a href=\"https://unsplash.com/\" target=\"_blank\">Unsplash</a> under the <a href=\"https://unsplash.com/license\" target=\"_blank\">Creative Commons Zero</a> license. Some icons and other graphics were retrieved from <a href=\"http://file000.flaticon.com/downloads/license/license.pdf\" target=\"_blank\">Flaticon</a>.\n               </small>\n            </div>\n         </div>\n      </div> <!-- End of Footer Bootstrap Container -->\n\n      <div id=\"to-top\" class=\"top-button\">\n         <i class=\"fa fa-chevron-up\"></i>\n      </div>\n\n   </footer>\n\n</template>\n"; });
define('text!welcome.html', ['module'], function(module) { module.exports = "<template>\n\n<!-- \n   Author: Alex Dodge | Copyright 2016\n   Date: 29/10/2016\n\n\tNote that I put the container-fluid and row in the same line\n   as I find that it can add unnecessary chunks of spacing and make\n   it harder to look at when there are so many nested divs\n-->\n\n   <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\n   *                       \n   *                       Section 1 Splash Page\n   *\n   * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\n   --> \n   <section id=\"particles-js\" class=\"section-splash\">\n\n      <div class=\"container-fluid\"><div class=\"row\">\n\n               <div class=\"splash col-xs-12 col-sm-offset-2 col-sm-8 col-md-offset-3 col-md-6\">\n            <div class=\"splash-logo\">\n               <img src=\"assets/img/main-logo.png\" alt=\"Alex Dodge Logo\" class=\"splash-logo-src\">\n            </div>\n            <div class=\"splash-title\">\n               <h2 class=\"splash-title-name\">Alex Dodge</h2>\n               <img src=\"assets/img/divider.png\" alt=\"Divider Bar\" class=\"splash-title-divider\">\n               <p class=\"splash-title-position\">Front-End Developer and Educator</p>\n            </div>\n            <div class=\"splash-continue\">\n               <i class=\"fa fa-chevron-down\"></i>\n            </div>\n         </div>\n\n      </div></div> <!-- End of Splash Bootstrap Container -->\n\n   </section>\n   <!-- End Section 1 Splash Page -->\n\n\n\n\n\n   <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\n   *                       \n   *                       Section 2 Skills\n   *\n   * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\n   --> \n   <section class=\"section-splash-skills\">\n\n      <div class=\"container-fluid\"><div class=\"row\">\n\n         <div class=\"skills\">\n            <h2 class=\"skills-title col-xs-12 col-md-offset-4 col-md-4\">What I Do</h2>\n            <div class=\"skills-list col-xs-12\">\n\n               <div class=\"skills-list-design col-xs-12 col-sm-6 col-md-4\">\n                  <div class=\"skills-list-design-image\">\n                     <img src=\"assets/img/design-icon.png\" alt=\"Alex Dodge Design\" \n                        class=\"skills-list-design-image-src\">\n                  </div>\n                  <h3 class=\"skills-list-design-title\">Design</h3>\n                  <p class=\"skills-list-design-info\">\n                     It is essential to first conceptualize a project through wireframes, mockups,\n                     and prototypes. With specific requirements and rapid\n                     design methods, each component of the project is adapted and delivered as quickly possible.\n                  </p>\n                  <div class=\"mobile-divider visible-xs-block\"></div>\n               </div>\n\n\n               <div class=\"skills-list-develop col-xs-12 col-sm-6 col-md-4\">\n                  <div class=\"skills-list-develop-image\">\n                     <img src=\"assets/img/develop-icon.png\" alt=\"Alex Dodge Develop\" \n                        class=\"skills-list-develop-image-src\">\n                  </div>\n                  <h3 class=\"skills-list-develop-title\">Develop</h3>\n                  <p class=\"skills-list-develop-info\">\n                     All projects require a strong base. I use modern web technologies like HTML5, CSS3,\n                     JavaScript ESNext, Angular, and Aurelia. By designing and building projects from a \n                     test driven perspective, applications are more robust and less prone to error.\n\n                  </p>\n                  <div class=\"mobile-divider visible-xs-block\"></div>\n               </div>\n\n\n               <div class=\"skills-list-educate col-xs-12 col-sm-offset-3 col-sm-6 col-md-offset-0 col-md-4\">\n                  <div class=\"skills-list-educate-image\">\n                     <img src=\"assets/img/educate-icon.png\" alt=\"Alex Dodge Educate\" \n                        class=\"skills-list-educate-image-src\">\n                  </div>\n                  <h3 class=\"skills-list-educate-title\">Distribute</h3>\n                  <p class=\"skills-list-educate-info\">\n                     Applications I develop are always secured with the https protocol,  optimized for speed,\n                     responsive across all browsers and devices, optimized for search engine lookup,\n                     and are built with extendability and scalability in mind.\n                  </p>\n               </div>\n\n            </div>\n\n      </div></div> <!-- End of Skills Bootstrap Container -->\n\n   </section>\n   <!-- End Section 2 Skills -->\n\n\n\n\n   <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\n   *                       \n   *                       Section 3 Portfolio\n   *\n   * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\n   --> \n   <section class=\"section-splash-portfolio\">\n\n      <div class=\"container-fluid\">\n\n         <div class=\"portfolio row\">\n\n            <div class=\"portfolio-title col-xs-12 col-sm-offset-2 col-sm-8 col-md-offset-2 col-md-8\">\n               <h2 class=\"portfolio-title-name\">Portfolio</h2>\n               <img src=\"assets/img/divider.png\" alt=\"Divider Bar\" class=\"portfolio-title-divider\">\n               <p class=\"portfolio-title-info\">\n                  I've worked on websites, web applications, and even games.\n                  Have a look at some of the projects and case studies below.\n               </p>\n            </div>\n\n            <div class=\"portfolio-list col-xs-12\">\n\n               <div class=\"portfolio-list-web col-xs-12 col-sm-offset-2 col-sm-8 col-md-offset-0 col-md-4 container\">\n                  <h3 class=\"portfolio-list-web-title\">Apex Training</h3>\n                  <div class=\"portfolio-list-web-image\">\n                     <img src=\"assets/img/apex-badge.png\" alt=\"Alex Dodge Apex Training Systems\" \n                        class=\"portfolio-list-web-image-src\">\n                  </div>\n                  <p class=\"portfolio-list-web-info\">\n                     Apex Training Systems is an online nutrition and fitness coaching platform. The website is a simple one page design which uses JavaScript and jQuery for animations and interactive content.\n                  </p>\n               </div>\n\n               <div class=\"portfolio-list-app col-xs-12 col-sm-offset-2 col-sm-8 col-md-offset-0 col-md-4 container\">\n                  <h3 class=\"portfolio-list-app-title\"> Student Search</h3>\n                  <figure class=\"portfolio-list-app-image\">\n                     <img src=\"assets/img/student-search.png\" alt=\"Alex Dodge Apex Student Search\" \n                        class=\"portfolio-list-app-image-src\">\n                  </figure>\n                  <p class=\"portfolio-list-app-info\">\n                     Student Search is a fun web application I built for a high school guidance department. It uses Google Sheets as a database to retrieve student scholarship information.\n                  </p>\n               </div>\n\n               <div class=\"portfolio-list-game col-xs-12 col-sm-offset-2 col-sm-8 col-md-offset-0 col-md-4 container\">\n                  <h3 class=\"portfolio-list-game-title\"> Grid Grind</h3>\n                  <figure class=\"portfolio-list-game-image\">\n                     <img src=\"assets/img/gg-icon.png\" alt=\"Alex Dodge Apex Grid Grind\" \n                        class=\"portfolio-list-game-image-src\">\n                  </figure>\n                  <p class=\"portfolio-list-game-info\">\n                     Grid Grind is an HTML5 web game I built using the Phaser framework. It implements data structures written\n                     in JavaScript ESNExt to drive the primary game logic.\n                  </p>\n               </div>\n\n            </div><!-- End div: portfolio-list -->\n\n            <div class=\"container-fluid\">\n               <div class=\"row\">\n                  <div class=\"col-xs-12\">\n                     <a class=\"portfolio-continue button\" route-href=\"route: portfolio\">\n                        Full Portfolio\n                     </a>\n                  </div>\n               </div>\n            </div>\n         </div>\n\n      </div>\n\n   </section>\n   <!-- End Section 3 Portfolio -->\n\n\n\n\n   <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\n   *                       \n   *                       Section 4 Connect\n   *\n   * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\n   --> \n   <section class=\"section-splash-connect\">\n\n      <div class=\"container-fluid\"><div class=\"row\">\n\n         <div class=\"connect\">\n   \n            <div class=\"row\">\n               <h3 class=\"connect-title col-xs-12 col-md-offset-2 col-md-8\"> Want to create something? </h3>\n            </div>\n            \n            <div class=\"row\">\n               <div class=\"connect-image col-md-offset-4 col-md-4\">\n                  <img src=\"assets/img/user-icon.png\" alt=\"Alex Dodge Connect\" \n                     class=\"connect-image-src\">\n               </div> \n            </div>\n\n            <div class=\"row\">\n               <p class=\"connect-info col-xs-12 col-md-offset-2 col-md-8\">\n                  I love to build things, especially when I'm collaborating with other people. Whether\n                  it's a personal dream or a business one, let me help you make it a reality.\n               </p>\n            </div>\n\n\n            <div class=\"container-fluid\">\n               <div class=\"row\">\n                  <div class=\"col-xs-12\">\n                     <a class=\"connect-continue button\" route-href=\"route: contact\">\n                        Get in Touch\n                     </div>\n                  </a>\n               </div>\n            </div>\n         </div>\n\n      </div></div> <!-- End of Connect Bootstrap Container -->\n\n   </section>\n   <!-- End Section 4 Connect -->\n\n</template>\n"; });
define('text!about/about.html', ['module'], function(module) { module.exports = "<template>\n  <section class=\"section-about\">\n\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-offset-4 col-sm-4 col-md-offset-1 col-md-3\">\n          <div class=\"about-headshot\">\n            <img src=\"assets/img/headshot.png\" alt=\"Alex Dodge Headshot\" class=\"about-headshot-src\">\n          </div>\n        </div>\n\n\n        <div class=\"col-xs-12 col-sm-offset-1 col-sm-10 col-md-offset-0 col-md-6\">\n          <div class=\"about-info\">\n            <h2 class=\"about-info-title\">About Me</h2>\n            <p class=\"about-info-description\">\n              Hi, my name is Alex! I work for a company called \n              <a href=\"https://www.redspace.com/\">REDspace </a>. I've built applications\n              for \n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- End of About Bootstrap Container -->\n\n  </section>\n</template>\n"; });
define('text!blog/blog.html', ['module'], function(module) { module.exports = "<template>\n\n<!-- \n   Author: Alex Dodge | Copyright 2016\n   Date: October 26, 2016\n\n-->\n\n   <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\n   *                       \n   *                              Blog\n   *\n   * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\n   --> \n   <section class=\"section-blog\">\n\n      <div class=\"container-fluid\">\n         <div class=\"blog row\">\n\n            <div class=\"col-xs-12 col-sm-offset-1 col-sm-10 col-md-offset-2 col-md-8\">\n               <h2 class=\"blog-title\">Blog</h2>\n               <p class=\"blog-description\">\n                  I love to learn, and help others learn. This blog is a place to bring it all together. If you ever have an idea for a contribution, or have something to add, never hesitate to contact me.\n               </p>\n\n               <div class=\"blog-container\">\n                  <a class=\"blog-container-title\">Herein Lies the Start</a>\n                  <div class=\"blog-container-stamps\">\n                  \t<h4 class=\"stamps-author\"><span>By Alex Dodge </span></h4> \n                  \t<h4 class=\"stamps-date\"><span> October 26, 2016 </span></h4>\n                  \t<h4 class=\"stamps-read\"><span>Continue Reading </span></h4> \n                  \t<h4 class=\"stamps-author\"><span>IN PROGRESS </span></h4> \n                  </div>\n                  <p class=\"blog-container-info\">\n                     I've learned a lot over the past year, and this site is a culmination of that. I've incorporated a number of new technologies, strategies, and methods to bring this application to where it needs to be. I've noticed that like most professions you need a certain level of proficiency in order to access resources and really understand how to do something. Coming from an education background, and considering how many in the software development industry rely on self-teaching to accomplish tasks, I think we could do a better job at including a broader overview of some higher level technologies.\n                  </p>\n               </div>\n\n            </div>\n\n         </div>\n\n      </div> <!-- End of About Bootstrap Container -->\n\n   </section>\n\n</template>\n"; });
define('text!contact/contact.html', ['module'], function(module) { module.exports = "<template>\n\n<!-- \n   Author: Alex Dodge | Copyright 2016\n   Date: October 26, 2016\n\n-->\n\n   <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\n   *                       \n   *                            Contact\n   *\n   * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\n   --> \n   <section class=\"section-contact\">\n\n      <div class=\"container-fluid\">\n         <div class=\"contact row\">\n\n            <div class=\"col-xs-12 col-sm-offset-1 col-sm-10 col-md-offset-1 col-md-10\">\n               <div class=\"row\">\n                  <div id=\"contact-social\" class=\"\">\n                     <a href=\"https://ca.linkedin.com/in/malexdodge\" class=\"contact-social-icon\" target=\"_blank\">\n                        <i class=\"fa fa-linkedin\"></i> \n                     </a>\n\n                     <a href=\"https://twitter.com/alexmdodge\" class=\"contact-social-icon\" target=\"_blank\">\n                        <i class=\"fa fa-twitter\"></i> \n                     </a>\n\n                     <a href=\"https://github.com/alexmdodge\" class=\"contact-social-icon\" target=\"_blank\">\n                        <i class=\"fa fa-github\"></i> \n                     </a>\n\n                     <a href=\"https://dribbble.com/alexmdodge\" class=\"contact-social-icon\" target=\"_blank\">\n                        <i class=\"fa fa-dribbble\"></i> \n                     </a>\n\n                     <a href=\"http://stackoverflow.com/users/3189008/alexmdodge\" class=\"contact-social-icon\" target=\"_blank\">\n                        <i class=\"fa fa-stack-overflow\"></i> \n                     </a>\n                  </div>\n               </div>\n            </div>\n         </div>\n\n         <div class=\"row\">\n            <div class=\"contact-email-center\">\n               <div class=\"contact-email-container\">\n                  <a href=\"mailto:alex.mdodge@gmail.com\" class=\"contact-email\">\n                     <i class=\"fa fa-paper-plane\"></i>\n                     Email Me\n                  </a>\n\n                  <div id=\"contact-button\" class=\"inner-copy\">\n                     <i class=\"fa fa-clipboard\"></i>\n                  </div>\n\n               </div>            \n               \n            </div>\n      \n            <div class=\"success-copy\">\n               The email was copied to your clipboard.\n            </div>\n\n         </div>\n\n      </div> <!-- End of About Bootstrap Container -->\n\n   </section>\n\n</template>"; });
define('text!portfolio/portfolio.html', ['module'], function(module) { module.exports = "<template>\n   \n<!-- \n   Author: Alex Dodge | Copyright 2016\n   Date: October 17, 2016\n\n-->\n\n   <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\n   *                       \n   *                     Section 1 Portfolio Top\n   *\n   * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\n   --> \n   <section class=\"section-portfolio\">\n\n      <div class=\"container-fluid\">\n         <div class=\"row\">\n            <div class=\"col-xs-12 col-md-offset-2 col-md-8\">\n               <div class=\"portfolio-info\">\n                  <h2 class=\"portfolio-info-title\">Portfolio</h2>\n\n                  <p class=\"portfolio-info-description\">\n                     I've created website, applications, games, graphics and more. For detailed overviews and\n                     case studies have a look at the projects section. If you would like a breakdown of all\n                     front-end and back-end development skills I'm familiar with take a look at\n                     the skills section. If you would like to read and download my resume, head to the resume section!\n                  </p>\n               </div>\n            </div>\n         </div>\n\n         <div class=\"portfolio-navigation row\">\n            <div class=\"col-xs-12 col-sm-6 col-md-offset-3 col-md-2 \">\n               <a route-href=\"route: projects\" class=\"portfolio-navigation-projects\">\n                  <span class=\"portfolio-navigation-link\">Projects</span>\n               </a>\n            </div>\n\n            <div class=\"col-xs-12 col-sm-6 col-md-2 \">\n               <a route-href=\"route: resume\" class=\"portfolio-navigation-resume\">\n                  <span class=\"portfolio-navigation-link\">Resume</span>\n               </a>\n            </div>\n\n            <div class=\"col-xs-12 col-sm-offset-3 col-sm-6 col-md-offset-0 col-md-2 \">\n               <a route-href=\"route: skills\" class=\"portfolio-navigation-skills\">\n                  <span class=\"portfolio-navigation-link\">Skills</span>\n               </a>\n            </div>\n\n         </div>\n\n         <div class=\"portfolio-navigation-fixed-container hidden-xs\">\n            <ul class=\"lower-navigation-fixed\">\n               <li>\n                  <a route-href=\"route: projects\" class=\"navigation-fixed\">\n                     Projects\n                  </a>\n               </li>   \n               \n               <li class=\"middle-divider\"></li>\n\n               <li>\n                  <a route-href=\"route: resume\" class=\"navigation-fixed\">\n                     Resume\n                  </a>\n               </li>\n\n               <li class=\"middle-divider\"></li>               \n\n               <li>\n                  <a route-href=\"route: skills\" class=\"navigation-fixed\">\n                     Skills\n                  </a>\n               </li>\n            </ul>\n         </div>\n\n      </div> <!-- End of About Bootstrap Container -->\n\n   </section>\n\n\n\n\n\n   <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\n   *                       \n   *                       Section 2 Portfolio Navigation\n   *\n   * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\n   --> \n   <section class=\"section-portfolio-topics\">\n\n      <div class=\"container-fluid\"><div class=\"row\">\n         <router-view class=\"portfolio-topics\"></router-view>\n      </div></div> <!-- End of Skills Bootstrap Container -->\n\n   </section>\n\n</template>\n"; });
define('text!about/goals/goals.html', ['module'], function(module) { module.exports = "<template>\n   \n<!-- \n   Author: Alex Dodge | Copyright 2016\n   Date: October 29, 2016\n\n-->\n\n   <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\n   *                       \n   *                       About - Goals\n   *\n   * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\n   --> \n   <section class=\"section-about-goals\">\n\n      <div class=\"about-goals-crumbs main-breadcrumbs pull-right\">\n         <i class=\"fa fa-caret-right\"></i>\n         <a route-href=\"route: home\">home</a> &#47;\n         <a route-href=\"route: about\">about</a> &#47;\n         <a route-href=\"route: academic\">academic</a>\n      </div>\n      <div class=\"container-fluid\">\n         <div class=\"row\">\n\n            <div class=\"col-xs-12 col-sm-offset-1 col-sm-10 col-md-offset-1 col-md-6\">\n               <h2 class=\"about-goals-title\">Goals</h2>\n               <img src=\"assets/img/second-divider.png\" alt=\"Alex Dodge Divider\" \n                  class=\"about-goals-divider\">\n               <p class=\"about-goals-description\">\n                  I usually have a lot of projects and ideas floating around in my head. I often do my best to write down these ideas with a solid plan for execution. Some of my short term goals are as follows.\n               </p>\n\n               <ul class=\"about-goals-description-learning\">\n                  <li>\n                     <i class=\"fa fa-caret-right\"></i>\n                     Become a prominent contributer to multiple open source projects\n                  </li>\n\n                  <li>\n                     <i class=\"fa fa-caret-right\"></i>\n                     Become proficient in Angular and contribute to pieces of the project\n                  </li>\n\n                  <li>\n                     <i class=\"fa fa-caret-right\"></i>\n                     Learn and become proficient in React with a popular support framework\n                  </li>\n\n                  <li>\n                     <i class=\"fa fa-caret-right\"></i>\n                     Explore back-end development and learn more about development operations\n                  </li>\n\n                  <li>\n                     <i class=\"fa fa-caret-right\"></i>\n                     Become proficient in SQL and a NoSQL database structures\n                  </li>\n\n                  <li>\n                     <i class=\"fa fa-caret-right\"></i>\n                     Explore container services, provisioning virtual machines, vagrant, docker, and the like\n                  </li>\n               </ul>\n\n               <p class=\"about-goals-description\"> I also have some long term career goals, </p>\n\n               <ul class=\"about-goals-description-career\">\n                  <li>\n                     <i class=\"fa fa-caret-right\"></i>\n                     Work as a Front-End and Full Stack developer\n                  </li>\n\n                  <li>\n                     <i class=\"fa fa-caret-right\"></i>\n                     Work on a project that has a positive affect internationally\n                  </li>\n\n                  <li>\n                     <i class=\"fa fa-caret-right\"></i>\n                     Concieve or contribute to a large educational technology application initiative\n                  </li>\n\n                  <li>\n                     <i class=\"fa fa-caret-right\"></i>\n                     Become a Senior Developer for a prominent company and help to educate others\n                  </li>\n\n                  <li>\n                     <i class=\"fa fa-caret-right\"></i>\n                     Become a CTO of a company involved in important global technology projects\n                  </li>\n\n                  <li>\n                     <i class=\"fa fa-caret-right\"></i>\n                     Use my knowledge of software and web development to make significant contributions\n                     to the clean energy sector\n                  </li>\n               </ul>\n            </div>\n\n            <div class=\"about-goals-logo col-xs-12 col-sm-offset-4 col-sm-4 col-md-offset-0 col-md-4\">\n               <img src=\"assets/img/about-goals.png\" alt=\"Alex Dodge Academic\" class=\"about-goals-logo-src\">\n            </div>\n         </div>\n\n      </div> <!-- End of About Bootstrap Container -->\n\n   </section>\n\n</template>\n"; });
define('text!about/interests/interests.html', ['module'], function(module) { module.exports = "<template>\n   \n<!-- \n   Author: Alex Dodge | Copyright 2016\n   Date: October 11, 2016\n\n-->\n\n   <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\n   *                       \n   *                       About - Interests\n   *\n   * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\n   --> \n   <section class=\"section-about-interests\">\n\n      <div class=\"about-interests-crumbs main-breadcrumbs pull-right\">\n         <i class=\"fa fa-caret-right\"></i>\n         <a route-href=\"route: home\">home</a> &#47;\n         <a route-href=\"route: about\">about</a> &#47;\n         <a route-href=\"route: interests\">interests</a>\n      </div>\n      <div class=\"container-fluid\">\n         <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-offset-1 col-sm-10 col-md-offset-1 col-md-6\">\n               <h2 class=\"about-interests-title\">Interests</h2>\n               <img src=\"assets/img/second-divider.png\" alt=\"Alex Dodge Divider\" \n                  class=\"about-interests-divider\">\n               <p class=\"about-interests-description\">\n                  There is a lot I like to do to help unwind when I have some free time. \n                  Traveling has been a love of mine since I was young. Having the opportunity\n                  to see different cultures and places of the world is the greatest\n                  privilege you have. Along with programming I also happen to be a giant geek! I'm\n                  obsessed with everything to do with the universe and haven't missed a SpaceX\n                  launch since the DISCOVR satellite. From Mythbusters to Marvel there's always\n                  a new TV series to keep up with. <br><br>\n\n                  I've loved video games since I was a kid and any game I've ever built has been\n                  inspired from my favorites. Aside from consoles and PCs, I'm also a huge fan\n                  of Magic the Gathering. This was one of the first games I ever got in to, and\n                  to this day I'm still baffled by the complex scenarios the game can generate.\n               </p>\n            </div>\n\n            <div class=\"col-xs-12 col-sm-offset-4 col-sm-4 col-md-offset-0 col-md-4\">\n               <img src=\"assets/img/about-interests.png\" alt=\"Alex Dodge Interests\" \n                  class=\"about-interests-logo\">\n            </div>\n         </div>\n      </div>\n\n      </div> <!-- End of About Bootstrap Container -->\n\n   </section>\n\n</template>\n"; });
define('text!about/academic/academic.html', ['module'], function(module) { module.exports = "<template>\n   \n<!-- \n   Author: Alex Dodge | Copyright 2016\n   Date: October 29, 2016\n\n-->\n\n   <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\n   *                       \n   *                       About - Academic\n   *\n   * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\n   --> \n   <section class=\"section-about-academic\">\n\n      <div class=\"about-academic-crumbs main-breadcrumbs pull-right\">\n         <i class=\"fa fa-caret-right\"></i>\n         <a route-href=\"route: home\">home</a> &#47;\n         <a route-href=\"route: about\">about</a> &#47;\n         <a route-href=\"route: academic\">academic</a>\n      </div>\n      <div class=\"container-fluid\">\n         <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-offset-1 col-sm-10 col-md-offset-1 col-md-6\">\n               <h2 class=\"about-academic-title\">Academic</h2>\n               <img src=\"assets/img/second-divider.png\" alt=\"Alex Dodge Divider\" \n                  class=\"about-academic-divider\">\n               <p class=\"about-academic-description\">\n                  The entirety of my educational career took place at Acadia University in Wolfville Nova Scotia. I completed my first degree in Physics and Computer Science, and my second degree in Education. While attending school I ran labs, tutored, trained aquatic staff, and was a resident assistant responsible for the program planning and safety of a residence building. <br><br>\n\n                  I started my undergraduate experience in physics but quickly realized that computer science was something I couldn't live without. During my degree I completed courses in Java, C, shell scripting, software engineering and design, data structres, computer hardware and architecture, translators, systems analysis and design, and data communication.\n               </p>               \n            </div>\n\n            <div class=\"about-academic-logo col-xs-12 col-sm-offset-4 col-sm-4 col-md-offset-0 col-md-4\">\n               <img src=\"assets/img/about-academic.png\" alt=\"Alex Dodge Academic\" class=\"about-academic-logo-src\">\n            </div>\n         </div>\n\n      </div> <!-- End of About Bootstrap Container -->\n\n   </section>\n\n</template>\n"; });
define('text!about/work/work.html', ['module'], function(module) { module.exports = "<template>\n   \n<!-- \n   Author: Alex Dodge | Copyright 2016\n   Date: October 13, 2016\n\n-->\n\n   <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\n   *                       \n   *                       About - Work\n   *\n   *  - - - - - - - - - - - - - - -\n   *  Hierarchy Overview of Classes\n   *  - - - - - - - - - - - - - - -\n   *   section-about\n   *      container-fluid\n   *         row\n   *            about-headshot\n   *               about-headshot-source\n   *            about-info\n   *               about-info-title\n   *               about-info-description\n   *\n   * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\n   --> \n   <section class=\"section-about-work\">\n\n      <div class=\"about-work-crumbs main-breadcrumbs pull-right\">\n         <i class=\"fa fa-caret-right\"></i>\n         <a route-href=\"route: home\">home</a> &#47;\n         <a route-href=\"route: about\">about</a> &#47;\n         <a route-href=\"route: work\">work</a>\n      </div>\n\n      <div class=\"container-fluid\">\n         <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-offset-1 col-sm-10 col-md-offset-2 col-md-8\">\n\n               <h2 class=\"about-work-title\">Work History</h2>\n               <img src=\"assets/img/second-divider.png\" alt=\"Alex Dodge Divider\" \n                  class=\"about-work-divider\">\n               <p class=\"about-work-description\">\n                  I've worked a number of different jobs ranging from aquatics to public education. A diverse background\n                  helps me to view problems from various perspectives, bringing unique solutions to the table.\n               </p>\n\n               <div class=\"about-work-career\">\n                  <h4 class=\"about-work-career-title\">\n                     <i class=\"fa fa-medkit\"></i>\n                     Aquatics\n                     <small>(December 2007 to August 2015)</small>\n                  </h4>\n                  <p>\n                     I began working as a swim instructor and eventually started to work as a lifeguard.\n                     Within a year I was employed as a beach lifeguard. The year\n                     after I was promoted to beach captain, and three years after that I was an aquatic\n                     coordinator. In this position I managed all 24 beaches in Halifax in cooperation with\n                     three other coordinators. I've trained hundreds of lifesaving staff as well as \n                     professionals outside of the aquatics field.\n                  </p>\n\n                  <p> Some of the skills I've developed in this field are,</p>\n\n                  <div class=\"row\">\n                     <div class=\"col-xs-12 col-sm-12 col-md-6\">\n                        <ul class=\"about-work-learned\">\n                           <li><i class=\"fa fa-caret-right\"></i> Public relations</li>\n                           <li><i class=\"fa fa-caret-right\"></i> Documentation</li>\n                           <li><i class=\"fa fa-caret-right\"></i> Lifesaving and First-Aid</li>\n                        </ul>\n                     </div>\n\n                     <div class=\"col-xs-12 col-sm-12 col-md-6\">\n                        <ul class=\"about-work-learned\">\n                           <li><i class=\"fa fa-caret-right\"></i> Leadership and Management</li>\n                           <li><i class=\"fa fa-caret-right\"></i> Conflict Resolution</li>\n                           <li><i class=\"fa fa-caret-right\"></i> Planning and Organization</li>\n                        </ul>\n                     </div>\n                  </div>\n\n               </div><!-- End Work Career : Aquatics -->\n\n\n               <div class=\"about-work-career\">\n                  <h4 class=\"about-work-career-title\">\n                     <i class=\"fa fa-child\"></i>\n                     Resident Assistant\n                     <small>(September 2011 to May 2013)</small>\n                  </h4>\n                  <p>\n                     When I first arrived at Acadia University I immediately was drawn to\n                     the idea of the resident assistant position. It was a way to get involved\n                     and also make a difference in the lives of other students. In this position\n                     I worked on a team of eleven other RAs, and was responsible for the twenty\n                     students on my floor. Throughout the year I had two jobs: one as a student,\n                     and one as a Resident Assistant. The job required incredible time management\n                     as we were responsible for meeting programming requirements, and regular duty\n                     ensuring the building was safe.\n                  </p>\n\n                  <p> Some of the skills I've developed in this field are,</p>\n\n                  <div class=\"row\">\n                     <div class=\"col-xs-12 col-sm-12 col-md-6\">\n                        <ul class=\"about-work-learned\">\n                           <li><i class=\"fa fa-caret-right\"></i> Time Management</li>\n                           <li><i class=\"fa fa-caret-right\"></i> Professional Collaboration</li>\n                           <li><i class=\"fa fa-caret-right\"></i> Documentation</li>\n                        </ul>\n                     </div>\n                     <div class=\"col-xs-12 col-sm-12 col-md-6\">\n                        <ul class=\"about-work-learned\">\n                           <li><i class=\"fa fa-caret-right\"></i> Recreational Planning</li>\n                           <li><i class=\"fa fa-caret-right\"></i> Mental Health Support</li>\n                           <li><i class=\"fa fa-caret-right\"></i> Non-Violent Crisis Intervention</li>\n                        </ul>\n                     </div>\n                  </div>\n               </div><!-- End Work Career : Resident Assistant -->\n\n\n               <div class=\"about-work-career\">\n                  <h4 class=\"about-work-career-title\">\n                     <i class=\"fa fa-pencil\"></i>\n                     Educator\n                     <small>(September 2010 to Present)</small>\n                  </h4>\n                  <p>\n                     The first year I was at Acadia I started to tutor high school students. This\n                     was the beginning of my current career in education.\n                     In later years I tutored students from first year to third year in computer\n                     science and physics. I also took on Teaching Assistant roles in the Physcics\n                     and Computer Science department. Near graduation I decided to continue these\n                     roles in a larger sense and I applied to the education program at Acadia.\n                     <br><br>\n\n                     I completed the accelerated program at Acadia and began working as a secondary\n                     teacher a year later. Within three months I had attained my first full time\n                     position teaching Mathematics 7 and Mathematics 8 at Harold T. Barrett Junior\n                     High. It was in this position that I began to grow quickly as a professional.\n                     During this time I presented at the HRSB Innovation's in Teaching Conference on\n                     digital assessment and creative engagement in the classroom. Our school also\n                     led the board in initiatives like the Maker Spaces, and the Restorative Approach.\n                  </p>\n\n                  <p> Some of the skills I've developed in this field are,</p>\n\n                  <div class=\"row\">\n                     <div class=\"col-xs-12 col-sm-12 col-md-6\">\n                        <ul class=\"about-work-learned\">\n                           <li><i class=\"fa fa-caret-right\"></i> Assessment Creation and Dissemination</li>\n                           <li><i class=\"fa fa-caret-right\"></i> Individual Program Planning</li>\n                           <li><i class=\"fa fa-caret-right\"></i> Student Management Systems</li>\n                           <li><i class=\"fa fa-caret-right\"></i> Standardized Assessments </li>\n                           <li><i class=\"fa fa-caret-right\"></i> Behavior Management </li>\n                        </ul>\n                     </div>\n\n                     <div class=\"col-xs-12 col-sm-12 col-md-6\">\n                        <ul class=\"about-work-learned\">\n                           <li><i class=\"fa fa-caret-right\"></i> Curriculum Development</li>\n                           <li><i class=\"fa fa-caret-right\"></i> Diversifying Learning Criteria</li>\n                           <li><i class=\"fa fa-caret-right\"></i> Educational Technology</li>\n                           <li><i class=\"fa fa-caret-right\"></i> Public Speaking and Presentation</li>\n                           <li><i class=\"fa fa-caret-right\"></i> Report Preparation</li>\n                        </ul>\n                     </div>\n                  </div>\n               </div><!-- End Work Career : Educator -->\n\n\n               <div class=\"about-work-career\">\n                  <h4 class=\"about-work-career-title\">\n                     <i class=\"fa fa-globe pull-left\"></i>\n                     Front-End Web Developer\n                     <small>(September 2015 to Present)</small>\n                  </h4>\n                  <p>\n                     Around the time I graduated education from Acadia I also began to seek\n                     work and projects in the web development field. Throughout both my degrees I\n                     continually worked on building a strong computer science background\n                     and integrating it with my other interests and disciplines. My first\n                     commit on GitHub was July of 2015, and since then I've developed and\n                     contributed to multiple open source projects.\n                     <br><br>\n\n                     I've worked on a number of projects which have already been outlined,\n                     and explained in greater detail. Others I haven't written about as much\n                     have been a lot of my personal projects like this site, a mural generator\n                     application, and a number of other unfinished pieces. I'm excited to continually build on larger\n                     and larger projects. For a specific layout of skills and technologies\n                     I'm familiar with, go to the portfolio section of my website.\n                  </p>\n\n                  <p> Some of the skills I've developed in this field are,</p>\n\n                  <div class=\"row\">\n                     <div class=\"col-xs-12 col-sm-12 col-md-6\">\n                        <ul class=\"about-work-learned\">\n                           <li><i class=\"fa fa-caret-right\"></i> Agile Development</li>\n                           <li><i class=\"fa fa-caret-right\"></i> Project and Scope Documentation</li>\n                           <li><i class=\"fa fa-caret-right\"></i> Responsive and Dynamic Site Design</li>\n                        </ul>\n                     </div>\n\n                     <div class=\"col-xs-12 col-sm-12 col-md-6\">\n                        <ul class=\"about-work-learned\">\n                           <li><i class=\"fa fa-caret-right\"></i> MVC and MVVM Frameworks</li>\n                           <li><i class=\"fa fa-caret-right\"></i> Client Interaction</li>\n                           <li><i class=\"fa fa-caret-right\"></i> Prototyping and Testing</li>\n                        </ul>\n                     </div>\n                  </div>\n               </div><!-- End Work Career : Front-End Development -->\n\n            </div>\n         </div>\n      </div> <!-- End of About Bootstrap Container -->\n\n   </section>\n\n</template>\n"; });
define('text!portfolio/projects/projects.html', ['module'], function(module) { module.exports = "<template>\n   \n<!-- \n   Author: Alex Dodge | Copyright 2016\n   Date: October 17, 2016\n\n-->\n\n   <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\n   *                       \n   *                       Portfolio - Projects\n   *\n   * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\n   --> \n   <section class=\"section-portfolio-project\">\n\n      <div class=\"portfolio-project-crumbs main-breadcrumbs pull-right\">\n         <i class=\"fa fa-caret-right\"></i>\n         <a route-href=\"route: home\">home</a> &#47;\n         <a route-href=\"route: portfolio\">portfolio</a> &#47;\n         <a route-href=\"route: projects\">projects</a>\n      </div>\n      <div class=\"container-fluid\">\n         <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-offset-1 col-sm-10 col-md-offset-1 col-md-6\">\n               <h2 class=\"portfolio-project-title\">Projects</h2>\n\n               <div class=\"portfolio-project-filter\">\n                  <label for=\"projects-filter\">SHOW</label>\n                  <select name=\"projects-filter\">\n                     <option value=\"0\"> All </option>\n                     <option value=\"1\"> Client Based </option>\n                     <option value=\"2\"> Open Source </option>\n                     <option value=\"3\"> Games </option>\n                  </select>\n               </div>\n            </div>\n\n         </div>\n\n         <div class=\"portfolio-project-selection row\">\n            <div class=\"col-xs-12 col-sm-6 col-md-4\">\n               <div class=\"portfolio-projects-selection-apex\">\n\n                  <div class=\"projects-selection-title\">\n                     Apex Training\n                  </div>\n\n                  <!--  <a route-href=\"route: apex\" class=\"projects-selection-study button\"> -->\n                  <a id=\"apex\" class=\"projects-selection-study button\">\n                     Case Study\n                  </a>\n\n                  <a href=\"http://apextrainingsystems.ca/\" target=\"_blank\" class=\"projects-selection-external small-button\">\n                     <i class=\"fa fa-globe\"></i> Live Site\n                  </a>\n\n               </div>\n            </div>\n\n            <div class=\"col-xs-12 col-sm-6 col-md-4\">\n               <div class=\"portfolio-projects-selection-student\">\n\n                  <div class=\"projects-selection-title\">\n                     Student Search\n                  </div>\n\n                  <!--  <a route-href=\"route: student-search\" class=\"projects-selection-study button\"> -->\n                  <a id=\"student-search\" class=\"projects-selection-study button\">\n                     Case Study\n                  </a>\n                  \n                  <a href=\"https://www.alexmdodge.ca/demos/student-search/\" class=\"projects-selection-external small-button\">\n                     <i class=\"fa fa-globe\"></i> Demo\n                  </a>\n\n               </div>\n            </div>\n\n            <div class=\"clearfix visible-sm-block visible-xs-block\"></div>\n\n            <div class=\"col-xs-12 col-sm-offset-3 col-sm-6 col-md-offset-0 col-md-4\">\n               <div class=\"portfolio-projects-selection-gridgrind\">\n                  <div class=\"projects-selection-title\">\n                     Grid Grind\n                  </div>\n\n                  <!--  <a route-href=\"route: student-search\" class=\"projects-selection-study button\"> -->\n                  <a id=\"grid-grind\" class=\"projects-selection-study button\">\n                     Overview\n                  </a>\n                  \n                  <a href=\"https://www.alexmdodge.ca/games/grid-grind/app/\" class=\"projects-selection-external small-button\">\n                     <i class=\"fa fa-globe\"></i> Demo\n                  </a>\n               </div>\n            </div>\n         </div>\n\n      </div> <!-- End of portfolio Bootstrap Container -->\n\n   </section>\n\n   <section class=\"section-projects-case\">\n\n      <div class=\"container-fluid\"><div class=\"row\">\n         <router-view class=\"project-cases\"></router-view>\n      </div></div> <!-- End of Skills Bootstrap Container -->\n\n   </section>\n\n</template>\n"; });
define('text!portfolio/resume/resume.html', ['module'], function(module) { module.exports = "<template>\n   \n<!-- \n   Author: Alex Dodge | Copyright 2016\n   Date: October 25, 2016\n\n-->\n\n   <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\n   *                       \n   *                       Portfolio - Resume\n   *\n   * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\n   --> \n   <section class=\"section-portfolio-resume\">\n\n      <div class=\"portfolio-resume-crumbs main-breadcrumbs pull-right\">\n         <i class=\"fa fa-chevron-right\"></i>\n         <a route-href=\"route: home\">home</a> &#47;\n         <a route-href=\"route: portfolio\">portfolio</a> &#47;\n         <a route-href=\"route: resume\">resume</a>\n      </div>\n      <div class=\"container-fluid\">\n         <div class=\"portfolio-resume row\">\n\n            <div class=\"col-xs-12 col-sm-offset-1 col-sm-10 col-md-offset-1 col-md-10\">\n               <h2 class=\"portfolio-resume-title\">Resume</h2>\n               <p class=\"portfolio-resume-description\">\n                  This serves as a digital copy of my resume. There have been no modifications and\n                  I've placed a download link to a pdf version. For privacy reasons my phone number\n                  and address have been ommitted, as well as references. For personal business inquiries\n                  or if you would like the full version please <a route-href=\"route: contact\">contact me</a>!\n               </p>\n\n               <div class=\"portfolio-resume-container\">\n                  <h3 class=\"portfolio-resume-container-title\">Summary</h3>\n                  <p class=\"portfolio-resume-container-info\">\n                     Dedicated web developer with experience in both software design and public education. Versed in wire framing, mock-ups, UML, prototyping, OOD, design patterns, and agile principles. Strong with front-end technologies and methodologies such as responsive design, user interfaces, interactive content, and dynamic web pages. Familiar with unit, integration, and system testing. Experienced in collecting, adapting, and distributing complex concepts from years of working in educational positions across various disciplines.                     \n                  </p>\n               </div>\n\n               <div class=\"portfolio-resume-container\">\n                  <h3 class=\"portfolio-resume-container-title\">Technical Overview</h3>\n                  <p class=\"portfolio-resume-container-info\">\n                     <span>Proficient in</span>: HTML, CSS, JavaScript (ES5), Java, Sass/Less, Bootstrap, jQuery, Git (Github and BitBucket), Gulp, NPM, Bower, Photoshop, Sublime Text, Eclipse, LaTeX, Linux, Windows <br><br>\n\n                     <span>Familiar with</span>: PHP, JavaScript (ES 2015), SQL, Grunt, Bash, Wordpress, Aurelia, MVC principles, RESTful APIs, SEO, After Effects, Gimp, Vim, Scrum     \n                  </p>\n               </div>\n\n               <div class=\"portfolio-resume-container\">\n                  <h3 class=\"portfolio-resume-container-title\">Experience</h3>\n                  <div class=\"portfolio-resume-container-info experience-spacing\">\n                     <h4>\n                        Freelance Front-End Web Developer <br>\n                        <small>(Halifax, Nova Scotia, <b>August 2015 - Present</b> )</small>\n                     </h4>\n                     <ul>\n                        <li>\n                           Designed and coded a web application to manage student scholarship information for Halifax West High School's guidance department using HTML, Sass, Bootstrap, jQuery, NPM, Gulp, and Google’s Visualization API. The project was open sourced and versioned through GitHub. The application aimed to reduce time spent collecting and organizing scholarship applications, and to ease the process of award selection.\n                        </li>\n                        \n                        <li>\n                           Designed, coded, and deployed a one page application for Apex Training Systems' web platform using HTML, Sass/Less, Bootstrap templates, and jQuery. The professional style and user interface helped to draw additional clients to the business, as well as aid in the promotion of their brand in a competitive field.\n                        </li>\n\n                        <li>\n                           Outlined project requirements, created and organized project goals and timelines, conceptualized and delivered initial mock ups using Photoshop, conducted testing and refactoring, deployed projects using FTP and SSH, and maintained work using BitBucket and GitHub.\n                        </li>\n                     </ul>\n                  </div>\n\n                  <div class=\"portfolio-resume-container-info\">\n                     <h4>\n                        Mathematics, Science, and Technology Education Teacher <br>\n                        <small>(Halifax and Wolfville, Nova Scotia, <b>October 2014 - Present</b> )</small>\n                     </h4>\n                     <ul>\n                        <li>\n                           Presented at the Halifax Regional School Board's “Innovations in Teaching” conference on digital assessment and creative engagement in the classroom with a focus on Google Applications for Education.\n                        </li>\n\n                        <li>\n                           Developed curriculum according to educational theory. Conducted diagnostic, formative, and summative assessments. Delivered lessons to mathematics classes ranging from grades 7 to 12 using a variety of media and creative styles.\n                        </li>\n\n                        <li>\n                           Incorporated digital tools within every aspect of teaching, including student management systems, grades, adaptive learning practices, and individual student program plans.\n                        </li>\n                     </ul>\n                  </div>\n               </div>\n\n               <div class=\"portfolio-resume-container\">\n                  <h4 class=\"portfolio-resume-container-title\">Education</h4>\n                  <div class=\"portfolio-resume-container-info\">\n                     <ul>\n                        <li>\n                           B.Ed., secondary, teachables in physics and math, Acadia University (August 2015)\n                        </li>\n\n                        <li>\n                           B.Sc., double major in physics and computer science, Acadia University (May 2014)\n                        </li>\n\n                        <li>\n                           High School Diploma, honours, Dartmouth High School (June 2010)\n                        </li>\n                     </ul>\n                  </div>\n               </div>\n            </div>\n\n         </div>\n\n      </div> <!-- End of About Bootstrap Container -->\n\n      <a href=\"https://github.com/alexmdodge/resume/blob/master/Alex-Dodge-Resume-2016.pdf\" class=\"resume-download button\" target=\"_blank\">\n         Download Resume\n      </a>\n\n   </section>\n\n</template>\n"; });
define('text!portfolio/skills/skills.html', ['module'], function(module) { module.exports = "<template>\n   \n<!-- \n   Author: Alex Dodge | Copyright 2016\n   Date: October 25, 2016\n\n-->\n\n   <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\n   *                       \n   *                       Portfolio - Skills\n   *\n   * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\n   --> \n   <section class=\"section-portfolio-skills\">\n\n      <div class=\"portfolio-skills-crumbs main-breadcrumbs pull-right\">\n         <i class=\"fa fa-chevron-right\"></i>\n         <a route-href=\"route: home\">home</a> &#47;\n         <a route-href=\"route: portfolio\">portfolio</a> &#47;\n         <a route-href=\"route: skills\">skills</a>\n      </div>\n      <div class=\"container-fluid\">\n         <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-offset-1 col-sm-10 col-md-offset-1 col-md-10\">\n               <h2 class=\"portfolio-skills-title\">Skills</h2>\n               <p class=\"portfolio-skills-description\">\n                  I use a number of different technologies when I build software. I'm constantly adding bigger and better things to make the products I work on more efficient and user friendly. I don't think I could ever define myself as a master, as you quickly realize the more you know, the more you know how much you don't know.\n               </p>               \n            </div>\n         </div>\n\n\n         <div class=\"row\">\n            <div class=\"portfolio-skills-container col-xs-12 col-sm-6 col-md-4\">\n               <div class=\"skills-indicator\">\n                  <div class=\"skills-indicator-level\">\n                     <div id=\"slide-html\" class=\"skills-indicator-slide\"></div>\n                     <div class=\"skills-indicator-level-title\">\n                        HTML5 \n                     </div>\n                  </div>\n\n                  <div class=\"skills-indicator-info js-shave\">\n                     When you look at text on a web page you're seeing HTML. All of the applications I build use modern HTML features like screen reading indicators, data validation, descriptive layouts, as well as the new canvas and svg elements for graphics.\n                  </div>\n\n               </div>\n            </div>\n\n            <div class=\"portfolio-skills-container col-xs-12 col-sm-6 col-md-4\">\n               <div class=\"skills-indicator\">\n                  <div class=\"skills-indicator-level\">\n                     <i class=\"fa fa-plus pull-right extra-skills\"></i>\n                     <div id=\"slide-css\" class=\"skills-indicator-slide\"></div>\n                     <div class=\"skills-indicator-level-title\">\n                        CSS3\n                     </div>\n                     \n                     <ul class=\"skills-extra-dropdown\">\n                        <li id=\"slide-sass\"> <span>Sass/Less</span></li>\n                        <li id=\"slide-boot-css\"> <span>Bootstrap</span></li>\n                     </ul>\n                  </div>\n\n\n                  <div class=\"skills-indicator-info js-shave\">\n                     In recent years CSS has become a powerful tool for web technology. I always use Sass with my projects. It's a powerful extension language that allows you to organize styles, implement variables, and even create functions. I also use CSS3 animations, transformations, and other modern styling properties.\n                  </div>\n\n               </div>\n            </div>\n\n            <div class=\"clearfix visible-sm-block\"></div>\n\n            <div class=\"portfolio-skills-container col-xs-12 col-sm-6 col-md-4\">\n               <div class=\"skills-indicator\">\n                  <div class=\"skills-indicator-level\">\n                     <i class=\"fa fa-plus pull-right extra-skills\"></i>\n                     <div id=\"slide-javascript\" class=\"skills-indicator-slide\"></div>\n\n                     <div class=\"skills-indicator-level-title\">\n                        JavaScript\n                     </div>\n                     \n                     <ul class=\"skills-extra-dropdown\">\n                        <li id=\"slide-aurelia\"> <span>Aurelia Framework</span></li>\n                        <li id=\"slide-jquery\"> <span>jQuery</span></li>\n                        <li id=\"slide-velocity\"> <span>Velocity</span></li>\n                        <li id=\"slide-boot-js\"> <span>Bootstrap</span></li>\n                     </ul>\n                  </div>\n\n\n                  <div class=\"skills-indicator-info js-shave\">\n                     The driving force behind all projects. It modifies the elements of the page you are on, generates content, processes data, and can even be used to manage the database side of a web application. I currently use Babel and other plugins to produce modern JavaScript applications written using the new ES 2015 and ES Next features.\n                  </div>\n\n               </div>\n            </div>\n\n            <div class=\"portfolio-skills-container col-xs-12 col-sm-6 col-md-4\">\n               <div class=\"skills-indicator\">\n                  <div class=\"skills-indicator-level\">\n                     <div id=\"slide-php\" class=\"skills-indicator-slide\"></div>\n                     <div class=\"skills-indicator-level-title\">\n                        PHP\n                     </div>\n                  </div>\n\n                  <div class=\"skills-indicator-info js-shave\">\n                     Still a powerful driving force in backend web development, PHP is the server side language which accepts information from web pages and tranfsers it to the database. I use PHP in web applications which involve securing web pages, as well content management systems like Wordpress.\n                  </div>\n\n               </div>\n            </div>\n\n            <div class=\"clearfix visible-sm-block\"></div>\n\n            <div class=\"portfolio-skills-container col-xs-12 col-sm-6 col-md-4\">\n               <div class=\"skills-indicator\">\n                  <div class=\"skills-indicator-level\">\n                     <div id=\"slide-java\" class=\"skills-indicator-slide\"></div>\n                     <div class=\"skills-indicator-level-title\">\n                        Java\n                     </div>\n                  </div>\n\n                  <div class=\"skills-indicator-info js-shave\">\n                     Java is incredibly versatile language and it's interesting how it has changed over the years. I've used it in the past to develop business software applications, but I'm incredibly intrigued with how it's adapted to the modern web with it's MVC framework Spring.\n                  </div>\n\n               </div>\n            </div>\n\n            <div class=\"portfolio-skills-container col-xs-12 col-sm-6 col-md-4\">\n               <div class=\"skills-indicator\">\n                  <div class=\"skills-indicator-level\">\n                     <div id=\"slide-mysql\" class=\"skills-indicator-slide\"></div>\n                     <div class=\"skills-indicator-level-title\">\n                        MySQL\n                     </div>\n                  </div>\n\n                  <div class=\"skills-indicator-info js-shave\">\n                     Whenever you store information on a website it's always stored in a database. In this case I use MySQL for storing information as it is one of the more popular and well supported RMDBS. It uses SQL to store and retrieve information which integrates well with other scripting languages like PHP, and NodeJS.\n                  </div>\n\n               </div>\n            </div>\n\n            <div class=\"clearfix visible-sm-block\"></div>\n\n            <div class=\"portfolio-skills-container col-xs-12 col-sm-6 col-md-4\">\n               <div class=\"skills-indicator\">\n                  <div class=\"skills-indicator-level\">\n                     <i class=\"fa fa-plus pull-right extra-skills\"></i>\n                     <div id=\"slide-test\" class=\"skills-indicator-slide\"></div>\n                     <div class=\"skills-indicator-level-title\">\n                        Testing\n                     </div>\n\n                     <ul class=\"skills-extra-dropdown\">\n                        <li id=\"slide-mocha\"> <span>Mocha (Chai)</span></li>\n                     </ul>\n                  </div>\n\n\n                  <div class=\"skills-indicator-info js-shave\">\n                     A core component to any software development process. Through the build systems I run tests both to validate and check old code, as well as generate new code through TDD and BDD practices. The current systems I use are Mocha and Chai driven through NPM scripts.\n                  </div>\n\n               </div>\n            </div>\n\n            <div class=\"portfolio-skills-container col-xs-12 col-sm-6 col-md-4\">\n               <div class=\"skills-indicator\">\n                  <div class=\"skills-indicator-level\">\n                     <div id=\"slide-git\" class=\"skills-indicator-slide\"></div>\n                     <div class=\"skills-indicator-level-title\">\n                        <span>Git</span>\n                     </div>\n                  </div>\n\n\n\n                  <div class=\"skills-indicator-info js-shave\">\n                     Version control is a critical piece of any developers workflow. I use it to ensure that all of my changes and updates to software are well documented and revertible if necessary. I primarily use GitHub and BitBucket for my online repository management systems.\n                  </div>\n\n               </div>\n            </div>\n\n            <div class=\"clearfix visible-sm-block\"></div>\n\n            <div class=\"portfolio-skills-container col-xs-12 col-sm-6 col-md-4\">\n               <div class=\"skills-indicator\">\n                  <div class=\"skills-indicator-level\">\n                     <i class=\"fa fa-plus pull-right extra-skills\"></i>\n                     <div id=\"slide-build\" class=\"skills-indicator-slide\"></div>\n                     <div class=\"skills-indicator-level-title\">\n                        Build Tools\n                     </div>\n                     \n                     <ul class=\"skills-extra-dropdown\">\n                        <li id=\"slide-gulp\"> <span>Gulp</span></li>\n                        <li id=\"slide-grunt\"> <span>Grunt</span></li>\n                        <li id=\"slide-npm\"> <span>NPM</span></li>\n                        <li id=\"slide-babel\"> <span>Babel</span></li>\n                     </ul>\n                  </div>\n\n\n                  <div class=\"skills-indicator-info js-shave\">\n                     I've given this section a more general label because there are a lot of tools I use to streamline my build process. Some of these include NPM, Gulp, Grunt, Bower, Browsersync, Browserify, Webpack, and so much more. By understanding how to use amazing tools, it helps you to build amazing software.\n                  </div>\n\n               </div>\n            </div>\n\n            <div class=\"portfolio-skills-container col-xs-12 col-sm-6 col-md-4\">\n               <div class=\"skills-indicator\">\n                  <div class=\"skills-indicator-level\">\n                     <i class=\"fa fa-plus pull-right extra-skills\"></i>\n                     <div id=\"slide-design\" class=\"skills-indicator-slide\"></div>\n                     <div class=\"skills-indicator-level-title\">\n                        Design\n                     </div>\n\n                     <ul class=\"skills-extra-dropdown\">\n                        <li id=\"slide-photoshop\"> <span>Adobe Photoshop</span></li>\n                        <li id=\"slide-ae\"> <span>Adobe After Effects</span></li>\n                        <li id=\"slide-gimp\"> <span>Gimp</span></li>\n                        <li id=\"slide-sony\"><span>Sony Vegas</span></li>\n                     </ul>\n                  </div>\n\n\n                  <div class=\"skills-indicator-info js-shave\">\n                     I'm proud of the fact that along with a comprehensive development background, I also have a fair bit of design experience. I'm well acquainted with Photoshop after years of contributing to side projects and other related work. I'm also familiar with Gimp, After Effects, and Sony Vegas.\n                  </div>\n\n               </div>\n            </div>   \n\n            <div class=\"clearfix visible-sm-block\"></div>\n\n            <div class=\"portfolio-skills-container col-xs-12 col-sm-6 col-md-4\">\n               <div class=\"skills-indicator\">\n                  <div class=\"skills-indicator-level\">\n                     <i class=\"fa fa-plus pull-right extra-skills\"></i>\n                     <div id=\"slide-editors\" class=\"skills-indicator-slide\"></div>\n                     <div class=\"skills-indicator-level-title\">\n                        Editors \n                     </div> \n\n                     <ul class=\"skills-extra-dropdown\">\n                        <li id=\"slide-sublime\"> <span>Sublime Text</span></li>\n                        <li id=\"slide-eclipse\"> <span>Eclipse</span></li>\n                        <li id=\"slide-vim\"> <span>Vim</span></li>\n                     </ul>\n                  </div>\n\n\n                  <div class=\"skills-indicator-info js-shave\">\n                     I've used a number of text editors over the years. These include Notepad, Notepad++, Eclipse, BlueJ, Vim, Gedit, Visual Studio, and Sublime Text. Current Sublime is my preferred choice due to it's extensive add-ons and support. Atom is an open source editor which I'm intrigued to look at in the future. \n                  </div>\n\n               </div>\n            </div>\n\n            <div class=\"portfolio-skills-container col-xs-12 col-sm-6 col-md-4\">\n               <div class=\"skills-indicator\">\n                  <div class=\"skills-indicator-level\">\n                     <i class=\"fa fa-plus pull-right extra-skills\"></i>\n                     <div id=\"slide-linux\" class=\"skills-indicator-slide\"></div>\n                     <div class=\"skills-indicator-level-title\">\n                        OS\n                     </div>\n\n                     <ul class=\"skills-extra-dropdown\">\n                        <li id=\"slide-ubuntu\"> <span>Ubuntu</span></li>\n                        <li id=\"slide-windows\"> <span>Windows</span></li>\n                        <li id=\"slide-mac\"> <span>Mac</span></li>\n                     </ul>\n                     \n                  </div>\n\n\n                  <div class=\"skills-indicator-info js-shave\">\n                     I primarily use the Linux distribution Ubuntu. I also am very comfortable working with Windows and Mac settings. I enjoy Linux distributions as they offer a greater degree of power and control. Most web servers run off of a Linux distribution, so having a strong understanding is critical when working with any web environment.\n                  </div>\n\n               </div>\n            </div>\n         </div>\n\n      </div> <!-- End of About Bootstrap Container -->\n\n   </section>\n\n</template>"; });
define('text!portfolio/projects/cases/apex.html', ['module'], function(module) { module.exports = "<template>\n   \n<!-- \n   Author: Alex Dodge | Copyright 2016\n   Date: October 18, 2016\n\n-->\n\n   <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\n   *                       \n   *                       Projects - Apex\n   *\n   * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\n   --> \n\n   <section id=\"section-apex\" class=\"section-portfolio-cases\">\n\n      <div class=\"container-fluid\">\n         <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-offset-1 col-sm-10 col-md-offset-1 col-md-2\">\n               <div class=\"cases-current-arrow\"></div>\n            </div>\n         </div>\n\n         <div class=\"cases-container row\">\n            <div class=\"col-xs-12 col-sm-8 col-md-offset-1 col-md-6\">\n               <h2 class=\"cases-title\">\n                  Proposal\n               </h2>\n\n               <p class=\"cases-description\">\n                 I was approached by Donald and Stuart Tabor who were looking\n                 to get a website up and running for their online coaching and\n                 nutrition business as soon as possible. With an upcoming\n                 national competition only a week away they wanted to try to\n                 get something up to share around and generate interest. With\n                 only four days it was going to be a push to get things working\n                 in time, to the level required.\n               </p>               \n            </div>\n\n            <div class=\"cases-proposal hidden-xs col-sm-4 col-md-4\">\n               <img src=\"assets/img/portfolio-handshake.png\" alt=\"Project Proposal\" class=\"cases-proposal-src\">\n            </div>\n         </div>\n\n         <div class=\"cases-container row\">\n            <div class=\"cases-process hidden-xs col-sm-4 col-md-offset-1 col-md-4\">\n               <img src=\"assets/img/portfolio-process.png\" alt=\"Project Proposal\" class=\"cases-process-src\">\n            </div>\n\n            <div class=\"col-xs-12 col-sm-8 col-md-6\">\n               <h2 class=\"cases-title\">\n                  Process\n               </h2>\n               <p class=\"cases-description\">\n                  We immediately needed to define the aspects of the site, then get into the designs and prototyping. Using a Bootstrap framework made it easy to get initial designs over to the client and from there get the first stage finished. Using jQuery, some simple styling, a one page design was quickly constructed. The most important aspect was the collaboration throughout the project. We met nearly every day and validated every component as rapidly as possible throughout the execution.\n               </p>\n            </div>\n\n         </div>\n\n         <div class=\"cases-container row\">\n            <div class=\"col-xs-12 col-sm-8 col-md-offset-1 col-md-6\">\n               <h2 class=\"cases-title\">\n                  Results\n               </h2>\n               <p class=\"cases-description\">\n                  At the end of four days Apex Training Systems had a professional, fully responsive, one page site. The client was happy to be able to demonstrate their business to prospective clients, and it put them one step ahead in their competitive field.\n               </p>               \n            </div>\n\n            <div class=\"cases-results hidden-xs col-sm-4 col-md-4\">\n               <img src=\"assets/img/portfolio-results.png\" alt=\"Project Proposal\" class=\"cases-results-src\">\n            </div>\n         </div>\n\n      </div> <!-- End of Portfolio Cases Bootstrap Container -->\n\n   </section>\n\n   <section id=\"section-student\" class=\"section-portfolio-cases\">\n\n      <div class=\"container-fluid\">\n         <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-offset-1 col-sm-10 col-md-offset-5 col-md-2\">\n               <div class=\"cases-current-arrow\"></div>\n            </div>\n         </div>\n\n         <div class=\"cases-container row\">\n            <div class=\"col-xs-12 col-sm-8 col-md-offset-1 col-md-6\">\n               <h2 class=\"cases-title\">\n                  Proposal\n               </h2>\n\n               <p class=\"cases-description\">\n                 In the fall of last year I was having a conversation with the department head of\n                 technology at Halifax West High School. Every year the guidance department sends\n                 out surveys to determine what scholarships and awards, as well as other post-secondary\n                 options students have persued. The trouble was this information had to be sorted, so they\n                 moved to google forms. They liked having the ability to access the google sheets but\n                 sorting the information became tedious. He asked me if I would be interested in building\n                 an interface that used the information from Google sheets and sorted it to a more organized\n                 view screen\n               </p>               \n            </div>\n\n            <div class=\"cases-proposal hidden-xs col-sm-4 col-md-4\">\n               <img src=\"assets/img/portfolio-handshake.png\" alt=\"Project Proposal\" class=\"cases-proposal-src\">\n            </div>\n         </div>\n\n         <div class=\"cases-container row\">\n            <div class=\"cases-process hidden-xs col-sm-4 col-md-offset-1 col-md-4\">\n               <img src=\"assets/img/portfolio-process.png\" alt=\"Project Proposal\" class=\"cases-process-src\">\n            </div>\n\n            <div class=\"col-xs-12 col-sm-8 col-md-6\">\n               <h2 class=\"cases-title\">\n                  Process\n               </h2>\n               <p class=\"cases-description\">\n                  The first step was getting aquainted with the Google Visualization API which lets you\n                  talk to Google sheets kind of like a database. From there an interface was outlined which\n                  would allow staff to search by student name, scholarship amount, and previous schools.\n                  It would then retrieve the information from the sheet and output the results to a\n                  formatted section. The application was also secured using a login system to ensure that\n                  no student information could be retrieved except by those authorized staff.\n               </p>\n            </div>\n\n         </div>\n\n         <div class=\"cases-container row\">\n            <div class=\"col-xs-12 col-sm-8 col-md-offset-1 col-md-6\">\n               <h2 class=\"cases-title\">\n                  Results\n               </h2>\n               <p class=\"cases-description\">\n                  The application was finished and we are still in the process on conferring with the\n                  guidance department to put on some finishing touches. Already they have said that it\n                  significantly decreased the time spent sifting information and will help them to add\n                  additional features to the awards process.\n               </p>               \n            </div>\n\n            <div class=\"cases-results hidden-xs col-sm-4 col-md-4\">\n               <img src=\"assets/img/portfolio-results.png\" alt=\"Project Proposal\" class=\"cases-results-src\">\n            </div>\n         </div>\n\n      </div> <!-- End of Portfolio Cases Bootstrap Container -->\n\n   </section>\n\n   <section id=\"section-gridgrind\" class=\"section-portfolio-cases\">\n\n      <div class=\"container-fluid\">\n         <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-offset-1 col-sm-10 col-md-offset-9 col-md-2\">\n               <div class=\"cases-current-arrow\"></div>\n            </div>\n         </div>\n\n         <div class=\"cases-container row\">\n            <div class=\"col-xs-12 col-sm-offset-1 col-sm-10 col-md-offset-1 col-md-6\">\n               <h2 class=\"cases-title\">\n                  Overview\n               </h2>\n\n               <p class=\"cases-description\">\n                 I have always had a love of games, and having an opportunity to build them\n                 is certainly no exception to that passion. While playing around with a number of frameworks\n                 I came across the Phaser framework. I've always had an interest in challenging puzzle games\n                 and decided to see if I could build something of my own. <br><br>\n\n                 Grid Grind is a puzzle challenge which randomly generates groups of blocks. Each level\n                 you move further increases the number of blocks and also the challenge of collecting enough points to move on. It is kind of like chess in the sense that you have to think ahead in your moves to ensure you don't accidentally miss out on a big chain of blocks. The longer the chain the more points you get. <br><br>\n\n                 In the future I plan on creating power ups and other incentives which you can spend your\n                 points on. I also have someone working on some audio for the game to bring it to the\n                 next level.\n               </p>               \n            </div>\n\n            <div class=\"cases-proposal col-xs-12 col-sm-offset-2 col-sm-8 col-md-offset-0 col-md-4\">\n               <img src=\"assets/img/game-controller.svg\" alt=\"Project Grid Grind\" class=\"cases-proposal-game\">\n            </div>\n         </div>\n\n      </div> <!-- End of Portfolio Cases Bootstrap Container -->\n\n   </section>\n\n</template>"; });
define('text!portfolio/projects/cases/gridgrind.html', ['module'], function(module) { module.exports = "<template>\n\t\n</template>"; });
define('text!portfolio/projects/cases/studentSearch.html', ['module'], function(module) { module.exports = "<template>\n\t\n</template>"; });
//# sourceMappingURL=app-bundle.js.map