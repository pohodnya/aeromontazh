function toFrame(frameName) {
    $('#brizers').hide();
    $('#almaz').hide();
    $('#documents').hide();
    $('#contacts').hide();
    $('#' + frameName).show();
    $('#' + frameName + '_li').parent().children('li').removeClass('current');
    $('#' + frameName + '_li').addClass('current');

}

function sendFeedback() {
    var name = $('#name').val();
    var email = $('#email').val();
    var subject = $('#subject').val();
    var message = $('#message').val();
    $('.form form .send_form').html('Отправляем...');
    var jqxhr = $.ajax({
        type: "POST",
        url: '/client',
        data: { authenticity_token: AUTH_TOKEN, client: { phone: '', email: email, name: name, subject: subject, message: message}}
    })
        .done(function() {
            $('.form form .send_form').html('Отправить');
            $.arcticmodal('close');
            $('.popup_true').arcticmodal();
        })
        .fail(function() {
            $('.form form .send_form').html('Отправить');
            $.arcticmodal('close');
            $('.popup_fail').arcticmodal();
        });
}

$(document).ready(function() {
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
            }
        }
    });
});