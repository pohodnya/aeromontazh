var
    brizerType = 'standart';
    climatControl = true;
    mount = false;
    hepa = true;
    ak = true;


// Отправка заявки
function sendOrder() {
    var fullName = $('#brizerName').html();
    if (mount){
        fullName += ' + Монтаж';
    }

    var jqxhr = $.ajax({
        type: "POST",
        url: '/market',
        data: { authenticity_token: AUTH_TOKEN, order: { brizer_type: fullName, first_name: $('#first_name').val(), last_name: $('#last_name').val(),
                third_name: $('#third_name').val(), email: $('#email').val(), phone: $('#phone').val(), street: $('#street').val(),
                house: $('#house').val(), flat: $('#flat').val()}}
    })
    .done(function() {
        $('#successOrder').modal('show');
    })
    .fail(function() {
        $('#failOrder').modal('show');
    });
}

function changeFilter(filterType) {
    tmpBrizerType = brizerType;

    if (filterType == 'hepa') {
        hepa = !hepa;
        if (hepa)
            switch (brizerType) {
                case 'base':
                    brizerType = 'baseHepa';
                    break;
                case 'baseAK':
                    brizerType = 'standart';
                    break;
                case 'lite':
                    brizerType = 'liteHepa';
                    break;
                case 'liteAK':
                    brizerType = 'liteHepaAK';
                    break;
            }
        else
            switch (brizerType) {
                case 'standart':
                    brizerType = 'baseAK';
                    break;
                case 'baseHepa':
                    brizerType = 'base';
                    break;
                case 'liteHepa':
                    brizerType = 'lite';
                    break;
                case 'liteHepaAK':
                    brizerType = 'liteAK';
                    break;
            }
        $('#aboutHepa').toggle(400);
    }
    else {
        ak = !ak;
        if (ak)
            switch (brizerType) {
                case 'base':
                    brizerType = 'baseAK';
                    break;
                case 'baseHepa':
                    brizerType = 'standart';
                    break;
                case 'lite':
                    brizerType = 'liteAK';
                    break;
                case 'liteHepa':
                    brizerType = 'liteHepaAK';
                    break;
            }
        else
            switch (brizerType) {
                case 'standart':
                    brizerType = 'baseHepa';
                    break;
                case 'baseAK':
                    brizerType = 'base';
                    break;
                case 'liteAK':
                    brizerType = 'lite';
                    break;
                case 'liteHepaAK':
                    brizerType = 'liteHepa';
                    break;
            }
        $('#aboutAk').toggle(400);
    }

    if (eval(filterType)) {
        $('#' + filterType).removeClass('black');
        $('#' + filterType + ' i').addClass('checkmark activate');
        $('#' + filterType).addClass('inverted blue active');
    }
    else {
        $('#' + filterType).removeClass('inverted blue active');
        $('#' + filterType + ' i').removeClass('checkmark activate');
        $('#' + filterType).addClass('black');
    }
    $('#' + tmpBrizerType).hide();
    $('#' + brizerType).show();
    changeDescription();
}

function changeClimat(flag) {
    if (flag != climatControl) {
        tmpBrizerType = brizerType;
        climatControl = !climatControl;
        if (climatControl) {
            $('#withoutHeater').removeClass('inverted blue active');
            $('#withoutHeater').addClass('black');
            $('#withHeater').removeClass('black');
            $('#withHeater').addClass('inverted blue active');
            switch (brizerType) {
                case 'lite':
                    brizerType = 'base';
                    break;
                case 'liteHepa':
                    brizerType = 'baseHepa';
                    break;
                case 'liteAK':
                    brizerType = 'baseAK';
                    break;
                case 'liteHepaAK':
                    brizerType = 'standart';
                    break;
            }
            $('#aboutWithoutHeater').toggle(300);
            $('#aboutWithHeater').toggle(300);
        }
        else {
            $('#withoutHeater').addClass('inverted blue active');
            $('#withoutHeater').removeClass('black');
            $('#withHeater').addClass('black');
            $('#withHeater').removeClass('inverted blue active');
            switch (brizerType) {
                case 'base':
                    brizerType = 'lite';
                    break;
                case 'baseHepa':
                    brizerType = 'liteHepa';
                    break;
                case 'baseAK':
                    brizerType = 'liteAK';
                    break;
                case 'standart':
                    brizerType = 'liteHepaAK';
                    break;
            }
            $('#aboutWithHeater').toggle(300);
            $('#aboutWithoutHeater').toggle(300);
        }
        $('#' + tmpBrizerType).hide();
        $('#' + brizerType).show();

    }
    changeDescription();
}

function changeMount(flag) {
    if (flag != mount) {
        $('#mountItem').toggle(400);
        mount = !mount;
        if (mount) {
            $('#withoutMount').removeClass('inverted blue active');
            $('#withoutMount').addClass('black');
            $('#withMount').removeClass('black');
            $('#withMount').addClass('inverted blue active');
        }
        else
        {
            $('#withoutMount').addClass('inverted blue active');
            $('#withoutMount').removeClass('black');
            $('#withMount').addClass('black');
            $('#withMount').removeClass('inverted blue active');
        }
    }
    changeDescription();
}

function changeDescription() {
    var price = 0;
        rubleIcon = '<i class="ruble icon"></i>';
    switch (brizerType) {
        case 'lite':
            $('#brizerName').html('Бризер Тион О2 Lite');
            price = 18300;
            break;
        case 'liteHepa':
            $('#brizerName').html('Бризер Тион О2 Lite + HEPA');
            price = 20190;
            break;
        case 'liteAK':
            $('#brizerName').html('Бризер Тион О2 Lite + AK');
            price = 19790;
            break;
        case 'liteHepaAK':
            $('#brizerName').html('Бризер Тион О2 Lite + HEPA + AK');
            price = 21680;
            break;
        case 'base':
            $('#brizerName').html('Бризер Тион О2 Base');
            price = 21300;
            break;
        case 'baseHepa':
            $('#brizerName').html('Бризер Тион О2 Base + HEPA');
            price = 23190;
            break;
        case 'baseAK':
            $('#brizerName').html('Бризер Тион О2 Base + AK');
            price = 22790;
            break;
        case 'standart':
            $('#brizerName').html('Бризер Тион О2 Standart');
            price = 23900;
            break;
    }
    $('#brizerPrice').html(price + rubleIcon);
    if (mount) {
        price = price + 4000;
    }
    $('#allItem p').html(price + rubleIcon);

}