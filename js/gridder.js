/*!
 * GRIDDER (http://www.oriongunning.com/)
 * Version 1.1
 * This work is licensed under a Creative Commons Attribution 3.0 Unported License. 
 */
;(function($) {

    $.fn.Gridder = function(options) {

        var bloc;
        	gridderShow = $('<div class="gridder-show"></div>');
        
        return this.each(function() {

            $('.caption-text').click(function(e) {
                e.preventDefault();
				var self = $(this).parent();
				 	thisPosition = self.offset().top;
				
				
				if ($('.gridder-show').length > 0) {
					var imactivePos = $('.gridder-show').parent().offset().top;
						
						//check if clicked item is on the same row										
						if (imactivePos == thisPosition) {
							//same row
							self.css({height:'865px'});
						} else {
							//different row
							self.animate({height:'865px'});
							gridderShow.hide().slideDown(400, 'swing');
						}
				}
				
				
                /* REMOVES PREVIOUS BLOC */
				gridderShow.remove();
				
                /* ENSURES THE CORRECT BLOC IS ACTIVE */
                if (!self.hasClass('imactive')) {
					self.animate({height:'865px'}, 400, 'swing');
					self.siblings('.imactive').animate({height:'320px'}, 400, 'swing');
                    $('.imactive').removeClass('imactive');
                    self.addClass("imactive");
					gridderShow.animate({height:'540px'}, 400, 'swing', function() {
						var scrollDest = $('.gridder-show').position().top-200
						if ($('html, body').scrollTop() !== scrollDest) {
							$('html, body').animate({
								scrollTop: scrollDest
							}, 400, 'swing');
						}
					});

                } else {
					self.animate({height:'320px'}, 400).removeClass('imactive');
					gridderShow.animate({height:'0'}, 400)
						.queue(function() {
							$(this).remove();
				    });
					
				}
				
				
                /* ADD LOADING BLOC */
                bloc = gridderShow.appendTo(self);
                

                /* EXPANDED OUTPUT */
                var currentcontent = self.find('.gridder-content').html();
                var currentimage = self.find('.gridder-thumb').html();
                htmlcontent = "<div class=\"gridder-show-container\">";
                    htmlcontent += "<a class=og-close></a>";
                    htmlcontent += "<a class=\"gridder-nav prev\"></a>";
                    htmlcontent += "<a class=\"gridder-nav next\"></a>";
                    htmlcontent += "<div class=image>"+ currentimage+"</div>";
                    htmlcontent += "<div class=content>"+ currentcontent+"</div>";
                htmlcontent += "</div>";
                
                bloc.html(htmlcontent);

                if (!self.has(gridderShow)) {
                    bloc.find('.gridder-show-container').slideDown(600, 'swing');
                } else {
                    bloc.find('.gridder-show-container').show();
                }
             

            });
            
             /* NEXT BUTTON */
            $('.gridder').on('click', '.gridder-nav.next', function() {
                $(this).parents('.gridder-show').next().trigger('click');
            });

            /* PREVIOUS BUTTON */
            $('.gridder').on('click', '.gridder-nav.prev', function() {
                $(this).parents('.gridder-show').prev().prev().trigger('click');
            });
            
            /* CLOSE BUTTON */
            $('.gridder').on('click', '.og-close', function() {
                $('.imactive').removeClass('imactive');
				$('.gridder-list').animate({height:'320px'}, 600);
                $('.gridder-show').animate({height:'0'}, 600)
					.queue(function() {
						$(this).remove().dequeue();
			    })
            });

        });
    };
})(jQuery);

$(document).ready(function() {
	function checkWidth() {
		var windowwidth = $(window).width();
		
				
		if (windowwidth > 520) {
			$('.gridder').width(340);
		}
		
		if (windowwidth > 720) {
			$('.gridder').width(664);
		}
		
		if (windowwidth > 1040) {
			$('.gridder').width(998);
		}
		
		if (windowwidth > 1380) {
			$('.gridder').width(1334);
		}
		
		if (windowwidth > 1730) {
			$('.gridder').width(1674);
		}
	}
	checkWidth();
	$(window).resize(checkWidth);
	$(window).load(checkWidth);
	
	$('.gridder-list').mouseenter(function() {
		$(this).children('.caption-text').stop(true.false).delay(50).fadeIn(200);
	});

	$('.gridder-list').mouseleave(function() {
		$(this).children('.caption-text').fadeOut(200);
	});
	
});
