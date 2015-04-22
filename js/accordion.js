

/*--------------------  Accordion  --------------------*/


$(document).ready(function() {
	$('.accordion').each(function() {

			$('.accordion-minus', this).hide();

			$('.accordion-panel', this).hide();

			$('.accordion-head', this).click(function(e) {

					var	thisAccordion = $(this).parent().parent(),
						thisHead = $(this),
						thisPlus = thisHead.find('.accordion-plus'),
						thisMinus = thisHead.find('.accordion-minus'),
						thisPanel = thisHead.siblings('.accordion-panel');

					thisAccordion.find('.accordion-plus').show();
					thisAccordion.find('.accordion-minus').hide();

					thisAccordion.find('.accordion-head').not(this).removeClass('active');
					thisAccordion.find('.accordion-panel').not(this).removeClass('active').slideUp();

					if (thisHead.hasClass('active')) {
						thisHead.removeClass('active');
						thisPlus.show();
						thisMinus.hide();
						thisPanel.removeClass('active').slideUp();
					} else {
						thisHead.addClass('active');
						thisPlus.hide();
						thisMinus.show();
						thisPanel.addClass('active').slideDown();
					}
			});
	});
});