/*!
 * GRIDDER (http://www.oriongunning.com/)
 * Version 1.1
 * This work is licensed under a Creative Commons Attribution 3.0 Unported License. 
 */

;(function($) {

    $.fn.gridderExpander = function(options) {

        var animationSpeed = 600;
        var animationEasing = "linear";
        var visible = false;

        return this.each(function() {
            
            var mybloc;
            var gridder = $('<div class="gridder-show gridder-show-'+id+'"></div>');
            
            $('.gridder-list').click(function(e) {
                e.preventDefault();
                
                /* REMOVES PREVIOUS BLOC */
                $('.gridder-show').remove();

                /* ENSURES THE CORRECT BLOC IS ACTIVE */
                if (!$(this).hasClass('imactive')) {
                    $('.imactive').removeClass('imactive');
                    $(this).addClass("imactive");
                }
                
                /* ADD LOADING BLOC */
                mybloc = gridder.insertAfter(this);
                
                /* EXPANDED OUTPUT */
                var currentcontent = $(this).find('.gridder-content').html();
                var currentimage = $(this).find('.gridder-thumb').html();
                var htmlcontent = "<div class=\"padding\">";
                    htmlcontent += "<a class=gridder-close></a>";
                    htmlcontent += "<a class=\"gridder-nav prev\"></a>";
                    htmlcontent += "<a class=\"gridder-nav next\"></a>";
                    htmlcontent += "<div class=\"image\">"+ currentimage+"</div>";
                    htmlcontent += "<div class=\"content\">"+ currentcontent+"</div>";
                htmlcontent += "</div>";
                
                mybloc.html(htmlcontent);

                if (!visible) {
                    mybloc.find('.padding').slideDown(animationSpeed, animationEasing, function() {
                        visible = true;
                    });
                } else {
                    mybloc.find('.padding').fadeIn(animationSpeed, animationEasing, function() {
                        visible = true;
                    });
                }
                
                /* SCROLLS TO CORRECT BLOC */
                $('html, body').animate({
                    scrollTop: $(this).position().top
                }, 0);
                
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
            $('.gridder').on('click', '.gridder-close', function() {
                visible = false;
                $('.imactive').removeClass('imactive');
                $('.gridder-show').remove();
            });

        });
    };
})(jQuery);
