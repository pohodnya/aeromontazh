$(document).ready(function(){

	// маска ввода телефона
   	jQuery(function($){
	   $(".phone.small").mask("(999)");
	   $(".phone.big").mask("999-9999");
	});

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
		var valName = (form.find('input[name="name"]').length > 0) ? form.find('input[name="name"]').val() : '';
		var valPhone1 = (form.find('input[name="phone1"]').length > 0) ? form.find('input[name="phone1"]').val() : '';
		var valPhone2 = (form.find('input[name="phone2"]').length > 0) ? form.find('input[name="phone2"]').val() : '';
		var valEmail = (form.find('input[name="mail"]').length > 0) ? form.find('input[name="mail"]').val() : '';
		var valTitle = (form.find('input[name="title"]').length > 0) ? form.find('input[name="title"]').val() : '';

		if (valName == '' || valPhone1 == '' || valPhone2 == ''){
			if (valName == '')
				form.find('input[name="name"]').css({'border-color': '#ff0000'});
			if (valPhone1 == '')
				form.find('input[name="phone1"]').css({'border-color': '#ff0000'});
			if (valPhone2 == '')
				form.find('input[name="phone2"]').css({'border-color': '#ff0000'});
			setTimeout(function(){
				form.find('input[name="name"], input[name="phone1"], input[name="phone2"]').css({'border-color': '#0d4150'});
			}, 3000);
		}
		else {
			$.post('/formtion.php', {'name': valName, 'phone1': valPhone1, 'phone2': valPhone2, 'email': valEmail, 'title': valTitle, 'page': 'http://klimatperm.ru/index2.html'}, function(){
				$.arcticmodal('close');
				$('.popup_true').arcticmodal();
				//window.location.href = 'http://land.pulsar.org.ua/thankyou.html';
				$('input[name="name"]').val('');
				$('input[name="phone1"]').val('');
				$('input[name="phone2"]').val('');
				$('input[name="mail"]').val('');
			});
		}
	});


	// АНИМАЦИИ
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	}else{
		new WOW().init();
	}


});