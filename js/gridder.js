;(function($) {
		
	$.fn.Gridder = function(options) {
		
		var gridder      = $('<div class="gridder-show"></div>');
		var gridderimg   = $('<img src="" class="gridder-current-img">');
		var gridderclose = $('<div class="gridder-close"></div>');
		var gridderprev = $('<div class="gridder-prev"></div>');
		var griddernext = $('<div class="gridder-next"></div>');
		
		var columns = 4;
		var gutter = 1;
		
		gridder.append(gridderclose,gridderprev,griddernext);
		
		return this.each(function() {
	
	
			$('.gridder-list').each(function(key, value){
				
				/* Initialize a few variables */
				column_width = 100 / columns - (gutter) + (gutter / columns) ;
				result = column_width.toFixed(3);
				
				$(this).css('width', result+"%");
				
				if((key+1)%columns){
					$(this).css('margin-right', gutter+"%");
				}
			});
			
			
			$('.gridder-list').click(function(e) {
				e.preventDefault();
				
				$('.gridder-show .content').remove();
				$('.gridder-show .slider').remove();
				
				var currentcontent = $(this).find('.gridder-content').html();
				
				if ($(this).next().hasClass('gridder-show')) {
					gridder.toggle();
					
					if($(this).hasClass('imactive')){ 
						$(this).removeClass('imactive');
					}else{$(this).addClass('imactive');}
					
					$('.gridder-show').append("<div class=content>"+currentcontent+"</div>");
					
				} else {
					/* Adds the Expander bloc*/
					mybloc = gridder.insertAfter(this).css('display', 'block');
					
					/* Get the current title */
					
					/* Adds the content */
					$('.gridder-show').append("<div class=content>"+currentcontent+"</div>");
					
					/* Make sure the correct bloc is active*/
					if(!$(this).hasClass('imactive')){ 
					$('.imactive').removeClass('imactive');
					$(this).addClass("imactive");
					}
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
				$('.gridder-show .slider').remove();	
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