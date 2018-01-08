/* jshint esversion: 6 */

export class Contact {

	attached() {
    $('.route-link').removeClass('nav-active');
    $('.route-link-contact').addClass('nav-active');
		$('#navbar-mobile-menu').removeClass('mobile-open').addClass('mobile-closed');
		$('#mobile-bars').removeClass('mobile-rotate').addClass('mobile-no-rotate');
		$(document).scrollTop(0);
		let self = this;

		$('#contact-button').click(function() {
			self.copyToClipboard('contact-button');
			$('.success-copy').animate(
				{opacity: '1', top: '85', left:'1'}, 'fast'
			);
		});

	}

	copyToClipboard(elem) {
		// create hidden text element, if it doesn't already exist
		let targetId = "_hiddenElement_";
		let target = "";
		let isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
		let origSelectionStart, origSelectionEnd;

		if (isInput) {
		  // can just use the original source element for the selection and copy
		  target = elem;
		  origSelectionStart = elem.selectionStart;
		  origSelectionEnd = elem.selectionEnd;
		} else {
		  // must use a temporary form element for the selection and copy
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
		// select the content
		let currentFocus = document.activeElement;
		target.focus();
		target.setSelectionRange(0, target.value.length);

		// copy the selection
		var succeed;

		try {
			  succeed = document.execCommand("copy");
		} catch(e) {
		  succeed = false;
		}
		// restore original focus
		if (currentFocus && typeof currentFocus.focus === "function") {
		  currentFocus.focus();
		}

		if (isInput) {
		  // restore prior selection
		  elem.setSelectionRange(origSelectionStart, origSelectionEnd);
		} else {
		  // clear temporary content
		  target.textContent = "";
		}

		if(succeed) {
			$()
		}
		return succeed;
	}
	
}
