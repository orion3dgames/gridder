Gridder V1
=======

Version : 1.3

A jquery plugin imitating the Google Images page behaviour.  

I'm creating this jQuery plugin as I was unable to find a similar one on internet. 

Please note that i'm very new to Jquery, so you may stumble on weird errors. But i'm more than willing to help if this occurs.

Live demo GRIDDER v1.3 : http://www.oriongunning.com/demo/gridder/demo.html

=======

## NEW Live demo with GRIDDER v2 

Live demo GRIDDER v2 : http://www.oriongunning.com/demo/gridder/demo.html
- Github link for V2 : https://github.com/oriongunning/gridder-ajax
 
=======

### FEATURES
- Multiple instances
- Really easy to use and customize
- Expanding preview with details
- Smooth Scrolling
- Callbacks (so you can launch other plugins)

### Coming soon ...
- A new theme!

## Get Started

### Include
```html
<link href="css/gridder.css" rel="stylesheet">
<script src="js/gridder.js"></script>
```

### The Markup
```html
<div class="gridder">
	
	<!-- The bloc -->
  	 <div class="gridder-list">
		<div class="gridder-thumb">
		    <img src="http://placehold.it/600x400" data-bigimage="http://placehold.it/600x400" />
		    <span class="overlay">Title 2</span>
		</div>
		<div class="gridder-content">
		   <!-- Any Content you want to show in the expanding panel -->
		</div>
	  </div>
	
</div>
```

### Fire it up
```javascript
<script>
$(function() {

	// Call Gridder
	$('.gridder').Gridder({
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
    });

});
</script>
```

<a rel="license" href="http://creativecommons.org/licenses/by/3.0/"><img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by/3.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0 Unported License</a>.


