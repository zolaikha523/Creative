
/*
*change bakground of navbar on scrolling fanction
*/
$(document).ready(function(){
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if(scroll>50){
        $("#nav").css("background-color","white");
        $(".nav-link").css("color","#000");
      }
      else{
        $("#nav").css("background-color","transparent");
        $(".nav-link").css("color","#fff");
      }
    });
  });

