jQuery(document).ready(function($){
    window.onscroll = function(){
      if(window.pageYOffset > 140){
        $('header').addClass("active2");
      }else{
        $('header').removeClass("active2");

      }
    }
  });