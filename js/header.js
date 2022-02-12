$('.mega-menu').css('display' , 'none')
$(document).ready(function () {
  $(window).scroll(function () {
    if (window.scrollY > 100) {
      $('.header').addClass("scroll");
    } else {
      $(".header").removeClass("scroll");
    }
  });
  $('.menu').click(function () { 
    $('.mega-menu').slideToggle(1000);
  });
});
