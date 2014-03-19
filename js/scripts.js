$(function(){

    //Переменные
    var step = 1,
        total = 0,
        n1 = 0,
        n2 = 0,
        n3 = 0,
        n4 = 0,
        arr = [];


    //По клику "Далее"
    $('.next-step').on('click', function(event){
        event.preventDefault();
        var parentStep = $(this).parents('.step');
        if($(parentStep).find('[type="checkbox"]:checked').length >= 1){
            if(parentStep.hasClass('step-1')){
                if($('#desing-page').val() !== '' && $('#desing-page').val() !== '0'){
                    $(this).hide();
                    $(this).parents('.step').find('.overlay').animate({
                        opacity : 'show'
                    });
                    $(parentStep).next('.step').animate({
                        opacity: "show",
                        left: '6%'
                    }, 800);
                    $('.arrow-1').delay(400).animate({
                        opacity: "show",
                        right : "-40px"
                    }, 400);
                    progressPlus();
                    stepPlus();
                }
                else{
                    alert('Укажите количество страниц для дизайна!')
                }
            }
            else if(parentStep.hasClass('step-2')){
                if($('#html-page').val() !== ''){
                    $(this).hide();
                    $(this).parents('.step').find('.overlay').animate({
                        opacity : 'show'
                    });
                    $(parentStep).next('.step').animate({
                        opacity: "show",
                        top: '75px'
                    }, 800);
                    $('.arrow-2').delay(400).animate({
                        opacity: "show",
                        top : "75%"
                    }, 400);
                    progressPlus();
                    stepPlus();
                }
                else{
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
                    })
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
                $('#progress-step > p').text('Готово');
                $('#button-payment').show();
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

    $('#button-payment').on('click', function(){
        $('.active-item').each(function() {
            var costTxt = $(this).find('.check').find('.price').text();
            var cost = $(this).find('.check').find('.cost').text();
            var txt = $(this).find('title a').text();
            var itemOrder = txt + costTxt;
            var parent = $(this).parents('.step');
            if(parent.hasClass('step-1')){
                var numD = $('#desing-page').val();
                itemOrder  = 'Дизайн - ' + itemOrder + 'x ' + numD + ' (стр)';
                n1 = cost * parseFloat(numD);
            }
            if(parent.hasClass('step-2')){
                var numH = $('#html-page').val();
                itemOrder  = 'HTML-верстка - ' + itemOrder + 'x ' + numH + ' (стр)';
                n2 = cost * parseFloat(numH);
            }
            if(parent.hasClass('step-3')){
                itemOrder  = 'Добавить на сайт - ' + itemOrder;
                n3 += parseFloat(cost);
            }
            if(parent.hasClass('step-4')){
                itemOrder  = 'SEO - ' + itemOrder;
                n4 += parseFloat(cost);
            }
            arr.push(itemOrder);

            total = n1 + n2 + n3 + n4;
        });
        for(var i = 0;i < arr.length;i++){
             $('#in-total').append('<p>' + arr[i] + '</p>');
        }
        $('#in-total').append('<h2>' +  total + '</h2>');
    })


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


    //Скрытое описание
    $('.hide-desc').hide();
    $('.title a').on('click', function(event){
         event.preventDefault();
        $(this).next('.hide-desc').toggle(250);
    }); 


    //Вызываемые функции
    function stepPlus(){
        step++;
        $('#progress-step > p > span:first').text(step);
    }
    function progressPlus(){
        $('#progress-inner').animate({width : '+=25%'})
    }
});