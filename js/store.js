/* 페이지 로딩시 실행 */
$(document).ready(function () {
	/* 마우스 스크롤 감지 */
    $('html, body').on('mousewheel DOMMouseScroll', function () {
        scrollEvent();
    });
	/* 시작시 밑줄 */
	$('header > ul:nth-child(1) > li:nth-child(2) > a').addClass('active');
	$('section > .item-menu-1 > ul > li.women').addClass('active');
	$('section > .item-menu-1 > ul > li.women > ul > li.all').addClass('active');
	/* 메뉴 변경 이벤트1 */
    $('section > .item-menu-1 > ul > li').click(function () {
        $('section > .item-menu-1 > ul > li').removeClass('active');
        $('section > .item-menu-1 > ul > li > ul > li').removeClass('active');
        $(this).addClass('active');
        if ($(this).hasClass('women')) {
            $('section > .item-menu-1 > ul > li.women > ul > li.all').addClass('active');
            menuChange(0);
        } else {
            $('section > .item-menu-1 > ul > li.men > ul > li.all').addClass('active');
            menuChange(0);
        }
    });
	/* 메뉴 변경 이벤트2 */
    $('section > .item-menu-1 > ul > li > ul > li').click(function (e) {
        var menuChangeNum = 0;

        $('section > .item-menu-1 > ul > li > ul > li').removeClass('active');
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
	/* 상품 버튼 클릭 이벤트 */
    var itemSrc = '';
    var itemName = '';
    var itemPrice = '';
	var itemNum = 1;
    $('section > .item-list-1 > ul > li > div:nth-child(3) > div:nth-child(2)').click(function () {
        itemSrc = $(this).parent().parent().find('.img-box').find('img').attr('src');
        itemName = $(this).parent().parent().find('.name-box').text();
        itemPrice = $(this).parent().parent().find('.price-box > div:first-Child').text();
        $('section > .item-list-1 > .item-ex > div > .img-box > img').attr('src', itemSrc);
        $('section > .item-list-1 > .item-ex > div > div:nth-child(2) > div:nth-child(1)').text(itemName);
        $('section > .item-list-1 > .item-ex > div > div:nth-child(2) > div:nth-child(3)').text(itemPrice);
        $('section > .item-list-1 > .item-ex').fadeIn(300);
    });
	/* 상품 확대창 외곽 클릭 이벤트 */
    $('section > .item-list-1 > .item-ex').click(function () {
        $('section > .item-list-1 > .item-ex').fadeOut(200);
        $('section > .item-list-1 > .item-ex > div > div:nth-child(2) > div:nth-child(5) > img').hide();
        $('section > .item-list-1 > .item-ex > div > div:nth-child(2) > div:nth-child(4)').removeClass('active');
    });
	/* 상품 확대창 내부 클릭 이벤트 방지 */
    $('section > .item-list-1 > .item-ex > div').click(function (e) {
        e.stopPropagation();
    });
	/* 상품 확대창 장바구니 버튼 클릭 이벤트 */
    $('section > .item-list-1 > .item-ex > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(2)').click(function () {
		if(itemNum <= 5){
			$('section > .item-list-1 > .item-ex > div > div:nth-child(2) > div:nth-child(2) > form > #cartSrc_' + itemNum).val(itemSrc);
			$('section > .item-list-1 > .item-ex > div > div:nth-child(2) > div:nth-child(2) > form > #cartName_' + itemNum).val(itemName);
			$('section > .item-list-1 > .item-ex > div > div:nth-child(2) > div:nth-child(2) > form > #cartPrice_' + itemNum).val(itemPrice);
			itemNum++;
			alert('상품이 장바구니에 담겼습니다.');
		} else {
			alert('장바구니에 5개 까지만 담을 수 있습니다.');
		}
    });
	/* 상품 확대창 구매 버튼 클릭 이벤트 */
    $('section > .item-list-1 > .item-ex > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(3)').click(function () {
		$('section > .item-list-1 > .item-ex > div > div:nth-child(2) > div:nth-child(2) > form > #cartSrc_0').val(itemSrc);
		$('section > .item-list-1 > .item-ex > div > div:nth-child(2) > div:nth-child(2) > form > #cartName_0').val(itemName);
		$('section > .item-list-1 > .item-ex > div > div:nth-child(2) > div:nth-child(2) > form > #cartPrice_0').val(itemPrice);
		$('section > .item-list-1 > .item-ex > div > div:nth-child(2) > div:nth-child(2) > #cart').submit();
	});
	/* 상품 확대창 별점 버튼 클릭 이벤트 */
    $('section > .item-list-1 > .item-ex > div > div:nth-child(2) > div:nth-child(4) > div').click(function () {
        $('section > .item-list-1 > .item-ex > div > div:nth-child(2) > div:nth-child(5) > img').slideDown(500);
        $('section > .item-list-1 > .item-ex > div > div:nth-child(2) > div:nth-child(4)').addClass('active');
	});
});
/* 키보드 상하 감지 */
$(document).keyup(function (key) {
    if (key.which == 38 || key.which == 40) {
        scrollEvent();
    } else return;
});
/* 스크롤시 헤더 on-off */
function scrollEvent() {
    var nowHeight = $('body').scrollTop();

	if (nowHeight < 200) {
		$('header').fadeIn(300);
		$('header > ul:nth-child(1) > li:nth-child(2) > a').addClass('active');
	} else {
		$('header').fadeOut(300);
		$('header > ul:nth-child(1) > li:nth-child(2) > a').removeClass('active');
	}
}
/* 메뉴 변경 이벤트 */
function menuChange(menuChangeNum) {
    $('section > .item-list-1 > ul > li').hide();
    if (menuChangeNum == '0') {
        $('section > .item-list-1 > ul > li').fadeIn(300);
    } else {
        $('section > .item-list-1 > ul > li.item-num-' + menuChangeNum).fadeIn(300);
    }
}
