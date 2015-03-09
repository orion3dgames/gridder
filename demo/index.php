<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link href="http://fonts.googleapis.com/css?family=Armata" rel="stylesheet" type="text/css"> 
        <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css" rel="stylesheet">
        <link href="../dist/css/jquery.gridder.min.css" rel="stylesheet">
        <link href="css/demo.css" rel="stylesheet">
    </head>
    <body>
        
        <div class="container">
            <h1>Gridder Demo</h1>
            <p class="headline">Brought to you by <a href="http://www.oriongunning.com">www.oriongunning.com</a></p>
            <br />
                
            <?php
            $key = "3d3a30bd-fb77-47bc-a45f-8ce0476c17bf";
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, 'https://global.api.pvp.net/api/lol/static-data/oce/v1.2/champion?champData=image,lore&api_key='.$key);
            // Set so curl_exec returns the result instead of outputting it.
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
            // Get the response and close the channel.
            $response = curl_exec($ch);
            curl_close($ch);
            $json = json_decode($response, true);
            $i = 100;
            ?>
            
            <ul class="gridder">
                
                <?php foreach($json['data'] as $key => $champion): ?>
                
                    <?php 
                    $i++;
                    $str_replace_strings = array(' ',',',"'",'.');
                    $url_image = str_replace($str_replace_strings,'', $champion['name']);
                    ?>
                    <li class="gridder-list">
                        <div class="gridder-thumb">
                            <div class="image"><img src="http://ddragon.leagueoflegends.com/cdn/img/champion/loading/<?php echo $url_image; ?>_0.jpg" /></div>
                            <span class="title"><?php echo $champion['name']; ?></span>
                            <span class="description"><?php echo $champion['title']; ?></span>
                        </div>
                        <div class="gridder-content">
                            
                            <div class="row">
                                <div class="col-sm-6">       
                                    
                                    <div id="carousel-<?php echo $i; ?>" class="carousel slide" data-ride="carousel">
                                        <!-- Indicators -->
                                        <ol class="carousel-indicators">
                                            <li data-target="#carousel-<?php echo $i; ?>" data-slide-to="0" class="active"></li>
                                            <li data-target="#carousel-<?php echo $i; ?>" data-slide-to="1"></li>
                                        </ol>

                                        <!-- Wrapper for slides -->
                                        <div class="carousel-inner" role="listbox">
                                            <div class="item active">
                                                <img src="http://ddragon.leagueoflegends.com/cdn/img/champion/splash/<?php echo $url_image; ?>_0.jpg">
                                                <div class="carousel-caption">
                                                    Skin 1 of <?php echo $champion['name']; ?>
                                                </div>
                                            </div>
                                            <div class="item">
                                                <img src="http://ddragon.leagueoflegends.com/cdn/img/champion/splash/<?php echo $url_image; ?>_1.jpg">
                                                <div class="carousel-caption">
                                                    Skin 2 of <?php echo $champion['name']; ?>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Controls -->
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
                                    <h2><?php echo $champion['name']; ?></h2>
                                    <h3><?php echo $champion['title']; ?></h3>
                                    <p><?php echo $champion['lore']; ?></p>
                                </div>
                            </div>                           
                            
                        </div>
                        <?php if($key === "Morgana"){ break;} ?>
                <?php endforeach; ?>      
            </ul>
            
        </div>
  
        
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
        <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
        <script src="../dist/js/jquery.gridder.js"></script>
        <script>
            jQuery(document).ready(function($) {
                
                
                
                // Call Gridder
                $(".gridder").gridderExpander({
                    scrollOffset: 60,
                    scrollTo: "panel", // "panel" or "listitem"
                    animationSpeed: 400,
                    animationEasing: "easeInOutExpo",
                    onStart: function(){
                        console.log("Gridder Inititialized");
                    },
                    onExpanded: function(object){
                        
                        console.log("Gridder Expanded");
                        console.log(object);
                        
                        $(".carousel").carousel();
                        
                        $('.gridder-show').on('click', '.carousel-indicators li', function(e) {
                            var $target = $($(this).data('target'));
                            console.log($target);
                            $target.carousel('next');
                        });               
                    },
                    onChanged: function(object){
                        console.log("Gridder Changed"); 
                    },
                    onClosed: function(){
                        console.log("Gridder Closed");
                    }
                });
            });
        </script>
    </body>
</html>
