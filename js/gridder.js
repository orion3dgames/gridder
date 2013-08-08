;(function($) {
		
	$.fn.Gridder = function(options) {
		
		var gridder      = $('<div class="gridder-show"></div>');
		var gridderclose = $('<div class="gridder-close"></div>');
		var gridderprev = $('<div class="gridder-prev"></div>');
		var griddernext = $('<div class="gridder-next"></div>');
		
		gridder.append(gridderclose,gridderprev,griddernext);
		
		return this.each(function() {

			$('.gridder-list').click(function(e) {
				e.preventDefault();
				
				$('.gridder-show .content').remove();
				$('.gridder-show .image').remove();
				
				var currentcontent = $(this).find('.gridder-content').html();
				var currentimage = $(this).find('.gridder-image').html();
				
				if ($(this).next().hasClass('gridder-show')) {
					gridder.toggle();
					
					if($(this).hasClass('imactive')){ 
						$(this).removeClass('imactive');
					}else{$(this).addClass('imactive');}
					
					
					$('.gridder-show').append("<div class=image>"+currentimage+"</div>");
					$('.gridder-show').append("<div class=content>"+currentcontent+"</div>");
					
				} else {
					
					/* Adds the Expander bloc*/
					mybloc = gridder.insertAfter(this).css('display', 'block');
					
					$('.gridder-show').append("<div class=image>"+currentimage+"</div>");
					$('.gridder-show').append("<div class=content>"+currentcontent+"</div>");
					
					/* Make sure the correct bloc is active*/
					if(!$(this).hasClass('imactive')){ 
					$('.imactive').removeClass('imactive');
					$(this).addClass("imactive");
					}
					
					/* ANIMATION */
					
					$('.image').animate({ opacity: 0}, 0);
					 
					 $('.gridder-show').animate({ 
							height: 'auto' 
							},
							{
							easing: 'swing',
							duration: 300,
							complete: function(){
					 
									$('.image').animate({ 
										opacity: 1 
										},
										{
										easing: 'swing',
										duration: 500,
										complete: function(){

									     }
									 });
					     }
					});
					
				}
				
				/* Scrolls to the current row */
				$('html, body').animate({
					scrollTop: $(this).position().top
				}, 0);
			
			});
			
			/* Close */
			$('.gridder').on('click', '.gridder-close', function() {
				
				
				$('.imactive').removeClass('imactive');	
				$('.gridder-show .content').remove();
				$('.gridder-show .image').remove();
				$('.gridder-show').remove();
	
				
			});
			
			/* Next */
			$('.gridder').on('click', '.gridder-next', function() {				
				$(this).parent().next().trigger('click');
			});
			
			/* Previous */
			$('.gridder').on('click', '.gridder-prev', function() {				
				$(this).parent().prev().prev().trigger('click');
			});
			
		});
	};
})(jQuery);