# jQuery GRIDDER 1.4.2 <a href='https://ko-fi.com/A748382' target='_blank'><img height='32' style='border:0px;height:32px;float: right;' src='https://az743702.vo.msecnd.net/cdn/kofi1.png?v=a' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a> 

<img width="480" height="305" src='http://i.giphy.com/xT8qBaPahUIhtN9HwI.gif' border='0' alt='Gridder Example' />
=======

### A jQuery plugin that displays a thumbnail grid expanding preview similar to the effect seen on Google Images.

We have all searched images on Google, so you probably noticed the interesting expanding preview when you click on a thumbnail. It’s a very nice effect and practical, allowing you quickly see more details without having to reload a new page. This plugin allows you to recreate a similar effect on a thumbnail grid. The idea is to open a preview when clicking on a thumbnail and to show a larger image and some other content like a title, a description and a link

- Live BASIC demo GRIDDER v1.4.0 : http://www.oriongunning.com/demo/gridder/basic.php
- Live ADVANCED demo GRIDDER v1.4.0 : http://www.oriongunning.com/demo/gridder

=======

## NEW Live demo with GRIDDER v2 

Live demo GRIDDER v2 : http://www.oriongunning.com/demo/gridder-ajax/demo.php
- Github link for V2 : https://github.com/oriongunning/gridder-ajax
 
=======

### NEW
*24 June 2015
You can now load content via ajax. Simply replace the #ID with an URL.

=======

### FEATURES
- Multiple instances
- Really easy to use and customize
- Expanding preview with details
- Smooth Scrolling
- Callbacks (so you can launch other plugins)

### Coming soon ...
- Hot Linking

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

         <!-- You can load specify which content is loaded by specifying the #ID of the div where the content is  -->
        <li class="gridder-list" data-griddercontent="#content1">
            <img src="http://placehold.it/600x400" />
        </li>
        <li class="gridder-list" data-griddercontent="#content2">
            <img src="http://placehold.it/600x400" />
        </li>
        <li class="gridder-list" data-griddercontent="#content3">
            <img src="http://placehold.it/600x400" />
        </li>

        <!-- You can also load html/ajax pages by replacing the #ID with a URL -->
        <li class="gridder-list" data-griddercontent="/content.html">
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
        $('.gridder').gridderExpander({
            scroll: true,
            scrollOffset: 30,
            scrollTo: "panel",                  // panel or listitem
            animationSpeed: 400,
            animationEasing: "easeInOutExpo",
            showNav: true,                      // Show Navigation
            nextText: "Next",                   // Next button text
            prevText: "Previous",               // Previous button text
            closeText: "Close",                 // Close button text
            onStart: function(){
                //Gridder Inititialized
            },
            onContent: function(){
                //Gridder Content Loaded
            },
            onClosed: function(){
                //Gridder Closed
            }
        });

    });
    </script>
    ```

<a rel="license" href="http://creativecommons.org/licenses/by/3.0/"><img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by/3.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0 Unported License</a>.


