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
  autoplay:true,
  autoplaySpeed:800,
  infinite: false,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,

});



$('.humburger-menu').click( function(){
  $('.navbar').toggleClass('active');
  $(this).toggleClass('active');
});