var nowSlide = 1;

$(document).ready(function () {
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
    var topHeight = $('nav.list-menu-1').height();
    var middleHeight = $('nav.list-box-1').outerHeight(true);
    var bottomHeight = $(document).height() - $(window).height();

    delta = 0;
    if (E.detail) {
        delta = E.detail * -40;
    } else {
        delta = E.wheelDelta;
    };

    if (delta > 0) {
        //wheelup
        $('footer').stop().animate({
            bottom: -400
        }, 300);
    } else {
        //wheeldown
        if (nowHeight == bottomHeight) {
            $('footer').stop().animate({
                bottom: 0
            }, 500);
        }
    }
}
