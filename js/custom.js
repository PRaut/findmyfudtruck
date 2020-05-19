$(document).ready(function(){
 // https://twitter.com/uixmat

function scrollNav() {
  $('.navigation li a').click(function(){
    $('html, body').stop().animate({
      scrollTop: $($(this).attr('href')).offset().top - 150
    }, 300);
    return false;
  });
}
scrollNav();
  $(window).scroll(function() {
    if ($(this).scrollTop() >0){  
        $('header').addClass("sticky");
      }
      else{
        $('header').removeClass("sticky");
      }
    });
   $.fn.delay = function(time, callback){
      jQuery.fx.step.delay = function(){};
      return this.animate({delay:1}, time, callback);
    }
     
    $("#loader").delay(2500).fadeOut("slow");
});

