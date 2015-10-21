<!DOCTYPE html>
<html>
    <head>
        <title>Gridder.js - Demo</title>

        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link href="http://fonts.googleapis.com/css?family=Armata" rel="stylesheet" type="text/css">
        <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css" rel="stylesheet">
        <link href="../dist/css/jquery.gridder.min.css" rel="stylesheet">
        <link href="css/demo.css" rel="stylesheet">
    </head>
    <body>
        
        <!-- FIRST GRIDDER -->
        <div class="container">
            <h1>First example</h1>
            <ul class="gridder gridder-first">
                <?php for ($i = 0; $i < 14; $i++): ?>
                    <?php $random = rand(0, 3); ?>
                    <li class="gridder-list" data-griddercontent="#first-gridder-content-<?php echo $i; ?>">
                        <img src="http://placehold.it/200x200&text=Item <?php echo $i; ?>" class="img-responsive" />
                    <?php endfor; ?>
            </ul>
            <?php for ($i = 0; $i < 14; $i++): ?>
                <div id="first-gridder-content-<?php echo $i; ?>" class="gridder-content">
                    <div class="row">
                        <div class="col-sm-6">

                            <div id="carousel-<?php echo $i; ?>" class="carousel slide">
                                <ol class="carousel-indicators">
                                    <li data-target="#carousel-<?php echo $i; ?>" data-slide-to="0" class="active"></li>
                                    <li data-target="#carousel-<?php echo $i; ?>" data-slide-to="1"></li>
                                </ol>
                                <div class="carousel-inner" role="listbox">
                                    <div class="item active">
                                        <img src="http://placehold.it/600x600&text=carousel-<?php echo $i; ?> | IMAGE 1" class="img-responsive" />
                                        <div class="carousel-caption">
                                            Item 1
                                        </div>
                                    </div>
                                    <div class="item">
                                        <img src="http://placehold.it/600x600&text=carousel-<?php echo $i; ?> | IMAGE 2" class="img-responsive" />
                                        <div class="carousel-caption">
                                            Item 1
                                        </div>
                                    </div>
                                </div>
                                <a class="left carousel-control" href="#carousel-<?php echo $i; ?>" role="button" data-slide="prev">
                                    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="right carousel-control" href="#carousel-<?php echo $i; ?>" role="button" data-slide="next">
                                    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>

                        </div>
                        <div class="col-sm-6">
                            <h2>Item <?php echo $i; ?></h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ex augue, hendrerit sed gravida ut, mattis vel tortor. Duis hendrerit sagittis bibendum. Fusce massa risus, hendrerit et est vitae, convallis accumsan ipsum. Integer vitae erat mattis, ornare tortor nec, luctus turpis. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse finibus fermentum consectetur. Nulla vestibulum, diam ut finibus dictum, justo felis blandit mi, sed rhoncus tortor augue vitae orci. Fusce semper eu ante ut faucibus.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ex augue, hendrerit sed gravida ut, mattis vel tortor. Duis hendrerit sagittis bibendum. Fusce massa risus, hendrerit et est vitae, convallis accumsan ipsum. Integer vitae erat mattis, ornare tortor nec, luctus turpis. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse finibus fermentum consectetur. Nulla vestibulum, diam ut finibus dictum, justo felis blandit mi, sed rhoncus tortor augue vitae orci. Fusce semper eu ante ut faucibus.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ex augue, hendrerit sed gravida ut, mattis vel tortor. Duis hendrerit sagittis bibendum. Fusce massa risus, hendrerit et est vitae, convallis accumsan ipsum. Integer vitae erat mattis, ornare tortor nec, luctus turpis. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse finibus fermentum consectetur. Nulla vestibulum, diam ut finibus dictum, justo felis blandit mi, sed rhoncus tortor augue vitae orci. Fusce semper eu ante ut faucibus.</p>
                        </div>
                    </div>
                </div>
            <?php endfor; ?>
        </div>
            
        <!-- SECOND GRIDDER -->
        <div class="container">
            <h1>Second example</h1>
        
            <ul class="gridder gridder-second">
                <?php for ($i = 0; $i < 14; $i++): ?>
                    <?php $random = rand(0, 3); ?>
                    <li class="gridder-list" data-griddercontent="<?php echo ($random === 0 ? 'content.html' : '#second-gridder-content-' . $i); ?>">
                        <img src="http://placehold.it/200x200&text=Item <?php echo $i; ?>" class="img-responsive" />
                    <?php endfor; ?>
            </ul>

            <?php for ($i = 0; $i < 14; $i++): ?>
                <div id="second-gridder-content-<?php echo $i; ?>" class="gridder-content">
                    <div class="row">
                        <div class="col-sm-6">

                            <div id="carousel-<?php echo $i; ?>" class="carousel slide">
                                <ol class="carousel-indicators">
                                    <li data-target="#carousel-<?php echo $i; ?>" data-slide-to="0" class="active"></li>
                                    <li data-target="#carousel-<?php echo $i; ?>" data-slide-to="1"></li>
                                </ol>
                                <div class="carousel-inner" role="listbox">
                                    <div class="item active">
                                        <img src="http://placehold.it/600x600&text=carousel-<?php echo $i; ?> | IMAGE 1" class="img-responsive" />
                                        <div class="carousel-caption">
                                            Item 1
                                        </div>
                                    </div>
                                    <div class="item">
                                        <img src="http://placehold.it/600x600&text=carousel-<?php echo $i; ?> | IMAGE 2" class="img-responsive" />
                                        <div class="carousel-caption">
                                            Item 1
                                        </div>
                                    </div>
                                </div>
                                <a class="left carousel-control" href="#carousel-<?php echo $i; ?>" role="button" data-slide="prev">
                                    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="right carousel-control" href="#carousel-<?php echo $i; ?>" role="button" data-slide="next">
                                    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>

                        </div>
                        <div class="col-sm-6">
                            <h2>Item <?php echo $i; ?></h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ex augue, hendrerit sed gravida ut, mattis vel tortor. Duis hendrerit sagittis bibendum. Fusce massa risus, hendrerit et est vitae, convallis accumsan ipsum. Integer vitae erat mattis, ornare tortor nec, luctus turpis. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse finibus fermentum consectetur. Nulla vestibulum, diam ut finibus dictum, justo felis blandit mi, sed rhoncus tortor augue vitae orci. Fusce semper eu ante ut faucibus.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ex augue, hendrerit sed gravida ut, mattis vel tortor. Duis hendrerit sagittis bibendum. Fusce massa risus, hendrerit et est vitae, convallis accumsan ipsum. Integer vitae erat mattis, ornare tortor nec, luctus turpis. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse finibus fermentum consectetur. Nulla vestibulum, diam ut finibus dictum, justo felis blandit mi, sed rhoncus tortor augue vitae orci. Fusce semper eu ante ut faucibus.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ex augue, hendrerit sed gravida ut, mattis vel tortor. Duis hendrerit sagittis bibendum. Fusce massa risus, hendrerit et est vitae, convallis accumsan ipsum. Integer vitae erat mattis, ornare tortor nec, luctus turpis. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse finibus fermentum consectetur. Nulla vestibulum, diam ut finibus dictum, justo felis blandit mi, sed rhoncus tortor augue vitae orci. Fusce semper eu ante ut faucibus.</p>
                        </div>
                    </div>
                </div>
            <?php endfor; ?>
        </div>

        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
        <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
        <script src="../src/jquery.gridder.js"></script>
        <script>
            jQuery(document).ready(function ($) {

                // Call First Gridder
                $(".gridder-first").gridderExpander({
                    scroll: true,
                    scrollOffset: 30,
                    scrollTo: "panel", // panel or listitem
                    animationSpeed: 400,
                    animationEasing: "easeInOutExpo",
                    showNav: true,
                    nextText: "Next",
                    prevText: "Previous",
                    closeText: "Close",
                    onContent: function () {
                        $(".carousel").carousel();
                    }
                });

                // Call Second Gridder
                $(".gridder-second").gridderExpander({
                    scroll: true,
                    scrollOffset: 30,
                    scrollTo: "panel", // panel or listitem
                    animationSpeed: 400,
                    animationEasing: "easeInOutExpo",
                    showNav: true,
                    nextText: "Next",
                    prevText: "Previous",
                    closeText: "Close",
                    onContent: function () {
                        $(".carousel").carousel();
                    }
                });

            });
        </script>
    </body>
</html>
