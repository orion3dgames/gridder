/* SUPERBOX */
;(function($) {
		
	$.fn.Gridder = function(options) {
		
		var gridder      = $('<div class="gridder-show"></div>');
		var gridderimg   = $('<img src="" class="gridder-current-img">');
		var gridderclose = $('<div class="gridder-close"></div>');
		var gridderprev = $('<div class="gridder-prev"></div>');
		var griddernext = $('<div class="gridder-next"></div>');
		
		gridder.append(gridderclose,gridderprev,griddernext);
		
		return this.each(function() {
			
			
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
					
					gridder.insertAfter(this).css('display', 'block');
					$('.gridder-show').append("<div class=content>"+currentcontent+"</div>");
					
					if(!$(this).hasClass('imactive')){ 
					$('.imactive').removeClass('imactive');
					$(this).addClass("imactive");
					}
				}
				
				$('html, body').animate({
					scrollTop: $(this).position().top
				}, 'medium');
			
			});
						
			$('.gridder').on('click', '.gridder-close', function() {
				$('.imactive').removeClass('imactive');
				$('.gridder-show .content').remove();
				$('.gridder-show .slider').remove();	
				$('.gridder-show').remove();	
				
			});
			
			$('.gridder').on('click', '.gridder-next', function() {				
				$(this).parent().next().trigger('click');
			});
			
			$('.gridder').on('click', '.gridder-prev', function() {				
				$(this).parent().prev().prev().trigger('click');
			});
			
		});
	};
})(jQuery);