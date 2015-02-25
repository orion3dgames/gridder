/*!
 * GRIDDER V1 (http://www.oriongunning.com/)
 * Version 1.2
 * This work is licensed under a Creative Commons Attribution 3.0 Unported License. 
 */

jQuery.extend(jQuery.easing,{
    def:"easeInOutExpo",
    easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a}
});

/* SCROLL TO 
 * Copyright (c) 2007-2012 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * @author Ariel Flesler
 * @version 1.4.3.1
*/
;(function($){var h=$.scrollTo=function(a,b,c){$(window).scrollTo(a,b,c)};h.defaults={axis:'xy',duration:parseFloat($.fn.jquery)>=1.3?0:1,limit:true};h.window=function(a){return $(window)._scrollable()};$.fn._scrollable=function(){return this.map(function(){var a=this,isWin=!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!isWin)return a;var b=(a.contentWindow||a).document||a.ownerDocument||a;return/webkit/i.test(navigator.userAgent)||b.compatMode=='BackCompat'?b.body:b.documentElement})};$.fn.scrollTo=function(e,f,g){if(typeof f=='object'){g=f;f=0}if(typeof g=='function')g={onAfter:g};if(e=='max')e=9e9;g=$.extend({},h.defaults,g);f=f||g.duration;g.queue=g.queue&&g.axis.length>1;if(g.queue)f/=2;g.offset=both(g.offset);g.over=both(g.over);return this._scrollable().each(function(){if(e==null)return;var d=this,$elem=$(d),targ=e,toff,attr={},win=$elem.is('html,body');switch(typeof targ){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=$(targ,this);if(!targ.length)return;case'object':if(targ.is||targ.style)toff=(targ=$(targ)).offset()}$.each(g.axis.split(''),function(i,a){var b=a=='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,old=d[key],max=h.max(d,a);if(toff){attr[key]=toff[pos]+(win?0:old-$elem.offset()[pos]);if(g.margin){attr[key]-=parseInt(targ.css('margin'+b))||0;attr[key]-=parseInt(targ.css('border'+b+'Width'))||0}attr[key]+=g.offset[pos]||0;if(g.over[pos])attr[key]+=targ[a=='x'?'width':'height']()*g.over[pos]}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)=='%'?parseFloat(c)/100*max:c}if(g.limit&&/^\d+$/.test(attr[key]))attr[key]=attr[key]<=0?0:Math.min(attr[key],max);if(!i&&g.queue){if(old!=attr[key])animate(g.onAfterFirst);delete attr[key]}});animate(g.onAfter);function animate(a){$elem.animate(attr,f,g.easing,a&&function(){a.call(this,e,g)})}}).end()};h.max=function(a,b){var c=b=='x'?'Width':'Height',scroll='scroll'+c;if(!$(a).is('html,body'))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,html=a.ownerDocument.documentElement,body=a.ownerDocument.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);

;(function($) {
    
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
                    });
                } else {
                    mybloc.find('.padding').fadeIn(animationSpeed, animationEasing, function() {
                        visible = true;
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
            });

        });
    };
    
    $.fn.gridderExpander.defaults = {
        scrollOffset: 30,
        scrollTo: 'panel', // panel or listitem
        animationSpeed: 400,
        animationEasing: "easeInOutExpo"
    };
    
})(jQuery);
