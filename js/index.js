var nowSlide = 1;

$(document).ready(function () {
	slide(nowSlide);
	
    $("html, body").on('mousewheel DOMMouseScroll', function (e) {
        scrollEvent(e);
    });
	
	$('footer > ul > li').click(function() {
		$('footer > ul > li').removeClass('active');
		if( $(this).hasClass('footer-txt-1') ){
			$('footer > ul > li.footer-txt-1').addClass('active');
		}
		if( $(this).hasClass('footer-txt-2') ){
			$('footer > ul > li.footer-txt-2').addClass('active');
		}
		if( $(this).hasClass('footer-txt-3') ){
			$('footer > ul > li.footer-txt-3').addClass('active');
		}
	});
});

function scrollEvent(e) {
    var E = e.originalEvent;
    var nowHeight = $('body').scrollTop();
    var topHeight = $('section.top').height();
    var middleHeight_1 = $('section.middle > #content-1').outerHeight(true);
    var middleHeight_2 = $('section.middle > #content-2').outerHeight(true);
    var bottomHeight = $(document).height() - $(window).height();

    delta = 0;
    if (E.detail) {
        delta = E.detail * -40;
    } else {
        delta = E.wheelDelta;
    };

    if (delta > 0) {
        //wheelup
        if (nowHeight <= topHeight) {
            $('body').stop().animate({
                scrollTop: 0
            }, 500);
            $('header').fadeOut(300);
            $('aside.left-menu-1').fadeOut(300);
            $('section.top > .img-box').slideDown(500);
        }

        if (nowHeight > topHeight && nowHeight <= topHeight + middleHeight_1) {
            $('body').stop().animate({
                scrollTop: topHeight
            }, 500);
        }

        if (nowHeight > topHeight + middleHeight_1 && nowHeight <= topHeight + middleHeight_1 + middleHeight_2) {
            $('body').stop().animate({
                scrollTop: topHeight + middleHeight_1
            }, 500);
            $('header').fadeIn(300);
            $('aside.left-menu-1').fadeIn(300);
        }

        if (nowHeight > topHeight + middleHeight_1 + middleHeight_2) {
            $('body').stop().animate({
                scrollTop: topHeight + middleHeight_1 + middleHeight_2
            }, 500);
        }

        $('footer').stop().animate({
            bottom: -400
        }, 300);
    } else {
        //wheeldown
        if (nowHeight < topHeight) {
            $('body').stop().animate({
                scrollTop: topHeight
            }, 500);
            $('header').fadeIn(300);
            $('aside.left-menu-1').fadeIn(300);
            $('section.top > .img-box').slideUp(500);
        }

        if (nowHeight >= topHeight && nowHeight < topHeight + middleHeight_1) {
            $('body').stop().animate({
                scrollTop: topHeight + middleHeight_1
            }, 500);
        }

        if (nowHeight >= topHeight + middleHeight_1 && nowHeight < topHeight + middleHeight_1 + middleHeight_2) {
            $('body').stop().animate({
                scrollTop: topHeight + middleHeight_1 + middleHeight_2
            }, 500);
            $('header').fadeOut(300);
            $('aside.left-menu-1').fadeOut(300);
        }

        if (nowHeight == bottomHeight) {
            $('footer').stop().animate({
                bottom: 0
            }, 500);
        }
    }
}

function slide(snum) {
    var winHeight = $(window).height();
    var winWidth = $(window).width();
    $('.banner-img').hide();
    $('.banner-txt').animate({
        top: -winHeight
    }, 0);
    $('.banner-txt').hide();

    $('section.top > .img-box > .banner-img:nth-child(' + snum + ')').show();
    $('section.top > .txt-box > .banner-txt:nth-child(' + snum + ')').show();
    $('section.top > .txt-box > .banner-txt:nth-child(' + snum + ')').animate({
        top: 0
    }, 500);

    $('section.top > .btn-box-1 > div').removeClass('now-btn');
    $('section.top > .btn-box-1 > div:nth-child(' + snum + ')').addClass('now-btn');

    if (nowSlide == 6) {
        nowSlide = 1;
    } else {
        nowSlide = snum + 1;
    }

    autoSlide(nowSlide);
}

var slideTimer;

function autoSlide(ns) {
    clearTimeout(slideTimer);
    slideTimer = setTimeout(function () {
        slide(ns);
    }, 2000);
}

function actionStart() {
    $('section.bottom > .video-cover').fadeOut(500);
    actionTimer = setTimeout(function () {
        actionEnd();
    }, 19000);

    $('section.bottom > .video-box > .logo-1').addClass('action-1');
    $('section.bottom > .video-box > .bottle-body').addClass('action-2');
    $('section.bottom > .video-box > .bottle-liquid-1').addClass('action-3');
    $('section.bottom > .video-box > .bottle-liquid-2').addClass('action-4');
    $('section.bottom > .video-box > .bottle-liquid-3').addClass('action-5');
    $('section.bottom > .video-box > .bottle-cap').addClass('action-6');
    $('section.bottom > .video-box > .bottle-label').addClass('action-7');
    $('section.bottom > .video-box > .bottle-car').addClass('action-8');
}

function actionEnd() {
    $('section.bottom > .video-box > .logo-1').removeClass('action-1');
    $('section.bottom > .video-box > .bottle-body').removeClass('action-2');
    $('section.bottom > .video-box > .bottle-liquid-1').removeClass('action-3');
    $('section.bottom > .video-box > .bottle-liquid-2').removeClass('action-4');
    $('section.bottom > .video-box > .bottle-liquid-3').removeClass('action-5');
    $('section.bottom > .video-box > .bottle-cap').removeClass('action-6');
    $('section.bottom > .video-box > .bottle-label').removeClass('action-7');
    $('section.bottom > .video-box > .bottle-car').removeClass('action-8');
    $('section.bottom > .video-cover').fadeIn(1000);
}
