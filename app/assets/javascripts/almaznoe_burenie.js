//var kirpich = [];
//kirpich['52'] = 16;
//kirpich['62'] = 17;
//kirpich['72'] = 19;
//kirpich['82'] = 20;
//kirpich['102'] = 25;
//kirpich['112'] = 26;
//kirpich['122'] = 27;
//kirpich['132'] = 28;
//kirpich['152'] = 32;
//kirpich['162'] = 35;
//kirpich['182'] = 37;
//var beton = [];
//beton['52'] = 18;
//beton['62'] = 20;
//beton['72'] = 21;
//beton['82'] = 22;
//beton['102'] = 27;
//beton['112'] = 28;
//beton['122'] = 29;
//beton['132'] = 30;
//beton['152'] = 35;
//beton['162'] = 38;
//beton['182'] = 40;
//var armobeton = [];
//armobeton['52'] = 20;
//armobeton['62'] = 22;
//armobeton['72'] = 23;
//armobeton['82'] = 24;
//armobeton['102'] = 29;
//armobeton['112'] = 30;
//armobeton['122'] = 31;
//armobeton['132'] = 32;
//armobeton['152'] = 38;
//armobeton['162'] = 41;
//armobeton['182'] = 43;
//
//$(function () {
//    $( ".calculator_data" ).change(function() {
//        changePrice();
//    });
//    $( ".calculator_data" ).keyup(function() {
//        changePrice();
//    });
//    $('#drilling_anker').change(function() {
//        changePrice();
//    });
//    $('#drilling_inoblast').change(function() {
//        changePrice();
//    });
//    $('#drilling_clear').change(function() {
//        changePrice();
//    });
//    $( "#drilling_depth" ).keyup(function() {
//        changePrice();
//    });
//    $("#drilling_inoblast").change(function() {
//        $("#distance_tr").toggle(400);
//        //if ($("drilling_inoblast").val() == true)
//        //
//    });
//});
//
//function changePrice() {
//    var depthPrice = 0;
//    var depth = 0;
//    var diametr = 0;
//    var quantity = 1;
//    var high = 0;
//    var clear = 0;
//    var disctance = 0;
//    var anker = 0;
//    var fullPrice = 0;
//    switch ($('#material').val()) {
//        case 'brick':
//            depthPrice = kirpich[$('#drilling_diametr').val()];
//            break;
//        case 'concrete':
//            depthPrice = beton[$('#drilling_diametr').val()];
//            break;
//        case 'ferroconcrete':
//            depthPrice = armobeton[$('#drilling_diametr').val()];
//            break;
//    }
//    if ($('#drilling_diametr').val())
//        diametr = $('#drilling_diametr').val();
//    if ($('#drilling_quantity').val())
//        quantity = $('#drilling_quantity').val();
//    if ($('#drilling_depth').val())
//        depth = $('#drilling_depth').val();
//    $('#drilling_inoblast').is(':checked') ? disctance = $('#distance').val() * 25 : true;
//    $('#drilling_anker').is(':checked') ? anker = 300 : true;
//    ($('#drilling_high').val() > 1.8) ? high = 0.2 : true;
//    $('#drilling_clear').is(':checked') ? clear = 0.2 : true;
//    if (depthPrice && depth)
//        fullPrice = depthPrice * depth * quantity * (1 + high + clear) + anker * quantity + disctance;
//    (fullPrice > 3000) ? $('#amount_result').html(fullPrice) : $('#amount_result').html(3000);
//}

function sendAlmazOrder1() {
    var name = $('form#call-1 .userName').val();
    var phone = $('form#call-1 .userPhone').val();
    var email = $('form#call-1 .userEmail').val();
    $('#call-1-button').html('Отправляем...');
    var jqxhr = $.ajax({
        type: "POST",
        url: '/client',
        data: { authenticity_token: AUTH_TOKEN, client: { phone: phone, name: name, subject: '', message: '', email: email, from_form: 'Алмазное бурение'}}
    })
        .done(function() {
            $('#call-1-button').html('Отправить');
            $('form#call-1 .userName').val('');
            $('form#call-1 .userPhone').val('');
            $('form#call-1 .userEmail').val('');
            $('#successOrder').modal('show');
        })
        .fail(function() {
            $('#call-1-button').html('Отправить');
            $('form#call-1 .userName').val('');
            $('form#call-1 .userPhone').val('');
            $('form#call-1 .userEmail').val('');
            $('#failOrder').modal('show');
        });
}

function sendAlmazOrder2() {
    var name = $('form#call-2 .userName').val();
    var phone = $('form#call-2 .userPhone').val();
    var email = $('form#call-2 .userEmail').val();
    $('#call-2-button').html('Отправляем...');
    var jqxhr = $.ajax({
        type: "POST",
        url: '/client',
        data: { authenticity_token: AUTH_TOKEN, client: { phone: phone, name: name, subject: '', message: '', email: email, from_form: 'Алмазное бурение'}}
    })
        .done(function() {
            $('#call-2-button').html('Отправить');
            $('form#call-2 .userName').val('');
            $('form#call-2 .userPhone').val('');
            $('form#call-2 .userEmail').val('');
            $('#successOrder').modal('show');
        })
        .fail(function() {
            $('#call-2-button').html('Отправить');
            $('form#call-2 .userName').val('');
            $('form#call-2 .userPhone').val('');
            $('form#call-2 .userEmail').val('');
            $('#failOrder').modal('show');
        });
}