$(document).ready(function(){

 $('.nav-burger').on('click', function(e){
    e.preventDefault();
    $('.header-nav').slideToggle(400, 'swing');
    // $('.main-nav__burger').toggleClass('main-nav__close');
    $('.nav-burger').toggleClass('nav-close');
    $('.logo-dMenu').toggleClass('logo-dMenu--show');

 })

  $("#carousel-ins-top").owlCarousel({
    loop:true,
    center:true,
    responsive:{
      0:{
          items:1.5,
          nav:false
      },
      600:{
          items:3,
          nav:false
      },
      1000:{
          items:5,
          nav:false,
      }
    }
  });

})