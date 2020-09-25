$('.banner_slider').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	speed: 800,
	infinite: true,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 2000,
	fade: true,
	cssEase: 'linear',
	dots: true,
});







$('.top_btn').click(function () {


	$('html,body').animate({

		scrollTop: 0

	}, 1000);


});





$nav = $('.header').offset().top;

$(window).scroll(function () {


	$scrolling = $(this).scrollTop();

	if ($scrolling >= $nav) {

		$('.header').addClass('fixedmenu');

	} else {
		$('.header').removeClass('fixedmenu');
	}

	// Top button Start

	if ($scrolling >= 400) {

		$('.top_btn').fadeIn();

	} else {

		$('.top_btn').fadeOut();

	}

});






$('.ss-slider').slick({
	dots: true,
	infinite: true,
	speed: 800,
	slidesToShow: 5,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
	arrows: false,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
			}
    },
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
    },
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
    }
  ]
});






$('.team_slider').slick({
	dots: true,
	infinite: true,
	speed: 800,
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
	arrows: false,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
			}
    },
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
    },
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
    }
  ]
});









$('.watchbox').venobox({
	framewidth: '700px',
	frameheight: '400px',
	default: '#fff',
	titleattr: 'data-title',
	numeratio: true,
	infinigall: true,
	spinColor: '#d2d2d2',
	spinner: 'cube-grid'
});






$('.user_txt_slider').slick({
	infinite: true,
	speed: 800,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 2000,
	asNavFor: '.user_img_part',
	fade: true,
	cssEase: 'linear',
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
			}
    },
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
    },
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
    }
  ]
});




$('.user_img_part').slick({
	infinite: true,
	speed: 800,
	slidesToShow: 3,
	slidesToScroll: 1,
	arrows: false,
	centerMode: true,
	centerPadding: '0px',
	autoplay: true,
	autoplaySpeed: 2000,
	asNavFor: '.user_txt_slider',
	dots: true,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
			}
    },
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
    },
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
    }
  ]
});










$('.team-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    
  ]

    });




$(window).load(function(){
	$('#preloader').fadeOut('slow',function(){$(this).remove();});
});











