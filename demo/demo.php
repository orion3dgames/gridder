<!DOCTYPE html>
<html lang="en-GB">
	<head>
		<meta charset="UTF-8" />
		<title>Projects</title>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
	</head>
	<body>

		<h1>Demo</h1>
		<hr />

		<!-- Gridder navigation -->
		<ul class="gridder">
			<li class="gridder-list" data-griddercontent="#content1">
				<img src="http://placehold.it/250x250" />
			</li>
			<li class="gridder-list" data-griddercontent="#content2">
				<img src="http://placehold.it/250x250" />
			</li>
			<li class="gridder-list" data-griddercontent="#content3">
				<img src="http://placehold.it/250x250" />
			</li>
		</ul>

		<!-- Gridder content -->
		<div id="content1" class="gridder-content"> Content goes here... </div>
		<div id="content2" class="gridder-content"> Content goes here... </div>
		<div id="content3" class="gridder-content"> Content goes here... </div>

		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
		<script type='text/javascript' src='../dist/js/jquery.gridder.js'></script>
		<script>
            jQuery(document).ready(function ($) {

                // Call Gridder
                $(".gridder").gridderExpander({
                    scrollOffset: 60,
                    scrollTo: "panel", // "panel" or "listitem"
                    animationSpeed: 400,
                    animationEasing: "easeInOutExpo",
                    onStart: function () {
                        console.log("Gridder Inititialized");
                    },
                    onExpanded: function (object) {
                        console.log("Gridder Expanded");
                        $(".carousel").carousel();
                    },
                    onChanged: function (object) {
                        console.log("Gridder Changed");
                    },
                    onClosed: function () {
                        console.log("Gridder Closed");
                    }
                });
            });
        </script>
	</body>
</html>
