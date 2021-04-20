$(function(){
  'use strict'

  //Sticky Menu js
  $(window).scroll(function(){
    var scrolling = $(this).scrollTop();
      
     if(scrolling > 100){
         back2top.fadeIn(500);
     }
     else{
         back2top.fadeOut(500);
     }
   });

   //Back to top js
   var back2top = $(".back_to_top");
   var html_body = $('html,body');
   back2top.click(function(){
     html_body.animate({scrollTop:0},1000);
   });

  // Banner Slider
  $('.banner-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    arrows: true,
    prevArrow: '.left',
    nextArrow: '.right',
    autoplaySpeed: 5000,
    infinite: true,
    speed: 1000,
    fade: true,
    cssEase: 'linear',
   });

   //Logo Slider
  $('.logo-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    infinite: true,
    prevArrow: '.left2',
    nextArrow: '.right2',
    speed:1000,
    autoplaySpeed: 2500,
    dots: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          centerMode:false,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 321,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
      ]
  });


})