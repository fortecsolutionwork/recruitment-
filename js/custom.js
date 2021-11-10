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
  dots: false,
  arrows:false,
  fade: true,
  autoplay:true,
  autoplaySpeed:500,
  cssEase: 'linear',
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,

});



$('.humburger-menu').click( function(){
  $('.navbar').toggleClass('active');
  $(this).toggleClass('active');
});