export class Apex {

	/* Must be called on the attached portion of the lifecycle to ensure the dom
	 * elements are visible
	 *
	 * This is a hacked router and does not replace the usual functionality
	 */
	attached() {
		$('#apex').click( function() {
			$('.section-portfolio-cases').hide();
			$('#section-apex').show();
		});

		$('#student-search').click( function() {
			$('.section-portfolio-cases').hide();
			$('#section-student').show();
		});

		$('#grid-grind').click( function() {
			$('.section-portfolio-cases').hide();
			$('#section-gridgrind').show();
		});
	}
}