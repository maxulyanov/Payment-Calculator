jQuery(document).ready(function($){
$(".order-form").submit(function(){
	nameVal = $(this).find('input[name="name"]').val();
	teleVal = $(this).find('input[name="phone"]').val();
	mailVal = $(this).find('input[name="email"]').val();
	$('.order-form input').each(function(){
		if($(this).hasClass('o-name')){
			if(nameVal == '' || nameVal == 'Ваше имя'){
				$(this).parent('p').removeClass('valid-ok').addClass('valid-error');
			}
			else{
				$(this).parent('p').removeClass('valid-error').addClass('valid-ok');
			}
		}
		if($(this).hasClass('o-phone')){
			if(teleVal == '' || teleVal == 'Ваш телефон'){
				$(this).parent('p').removeClass('valid-ok').addClass('valid-error');
			}
			else{
				$(this).parent('p').removeClass('valid-error').addClass('valid-ok');
			}
		}
		if($(this).hasClass('o-email')){
			var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
			if(!pattern.test($('.o-email').val())){
				$(this).parent('p').removeClass('valid-ok').addClass('valid-error');
			}
			else{
				$(this).parent('p').removeClass('valid-error').addClass('valid-ok');
				$('.email-addr').text(mailVal);
			}
		}
	});
	var hid = $('#in-total h2 span').text();
	$('.hid').val(hid);
	if($('.valid-error').length > 0){
		return false;
	}
	var str = $(this).serialize();
	$.ajax({
		type: "POST",
		url: "php/order.php",
		data: str,
		success: function(msg){
			$('#overlay').css({
				'opacity': '0.6',
				'height' : $(document).height()
			});
			$('#success').fadeIn();
			$('#overlay').fadeIn();
		}
	});
	return false;
});

});