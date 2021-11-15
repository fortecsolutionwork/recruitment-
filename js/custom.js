
// prelaoder
$(window).on('load', function () { // makes sure the whole site is loaded 
  $('#status').fadeOut(); // will first fade out the loading animation 
  $('.preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
  $('body').delay(350).css({ 'overflow': 'visible' });
})


// header

$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
      $("header").addClass("fixed");
    } else {
      $("header").removeClass("fixed");
    }
  });
});

$(".testimonials-slider").slick({
  dots: true,
  arrows:false,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,

});

// banner-slider

$(".banner-slider").slick({
  dots: true,
  arrows:false,
  autoplay:true,
  autoplaySpeed:800,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,

});



$('.humburger-menu').click( function(){
  $('.navbar').toggleClass('active');
  $(this).toggleClass('active');
});