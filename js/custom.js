$(document).ready(function(){
  new WOW().init();
$(window).scroll(function() { // check if scroll event happened
        if ($(document).scrollTop() > 100) { // check if user scrolled more than 50 from top of the browser window
          $(".navbar-fixed-top").css("background-color", "#fff"); 
           
           
        }
        else {
          $(".navbar-fixed-top").css("background-color", "transparent"); 
        }
      });
    
});
 