/*!
 * GRIDDER V1 (http://www.oriongunning.com/)
 * Version 1.3
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

        return this.each(function() {
            
            var mybloc;
            var _this = $(this);
            var visible = false;
            
            /* START CALLBACK */
            opts.onStart(_this);
            
            // Close Function
            function closeExpander(base, opts) {
                
                // SCROLL TO CORRECT POSITION FIRST
                $('html, body').animate({
                    scrollTop: base.find('.selectedItem').offset().top - opts.scrollOffset
                }, {
                    duration: 200,
                    easing: opts.animationEasing
                });

                // REMOVES GRIDDER EXPAND AREA
                visible = false;
                base.find('.selectedItem').removeClass('selectedItem');
                
                base.find('.padding').fadeOut(100, opts.animationEasing, function() {
                    base.find('.gridder-show').slideUp(opts.animationSpeed, opts.animationEasing, function() {
                        base.find('.gridder-show').remove();
                        opts.onClosed(base);
                    });
                });
            }
            
            /* CLICK EVENT */
            _this.find('.gridder-list').on('click', function(e) {
               
                e.preventDefault();   
                
                var myself = $(this);
                
                /* ENSURES THE CORRECT BLOC IS ACTIVE */
                if (!myself.hasClass('selectedItem')) {
                    _this.find('.selectedItem').removeClass('selectedItem');
                    myself.addClass("selectedItem");
                }else{
                    console.log('Already Opened');
                    // THE SAME IS ALREADY OPEN, LET'S CLOSE IT
                    closeExpander(_this, opts);
                    return;
                }
                
                /* REMOVES PREVIOUS BLOC */
                _this.find('.gridder-show').remove(); 
 
                /* SCROLL TO CORRECT POSITION FIRST */
                $('html, body').animate({
                    scrollTop: (opts.scrollTo === "panel" ? myself.offset().top + myself.height() - opts.scrollOffset : myself.offset().top - opts.scrollOffset )
                }, {
                    duration: opts.animationSpeed,
                    easing: opts.animationEasing
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
                
                // IF EXPANDER IS ALREADY EXPANDED 
                if (!visible) {
                    mybloc.find('.padding').slideDown(opts.animationSpeed, opts.animationEasing, function() {
                        visible = true;
                        
                        mybloc.css("height", mybloc.height());
                        
                        /* AFTER EXPAND CALLBACK */
                        opts.onExpanded(_this);
                    });
                } else {
                    mybloc.find('.padding').fadeIn(opts.animationSpeed, opts.animationEasing, function() {
                        visible = true;
                        
                        mybloc.css("height", mybloc.height());
                        
                        /* CHANGED CALLBACK */
                        opts.onChanged(_this);
                    });
                }            
            });
            
            /* NEXT BUTTON */
            _this.on('click', '.gridder-nav.next', function() {
                $(this).parents('.gridder-show').next().trigger('click');
            });

            /* PREVIOUS BUTTON */
            _this.on('click', '.gridder-nav.prev', function() {
                $(this).parents('.gridder-show').prev().prev().trigger('click');
            });
            
            /* CLOSE BUTTON */
            _this.on('click', '.gridder-close', function() {
                closeExpander(_this, opts);
            });

        });
    };
    
    // Default Options
    $.fn.gridderExpander.defaults = {
        scrollOffset: 30,
        scrollTo: 'panel', // panel or listitem
        animationSpeed: 400,
        animationEasing: "easeInOutExpo",
        onStart: function(base){
            console.log('Gridder Inititialized');
        },
        onExpanded: function(base){
            console.log('Gridder Expanded');
        },
        onChanged: function(base){
            console.log('Gridder Changed');
        },
        onClosed: function(base){
            console.log('Gridder Closed');
        }
    };
    
})(jQuery);
