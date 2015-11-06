
$(function () {
    $.scrollUp();
    $('#marketIcon').toggle(400);
    $('#moreIcon').toggle(400);
    $('#buttonToMarket').hover(
        function () {
            $('#marketIcon').toggle(400);
        },
        function(){
            $('#marketIcon').toggle(400);
    });
    $('#buttonToMore').hover(
        function () {
            $('#moreIcon').toggle(400);
        },
        function(){
            $('#moreIcon').toggle(400);
    });
});

$(function() {
    stickUnstick();
});

$( window ).resize(function() {
    stickUnstick();
});

function stickUnstick() {
    if(window.screen.width > 1200) {
        $('#logoConfig').sticky({topSpacing: 0});
        $('#configTitleSection').sticky({topSpacing: 210});
        $('#brizerExample').sticky({topSpacing: 275});
    }
    else {
        $('#logoConfig').unstick();
        $('#configTitleSection').unstick();
        $('#brizerExample').unstick();
    }
}

function sendMainOrder() {
    var name = $('#userName').val();
    var phone = $('#userPhone').val();
    $('.form form .send_form').html('Отправляем...');
    var jqxhr = $.ajax({
        type: "POST",
        url: '/client',
        data: { authenticity_token: AUTH_TOKEN, client: { phone: phone, name: name, subject: '', message: '', email: ''}}
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

$(function () {
    var note = $('#note'),
        ts = new Date(2015, 10, 15),
        newYear = true;

    if((new Date()) > ts){
        // Задаем точку отсчета для примера. Пусть будет очередной Новый год или дата через 10 дней.
        // Обратите внимание на *1000 в конце - время должно задаваться в миллисекундах
        ts = 0;
        newYear = false;
    }

    $('#getting-started').countdown({
        timestamp	: ts,
        callback	: function(days, hours, minutes, seconds){

            var message = "";

            message += "Дней              часов                минут";
            message += " <br />";
            message += "осталось до конца акции";

            note.html(message);
        }
    });
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

//$(function () {
//    $('.hasTooltip').qtip({
//        content: {
//            text: $('#qtip-0') // Use the "div" element next to this for the content
//        },
//        position: {
//            my: 'bottom center',
//            at: 'top center',
//        },
//        show: {
//            effect: function() {
//                $(this).slideDown();
//            }
//        },
//        hide: {
//            event: 'unfocus',
//            effect: function() {
//                $(this).slideUp();
//            }
//        },
//        style: {
//            classes: 'qtip-blue qtip-shadow'
//        }
//    });
//});

$(function () {
    $('#scrollUp').animate({bottom: "+=20"}, 1000);
    $('#scrollUp').animate({bottom: "-=20"}, 200);
});

$( document ).ready(function() {
    var lastId,
        topMenu = $("#navigation"),
        topMenuHeight = topMenu.outerHeight()+15,
    // All list items
        menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
        scrollItems = menuItems.map(function(){
            var item = $($(this).attr("href"));
            if (item.length) { return item; }
        });

    // Bind click handler to menu items
    // so we can get a fancy scroll animation
    menuItems.click(function(e){
        var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 300);
        e.preventDefault();
    });

    // Bind to scroll
    $(window).scroll(function(){
        // Get container scroll position
        var fromTop = $(this).scrollTop()+topMenuHeight;

        // Get id of current scroll item
        var cur = scrollItems.map(function(){
            if ($(this).offset().top < fromTop)
                return this;
        });
        // Get the id of the current element
        cur = cur[cur.length-1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
            lastId = id;
            // Set/remove active class
            menuItems
                .find('li').removeClass("active")
                .end().filter("[href=#"+id+"]").find('li').addClass("active");
        }
    });
});