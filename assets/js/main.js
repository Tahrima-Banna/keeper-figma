$(document).ready(function(){
    var header = $('.header');
    var headerOffset = header.offset().top; 

    function checkSticky() {
      
      if ($(window).width() >= 1000) {
        if ($(window).scrollTop() > headerOffset) {
          header.addClass('sticky');
        } else {
          header.removeClass('sticky');
        }
      } else {
        header.removeClass('sticky');
      }
    }


    $(window).on('scroll resize', function(){
      checkSticky();
    });

    
    checkSticky();
  });

  $(window).on("load", function(){
    $("#preloader").fadeOut("slow");
});
