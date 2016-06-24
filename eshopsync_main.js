$wk=jQuery.noConflict();
		(function($wk){
			$wk(window).on("load",function(){

				$wk("#videoModal").on("click", function() {
				    $wk("#videoModal iframe").attr("src", $wk("#videoModal iframe").attr("src"));
				});
				
				$wk("label[for='comment']").append("&nbsp;*");
		        var commentform = $wk('#commentform');
		        commentform.prepend('<div id="wdpajax-info" ></div>');
		        var infodiv = $wk('#wdpajax-info');
		        var author = $wk("#author");
		        var email = $wk("#email");
		        var comment = $wk("#comment");
		        commentform.validate({
		            rules: {
		                "email": {
		                    required: true
		                },
		                "author": {
		                    required: true
		                },
		                "comment": {
		                    required: true
		                }
		            },
		            messages: {
		                "email": {
		                    required: "This field is Required"
		                },
		                "author": {
		                    required: "This field is required"
		                },
		                "comment": {
		                    required: "This field is required"
		                }
		            },
		            submitHandler: function(form) {
		                var formdata = commentform.serialize();
		                infodiv.html('<p>Processing...</p>');
		                var formurl = commentform.attr('action');
		                $wk.ajax({
		                    type: 'post',
		                    url: formurl,
		                    data: formdata,
		                    error: function(XMLHttpRequest, textStatus, errorThrown) {
		                        infodiv.html('<p class="text-danger" >You might have left one of the fields blank.</p>');
		                    },
		                    success: function(data, textStatus) {
		                        if (data == "success" || textStatus == "success") {
		                            infodiv.html('<p class="text-success" >Thanks for your Reply. We appreciate your response.</p>');
		                        } else {
		                            infodiv.html('<p class="text-danger" >Error in processing your form.</p>');
		                        }
		                        commentform.find('textarea[name=comment]').val('');
		                    }
		                });
		            }
		        });	


				// Add box shadow to header
				if($wk(".banner").length){
					$wk(window).on("scroll",function(){
						if($wk("body,html").scrollTop()>$wk(".banner").height()){
							$wk(".header").addClass("wk-box-shadow");
						}
					});
				}		

				$wk('.wk-toggle-menu').on("click",function(){
					$wk(this).children(".control").toggleClass("icon-toggle");
					$wk("body").toggleClass("overflow-hidden");
					$wk(".wk-navigation").toggleClass("open");
				});
				$wk(".ico-play").on("click",function(evt){ 
					player = new YT.Player('player', {
				            width : '320',
				            height : '180',
				            videoId : 'Uu-CvL4SctA',
				            playerVars: { 'autoplay': 1 },
				            events : {
				                'onReady' : onPlayerReady,
				                'onStateChange' : onPlayerStateChange
				            }
				    }); 
					evt.preventDefault();
				});	

					var tag = document.createElement('script');
				    tag.src = "https://www.youtube.com/iframe_api";
				    var firstScriptTag = document.getElementsByTagName('script')[0];
				    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

				    var player;
				    function onPlayerReady(event) {
				        //event.target.playVideo();
				    }
				    function onPlayerStateChange(event) {
				        if(event.data == YT.PlayerState.ENDED) {
				            player.destroy(); 
				        }
  					  }
			
			$wk("#typed").typed({
			            strings: ["CUSTOMER", "PRODUCT", "CATEGORY","ORDER"],
			            typeSpeed: 200,
			            backDelay: 1000,
			            loop: true,
			            // defaults to false for infinite loop
			     
			            callback: function(){ foo(); },
			            resetCallback: function() { newTyped(); }
			        });

			        $wk(".reset").click(function(){
			            $wk("#typed").typed('reset');
			        });

			        function newTyped(){ /* A new typed object */ }

    				function foo(){ console.log("Callback"); }

			    });


})($wk);