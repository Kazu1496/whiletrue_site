$(function(){
  $(window).on('load', function(){
    $('#loading_container > p').fadeOut(2000, function(){
      $('#loading_container > em').fadeIn(2000, function(){
        setTimeout(function(){
          $('#loading_container').fadeOut(1000);
        }, 1000);
      });
    });
  });

  $(window).scroll(function(){
    var window_height = $(window).height();
    if($(window).scrollTop() > window_height - 100){
      $('header').addClass("moved");
    } else {
      $('header').removeClass("moved");
    };
  });
});
