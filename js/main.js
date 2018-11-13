
$(document).ready(function(){
	  $('.slick-slider-baner').slick({
	  infinite: true,
	  speed: 500,
	  fade: true,
	  autoPlay:true,
	  cssEase: 'linear'
	});

	  $('.slider-testimonials').slick({
		  infinite: true,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  autoPlay:true,
		  speed:1000,
		  dots:true
	});
	  /*menu mobile*/
	  $('.show-nav-mobile').click(function(event) {
	  	if($('.top-menu.top-menu-mobile').hasClass('show-nav')){
	  		$('.top-menu.top-menu-mobile').removeClass('show-nav');
	  	}else{
	  		$('.top-menu.top-menu-mobile').addClass('show-nav');
	  	}
	  });
});