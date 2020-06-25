
$("#active_c").owlCarousel({
	items :1,
	loops:true,
	nav	:true,
	dots:false,
	auto:true,
}); 



$(window).on('scroll',function(){
	if ($(window).scrollTop()){
		$('.header_section').addClass('fixed_menu');
	}
	else
	{
		$('.header_section').removeClass('fixed_menu');
	}
});