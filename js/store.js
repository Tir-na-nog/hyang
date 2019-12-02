$(document).ready(function () {
    $("html, body").on('mousewheel DOMMouseScroll', function (e) {
        scrollEvent(e);
    });

    $('.list-menu-1 > ul > li').click(function () {
        $('.list-menu-1 > ul > li').removeClass('active');
        $('.list-menu-1 > ul > li > ul > li').removeClass('active');
        $(this).addClass('active');
        if ($(this).hasClass('women')) {
            $('.list-menu-1 > ul > li.women > ul > li.all').addClass('active');
            menuChange(0);
        } else {
            $('.list-menu-1 > ul > li.men > ul > li.all').addClass('active');
            menuChange(0);
        }
    });

    $('.list-menu-1 > ul > li > ul > li').click(function (e) {
        var menuChangeNum = 0;

        $('.list-menu-1 > ul > li > ul > li').removeClass('active');
        $(this).addClass('active');

        if ($(this).hasClass('all')) {
            menuChangeNum = '0';
        } else if ($(this).hasClass('dior')) {
            menuChangeNum = '1';
        } else if ($(this).hasClass('gucci')) {
            menuChangeNum = '2';
        } else if ($(this).hasClass('versace')) {
            menuChangeNum = '3';
        } else if ($(this).hasClass('chanel')) {
            menuChangeNum = '4';
        } else if ($(this).hasClass('burberry')) {
            menuChangeNum = '5';
        } else if ($(this).hasClass('montblanc')) {
            menuChangeNum = '6';
        }

        menuChange(menuChangeNum);
        e.stopPropagation();
    });
});

function scrollEvent(e) {
    var E = e.originalEvent;
    var nowHeight = $('body').scrollTop();
    var topHeight_1 = $('nav.list-menu-1').outerHeight(true);
    var topHeight_2 = $('nav.list-menu-1').outerHeight(true);
    var bottomHeight = $(document).height() - $(window).height();

    delta = 0;
    if (E.detail) {
        delta = E.detail * -40;
    } else {
        delta = E.wheelDelta;
    };

    if (delta > 0) {
        //wheelup
        if (nowHeight <= 250) {
            $('header').fadeIn(300);
        }
    } else {
        //wheeldown
        $('header').fadeOut(300);
    }
}

function menuChange(menuChangeNum) {
    $('.list-box-1 > ul > li').hide();
    if (menuChangeNum == '0') {
        $('.list-box-1 > ul > li').show();
    } else {
        $('.list-box-1 > ul > li.item-num-' + menuChangeNum).show();
    }
}
