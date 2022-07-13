
$(document).ready(function() {
	$('a[href^="#"]').click(function() {
		let target = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 500);
	})
});



$('.back-top').click(function () {
	$('body,html').animate({ scrollTop: 0}, 800); 
});

$(window).scroll(function() { 
	let scrolled = $(window).scrollTop(); 

	if(scrolled > 350) { 
		$('.back-top').addClass('active');
	} else {
		$('.back-top').removeClass('active');
	}
});

// $(".hiden-block").click(function () {
// 	$('.conteiner').css("display", "none")
// });
$(".hiden-block").click(function () {
	
	$('.conteiner').fadeToggle(500);
});

