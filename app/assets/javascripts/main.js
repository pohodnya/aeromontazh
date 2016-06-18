function sendMainOrder(subject) {
    var name = $('#userName').val();
    var phone = $('#userPhone').val();
    var jqxhr = $.ajax({
            type: "POST",
            url: '/client',
            data: { authenticity_token: AUTH_TOKEN, client: { phone: phone, name: name, subject: subject, message: '', email: ''}}
        })
        .done(function() {
            $('.main-form').modal('hide');
            $('.popup_true').modal('show');
        })
        .fail(function() {
            $('.main-form').modal('hide');
            $('.popup_fail').modal('show');
        });
}

function sendFeedback() {
    $('#sendButton').html('Отправляем');
    var name = $('#first-name').val() + ' ' + $('#last-name').val();
    var phone = $('#phone').val();
    var email = $('#email').val();
    var message = $('#message').val();
    var jqxhr = $.ajax({
            type: "POST",
            url: '/client',
            data: { authenticity_token: AUTH_TOKEN, client: { phone: phone, name: name, subject: 'С формы обратной связи', message: message, email: email}}
        })
        .done(function() {
            $('.ui.page.dimmer.donemail').dimmer('show');
            $('#sendButton').html('Отправить сообщение');
            $('#first-name').val('');
            $('#last-name').val('');
            $('#phone').val('');
            $('#email').val('');
            $('#message').val('');
            setTimeout("$('.ui.page.dimmer.donemail').dimmer('hide');", 5000);
        })
        .fail(function() {
            $('.ui.page.dimmer.failmail').dimmer('show');
            $('#sendButton').html('Отправить сообщение');
            setTimeout("$('.ui.page.dimmer.failmail').dimmer('hide');", 5000);
        });
}