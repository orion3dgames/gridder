/*!
 * GRIDDER V1 (http://www.oriongunning.com/)
 * Version 1.2
 * This work is licensed under a Creative Commons Attribution 3.0 Unported License. 
 */

;(function($) {
    
    /* CUSTOM EASING */
    $.fn.extend($.easing,{
        def:"easeInOutExpo", easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a}
    });

    $.fn.gridderExpander = function(options) {
        
        /* GET DEFAULT OPTIONS OR USE THE ONE PASSED IN THE FUNCTION  */
        var opts = $.extend( {}, $.fn.gridderExpander.defaults, options );      
        
        /* SET LOCAL VARS */
        var animationSpeed = opts.animationSpeed;
        var animationEasing = opts.animationEasing;
        var scrollTo = opts.scrollTo;
        var scrollOffset = opts.scrollOffset;

        /* OTHER VARS */
        var visible = false;
        
        /* START CALLBACK */
        opts.onStart();
        
        return this.each(function() {
            
            var mybloc;

            $('.gridder-list').click(function(e) {
               
                e.preventDefault();   
                
                var myself = $(this);
                
                /* ENSURES THE CORRECT BLOC IS ACTIVE */
                if (!myself.hasClass('selectedItem')) {
                    $('.selectedItem').removeClass('selectedItem');
                    myself.addClass("selectedItem");
                }
                
                /* REMOVES PREVIOUS BLOC */
                $('.gridder-show').remove(); 
 
                /* SCROLL TO CORRECT POSITION FIRST */
                $('html, body').animate({
                    scrollTop: (scrollTo === "panel" ? myself.offset().top + myself.height() - scrollOffset : myself.offset().top - scrollOffset )
                }, {
                    duration: animationSpeed,
                    easing: animationEasing
                });                                
                
                /* ADD LOADING BLOC */
                var $htmlcontent = $('<div class="gridder-show loading"></div>');
                mybloc = $htmlcontent.insertAfter(myself);
                
                /* EXPANDED OUTPUT */
                var currentcontent = myself.find('.gridder-content').html();
                var currentimage = myself.find('.gridder-thumb').html();
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
                        
                        opts.onExpanded();
                    });
                } else {
                    mybloc.find('.padding').fadeIn(animationSpeed, animationEasing, function() {
                        visible = true;
                        
                        opts.onChanged();
                    });
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
            $('.gridder').on('click', '.gridder-close', function() {
                visible = false;
                $('.selectedItem').removeClass('selectedItem');
                $('.gridder-show').remove();
                
                opts.onClosed();
            });

        });
    };
    
    $.fn.gridderExpander.defaults = {
        scrollOffset: 30,
        scrollTo: 'panel', // panel or listitem
        animationSpeed: 400,
        animationEasing: "easeInOutExpo",
        onStart: function(){
            console.log('Gridder Inititialized');
        },
        onExpanded: function(){
            console.log('Gridder Expanded');
        },
        onChanged: function(){
            console.log('Gridder Changed');
        },
        onClosed: function(){
            console.log('Gridder Closed');
        }
    };
    
})(jQuery);
