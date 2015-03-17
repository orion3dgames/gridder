# jQuery GRIDDER

### A jQuery plugin that displays a thumbnail grid expanding preview similar to the effect seen on Google Images.

We have all searched images on Google, so you probably noticed the interesting expanding preview when you click on a thumbnail. It’s a very nice effect and practical, allowing you quickly see more details without having to reload a new page. This plugin allows you to recreate a similar effect on a thumbnail grid. The idea is to open a preview when clicking on a thumbnail and to show a larger image and some other content like a title, a description and a link

Live demo GRIDDER v1.3.0 : http://www.oriongunning.com/demo/gridder

=======

## NEW Live demo with GRIDDER v2 

Live demo GRIDDER v2 : http://www.oriongunning.com/demo/gridder-ajax/demo.php
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

=======

## Usage

1. Include jQuery:

	```html
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
	```

2. Include plugin's code:

	```html
	<script src="dist/jquery.gridder.min.js"></script>
	```

3. HTML

	```html
    
    <!-- Gridder navigation -->
	<ul class="gridder">
        <li data-griddercontent="#content1">
            <img src="http://placehold.it/600x400" />
        </li>
        <li data-griddercontent="#content2">
            <img src="http://placehold.it/600x400" />
        </li>
        <li data-griddercontent="#content3">
            <img src="http://placehold.it/600x400" />
        </li>
    </ul>

    <!-- Gridder content -->
    <div id="content1" class="gridder-content"> Content goes here... </div>
    <div id="content2" class="gridder-content"> Content goes here... </div>
    <div id="content3" class="gridder-content"> Content goes here... </div>
    
	```

3. Call the plugin:

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


