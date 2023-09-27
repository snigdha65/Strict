(function($){
	'use strict'

// code start



$(window).scroll( function(){

	var xyz = $(window).scrollTop();
	
	//$('.demo').text(xyz);

	if ( xyz > 1000 ) {
		$('.top-btn').fadeIn();
	}
	else{
		$('.top-btn').fadeOut();
	}


} ); // scroll end


$('.top-btn').on('click', function(){
	$('html').animate({ scrollTop : 0 });
});

// menu

$('.menu-icon span').on('click', function(){
	$('.strict-menu').slideToggle();
});




$(window).resize(function(){
	var screenSize = $(window).width();
	
	if ( screenSize > 991 ) {
		$('.strict-menu').removeAttr('style');
	}

});


// Ripples
$('.strict-banner').ripples();

// wow js
var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animate__animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true,     // reset animation on end (default is true)
  }
);
wow.init();


// owl carousel

$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay: true,
    autoplayTimeout: 2000,
    margin:10,
    nav:true,
    navText: ['<span><i class="fas fa-angle-left"></i></span>', '<span><i class="fas fa-angle-right"></i></span>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:6
        }
    }
})



// venobox

new VenoBox();



}) (jQuery);