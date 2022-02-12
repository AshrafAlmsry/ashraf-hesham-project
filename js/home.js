$(document).ready(function () {

  $(".content1").slideDown();
  $(".content2").slideUp();
  $(".content3").slideUp();

  $(".box1").click(function () {
    $('.content3').slideUp(500);
    $('.content2').slideUp(500);
    $(".content1").slideToggle(1000);
  });
  $(".box2").click(function () {
    $('.content1').slideUp(500);
    $('.content3').slideUp(500);
    $(".content2").slideToggle(1000);
  });
  $(".box3").click(function () {
    $('.content1').slideUp(500);
    $('.content2').slideUp(500);
    $(".content3").slideToggle(1000);
  });
});
