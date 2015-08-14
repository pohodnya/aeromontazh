$(document).ready(function(){

	// маска ввода телефона
   	//jQuery(function($){
	//   $(".phone").mask("+7 (999) 999-99-99");
	//});

	// карусель
	$('#mycarousel').jcarousel({
		wrap: 'circular'
	});
	$(".fancybox").fancybox({
	});

	// lazyload
   	$("img").lazyload({
	    threshold : 200
	});

	// плавная прокрутка
	$('a[href^="#"]').click(function(){
        var target = $(this).attr('href');
        var top = $(target).offset().top - 36;
        $('html, body').animate({scrollTop: top}, 500);
        return false;
   	});

	// попапы
	$('.btn_call').click(function(){
		$('.popup_call').arcticmodal();
	});
	$('.btn_popup_1').click(function(){
		$('.popup_1').arcticmodal();
	});
	$('.btn_popup_2').click(function(){
		$('.popup_2').arcticmodal();
	});
	$('.btn_popup_3').click(function(){
		$('.popup_3').arcticmodal();
	});
	$('.btn_popup_4').click(function(){
		$('.popup_4').arcticmodal();
	});
	$('.btn_popup_5').click(function(){
		$('.popup_5').arcticmodal();
	});

	// обработка форм
	$('.btn_send').click(function(){
		var form = $(this).closest('.form');
		var valName = (form.find('input[name="client[name]"]').length > 0) ? form.find('input[name="client[name]"]').val() : '';
		var valPhone = (form.find('input[name="client[phone]"]').length > 0) ? form.find('input[name="client[phone]"]').val() : '';
		var valEmail = (form.find('input[name="client[mail]"]').length > 0) ? form.find('input[name="client[mail]"]').val() : '';
		var valTitle = (form.find('input[name="title"]').length > 0) ? form.find('input[name="title"]').val() : '';

		if (valName == '' || valPhone == '' ){
			if (valName == '')
				form.find('input[name="client[name]"]').css({'border-color': '#ff0000'});
			if (valPhone == '')
				form.find('input[name="client[phone]"]').css({'border-color': '#ff0000'});
			setTimeout(function(){
				form.find('input[name="client[name]"], input[name="client[phone]"]').css({'border-color': '#0d4150'});
			}, 3000);
		}
		else {
				$.arcticmodal('close');
				$('.popup_true').arcticmodal();
				//window.location.href = 'http://land.pulsar.org.ua/thankyou.html';

				setTimeout(function(){
					$.arcticmodal('close');
				}, 2000);
				setTimeout(function(){
					$('input[name="client[name]"]').val('');
					$('input[name="client[phone]"]').val('');
					$('input[name="client[mail]"]').val('');
				}, 2000);
		}
	});


	// АНИМАЦИИ
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	}else{
		new WOW().init();
	}


});