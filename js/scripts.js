
   (function ($) {
    "use strict";
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    450,
                    'linear'
                );
                return false;
            }
        }
    });

    
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
   
    navbarCollapse();
    
    $(window).scroll(navbarCollapse);
	
	

  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  


  $('#design').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

})(jQuery); // End of use strict
$(function(){
	
  //inview 이벤트는 화면이 요소가 출현했을 때 작동
  $(".group").on("inview", function(evt, visible){
    if(visible==true){
      // alert("inview 이벤트 작동완료");
      $(".group").each(function(idx){
        const className = "stack"+(idx+1);
          $(this).addClass(className)
			});

    }
  });
  
  $(window).on("scroll", function(){
    // if($(this).scrollTop() < $("#iwill").offset().top-$(this).height()){
    //   $("#iwill .bar").width(0);
    // }
  });


});
  

