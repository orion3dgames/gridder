gridder
=======

Similar to Google Images Expander 

I'm creating this jQuery plugin as i was unable to find a similar one on internet. Please note that i'm very new to Jquery, so 
do not hesitate to correct me if something seems completly wrong. This is mostly for learning purposes.

Live demo : http://www.oriongunning.com/demo/gridder/

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
		<div class="thumb">
			<span class="overlay">Title 1</span>
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

This is based on the Superbox plugin from Todd Motto : http://toddmotto.com/labs/superbox/
