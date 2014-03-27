jQuery(document).ready(function($){
    //Переменные
    var step = 1,
        total = 0,
        n1 = 0,
        n2 = 0,
        n3 = 0,
        n4 = 0,
        procent = 0,
        arr = [];
	
	
    //По клику "Далее"
    $('.next-step').on('click', function(event){
        event.preventDefault();
        var parentStep = $(this).parents('.step');
        if($(parentStep).find('[type="checkbox"]:checked').length >= 1){
            if(parentStep.hasClass('step-1')){
                if($('#desing-page').val() !== '' && $('#desing-page').val() !== '0'){
                    $('#desing-page').css('border', '2px solid rgb(35, 175, 35)')
                    $(this).hide();
                    $(this).parents('.step').find('.overlay').animate({
                        opacity : 'show'
                    });
                    $(parentStep).next('.step').animate({
                        opacity: "show",
                        left: '4%'
                    }, 800);
                    $('.arrow-1').delay(400).animate({
                        opacity: "show",
                        right : "-30px"
                    }, 400);
                    progressPlus();
                    stepPlus();
                }
                else{
                    $('#desing-page').css('border', '2px solid #FA7575')
                    alert('Укажите количество страниц для дизайна!')
                }
            }
            else if(parentStep.hasClass('step-2')){
                if($('#html-page').val() !== '' && $('#html-page').val() !== '0'){
                    $('#html-page').css('border', '2px solid rgb(35, 175, 35)')
                    $(this).hide();
                    $(this).parents('.step').find('.overlay').animate({
                        opacity : 'show'
                    });
                    $(parentStep).next('.step').animate({
                        opacity: "show",
                        top: '51px'
                    }, 800);
                    $('.arrow-2').delay(400).animate({
                        opacity: "show",
                        bottom : "-34px"
                    }, 400);
                    progressPlus();
                    stepPlus();
                }
                else{
                    $('#html-page').css('border', '2px solid #FA7575')
                    alert('Укажите количество страниц для HTML-верстки!')
                }
            }
            else if(parentStep.hasClass('step-3')){
                $(this).hide();
                $(this).parents('.step').find('.overlay').animate({
                        opacity : 'show'
                    });
                $(parentStep).next('.step').animate({
                        opacity: "show",
                        left: '0%'
                }, 800);
                $('.arrow-3').delay(400).animate({
                        opacity: "show",
                        left : "-34px"
                }, 400);
                progressPlus();
                stepPlus();
            }
            else if(parentStep.hasClass('step-4')){
                $(this).hide();
                $(this).parents('.step').find('.overlay').animate({
                        opacity : 'show'
                    });
                progressPlus();
                stepPlus();
                $('#progress-step > p').hide(50);
                $('#button-payment').show(400)
            }
        }
        else{
            if(parentStep.hasClass('step-1')){
                alert('Выберите вариант дизайна!')
            }
            else if(parentStep.hasClass('step-2')){
                alert('Выберите тип HTML верстки!')
            }
            else if(parentStep.hasClass('step-3')){
                alert('Выберите Функционал!')
            }
            else if(parentStep.hasClass('step-4')){
                alert('Выберите вариант Продвижения!');
            }

        }
    });

    var count = 0;

    //Расчет стоимости
    $('#button-payment').on('click', function(event){
        event.preventDefault();
        $(this).animate({'opacity' : '0'})
        $('.active-item').each(function() {
            var costTxt = $(this).find('.check').find('.price').text();
            var cost = $(this).find('.check').find('.cost').text();
            var txt = $(this).find('.title a').text();
            var itemOrder = txt + '<span>' + costTxt +'</span>';
            var parent = $(this).parents('.step');
            if(parent.hasClass('step-1')){
                var numD = $('#desing-page').val();
                itemOrder  = '<span class="color1">Дизайн &mdash;</span>' + itemOrder + 'x ' + numD + ' (страниц)';
                n1 = cost * parseFloat(numD);
            }
            if(parent.hasClass('step-2')){
                var numH = $('#html-page').val();
                itemOrder  = '<span class="color2">Тип верстки &mdash;</span>' + itemOrder + 'x ' + numH + ' (страниц)';
                n2 = cost * parseFloat(numH);
            }
            if(parent.hasClass('step-3')){
                count++;
                itemOrder  = '<span class="color3">' + count +'.'+ ' Функционал &mdash;</span>' + itemOrder;
                n3 += parseFloat(cost);
            }
            if(parent.hasClass('step-4')){
                itemOrder  = '<span class="color4">Seo &mdash;</span>' + itemOrder;
                n4 += parseFloat(cost);
            }
            arr.push(itemOrder);

            total = n1 + n2 + n3 + n4;
        });
        var cacheArr;
        for(var i = 0, cacheArr = arr.length;i <cacheArr; i++){
            $('#in-total').append('<p>' + arr[i] + '</p>');
        }
        $('#in-total').append('<h2>' + 'Общая стоимость сайта:' + '<span>' +  total + 'руб.' + '</span>' + '</h2>');
        var height=$("body").height(); 
        $("body").animate({"scrollTop":height},"slow"); 
        $('#result').slideDown(600);

    })

    //Оформить заявку
    $('#button-order').on('click', function(event){
        event.preventDefault();
        $('#form-wrap').animate({
                opacity: "show",
                left: '4%'
        }, 800);
        $('.arrow-4').delay(200).animate({
            opacity: "show",
            right : "-35px"
        }, 400);
        $(this).off();
    });

    //Возможность выбрать только один из чеков для блоков .step-1 и .step-2
    $('.step-1 input[type="checkbox"],.step-2 input[type="checkbox"]')
    .on('click', function(){
        if($(this).prop('checked')){
            $(this).parents('.step').find('input[type="checkbox"]')
            .attr('disabled', 'disabled');
            $(this).parents('.step').find('label').addClass('disabled-check');
            $(this).next('label').removeClass('disabled-check');
            $(this).removeAttr('disabled');

        }
        else{
            $(this).parents('.step').find('input[type="checkbox"]')
            .removeAttr('disabled');
            $(this).parents('.step').find('label').removeClass('disabled-check');
        }
    });

    $("input[type='checkbox']").change(function(){ 
        if($(this).is(":checked")){ 
            $(this).next("label").addClass("active-check"); 
        }else{   
            $(this).next("label").removeClass("active-check");
        }  
    }); 


    //Выделение активного чека
    $('input[type="checkbox"]').change(function(){
        if($(this).prop('checked')){
            $(this).parents('.item-type').addClass('active-item');
        }
        else{
            $(this).parents('.item-type').removeClass('active-item');
        }
    });


    //Только цифры для кол-ва страниц
    $('#desing-page, #html-page').bind("change keyup input click", function() {
        if(this.value.match(/[^0-9]/g)){
            this.value = this.value.replace(/[^0-9]/g, '')
        }
    });

	
    //Скролинг
    $('a.scroll[href^="#"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top + 600}, 800);
        console.log(target)
        return false; 
    });


    //Скрытое описание
    $('.hide-desc').hide();
    $('.title a').on('click', function(event){
         event.preventDefault();
        $(this).next('.hide-desc').toggle(250);
    });

	
	//Затемнение	
	$(window).bind("resize", function(){
		$("#overlay").css("height", $(document).height());

	});	

	
	//Релоад
	$('.reload').on('click', function(event){
		event.preventDefault();
        location.reload();
	});

	
    //Вызываемые функции
    function stepPlus(){
        step++;
        $('#progress-step > p > span:first').text(step);
    }
    function progressPlus(){
        $('#progress-inner').animate({width : '+=25.1%'});
        procent +=25;
        var p100 = 'Выполнено'
        $('#progress-inner').text(procent + '%');
        if($('#progress-inner').text() == '100%') $('#progress-inner').text(p100)
    }
});