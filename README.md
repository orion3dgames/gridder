Gridder
=======

Version : 1.1

A jquery plugin imitating the Google Images page behaviour.  

I'm creating this jQuery plugin as I was unable to find a similar one on internet. 

Please note that i'm very new to Jquery, so you may stumble on weird errors. But i'm more than willing to help if this occurs.

Live demo : http://www.oriongunning.com/demo/gridder/demo.html

=======

AJAX Version : https://github.com/oriongunning/gridder-ajax

### Coming soon ...
* Multiple instances on the same page

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
	$('.gridder').Gridder();

});
</script>
```

<a rel="license" href="http://creativecommons.org/licenses/by/3.0/"><img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by/3.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0 Unported License</a>.

[![githalytics.com alpha](https://cruel-carlota.pagodabox.com/e1b01c4e1624d83a7dc71aecd50575dc "githalytics.com")](http://githalytics.com/oriongunning/gridder)

