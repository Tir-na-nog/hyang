var a = '';

/* 페이지 로딩시 실행 */
$(document).ready(function () {
	/* 마우스 스크롤 감지 */
    $('html, body').on('mousewheel DOMMouseScroll', function () {
        scrollEvent();
    });
	
	cartSetting();
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
	} else {
		$('header').fadeOut(300);
	}
}

var cartSrc = [];
var cartName = [];
var cartPrice = [];
var priceSum = 0;
var priceSumStr = '';

function cartSetting() {
	var items = window.location.search.substr(1).split('&');
	var tmp = [];
	
	tmp = items[0].split("=");
	cartSrc[0] = decodeURIComponent(tmp[1]);
	tmp = items[1].split("=");
	cartSrc[1] = decodeURIComponent(tmp[1]);
	tmp = items[2].split("=");
	cartSrc[2] = decodeURIComponent(tmp[1]);
	tmp = items[3].split("=");
	cartSrc[3] = decodeURIComponent(tmp[1]);
	tmp = items[4].split("=");
	cartSrc[4] = decodeURIComponent(tmp[1]);
	tmp = items[5].split("=");
	cartSrc[5] = decodeURIComponent(tmp[1]);
	tmp = items[6].split("=");
	cartName[0] = decodeURIComponent(tmp[1]);
	tmp = items[7].split("=");
	cartName[1] = decodeURIComponent(tmp[1]);
	tmp = items[8].split("=");
	cartName[2] = decodeURIComponent(tmp[1]);
	tmp = items[9].split("=");
	cartName[3] = decodeURIComponent(tmp[1]);
	tmp = items[10].split("=");
	cartName[4] = decodeURIComponent(tmp[1]);
	tmp = items[11].split("=");
	cartName[5] = decodeURIComponent(tmp[1]);
	tmp = items[12].split("=");
	cartPrice[0] = decodeURIComponent(tmp[1]);
	tmp = items[13].split("=");
	cartPrice[1] = decodeURIComponent(tmp[1]);
	tmp = items[13].split("=");
	cartPrice[2] = decodeURIComponent(tmp[1]);
	tmp = items[15].split("=");
	cartPrice[3] = decodeURIComponent(tmp[1]);
	tmp = items[16].split("=");
	cartPrice[4] = decodeURIComponent(tmp[1]);
	tmp = items[17].split("=");
	cartPrice[5] = decodeURIComponent(tmp[1]);
	
	String.prototype.replaceAll = function(x, y) {
		return this.split(x).join(y);
	}
	cartName[0] = cartName[0].replaceAll('+', ' ');
	cartName[1] = cartName[1].replaceAll('+', ' ');
	cartName[2] = cartName[2].replaceAll('+', ' ');
	cartName[3] = cartName[3].replaceAll('+', ' ');
	cartName[4] = cartName[4].replaceAll('+', ' ');
	cartName[5] = cartName[5].replaceAll('+', ' ');
	
	if(cartSrc[0] != '') {
		$('section .cart-box > .cart-box-0 > .img-box > img').attr('src', cartSrc[0]);
		$('section .cart-box > .cart-box-0 > div:last-child > div:nth-child(1)').text(cartName[0]);
		$('section .cart-box > .cart-box-0 > div:last-child > div:nth-child(2)').text(cartPrice[0]);
		cartPrice[0] = cartPrice[0].replace(',', '');
		priceSum = priceSum + Number(cartPrice[0]);
	} else {
		$('section .cart-box > .cart-box-0').hide();
	}
	
	if(cartSrc[1] != '') {
		$('section .cart-box > .cart-box-1 > .img-box > img').attr('src', cartSrc[1]);
		$('section .cart-box > .cart-box-1 > div:last-child > div:nth-child(1)').text(cartName[1]);
		$('section .cart-box > .cart-box-1 > div:last-child > div:nth-child(2)').text(cartPrice[1]);
		cartPrice[1] = cartPrice[1].replace(',', '');
		priceSum = priceSum + Number(cartPrice[1]);
	} else {
		$('section .cart-box > .cart-box-1').hide();
	}
	
	if(cartSrc[2] != '') {
		$('section .cart-box > .cart-box-2 > .img-box > img').attr('src', cartSrc[2]);
		$('section .cart-box > .cart-box-2 > div:last-child > div:nth-child(1)').text(cartName[2]);
		$('section .cart-box > .cart-box-2 > div:last-child > div:nth-child(2)').text(cartPrice[2]);
		cartPrice[2] = cartPrice[2].replace(',', '');
		priceSum = priceSum + Number(cartPrice[2]);
	} else {
		$('section .cart-box > .cart-box-2').hide();
	}
	
	if(cartSrc[3] != '') {
		$('section .cart-box > .cart-box-3 > .img-box > img').attr('src', cartSrc[3]);
		$('section .cart-box > .cart-box-3 > div:last-child > div:nth-child(1)').text(cartName[3]);
		$('section .cart-box > .cart-box-3 > div:last-child > div:nth-child(2)').text(cartPrice[3]);
		cartPrice[3] = cartPrice[3].replace(',', '');
		priceSum = priceSum + Number(cartPrice[3]);
	} else {
		$('section .cart-box > .cart-box-3').hide();
	}
	
	if(cartSrc[4] != '') {
		$('section .cart-box > .cart-box-4 > .img-box > img').attr('src', cartSrc[4]);
		$('section .cart-box > .cart-box-4 > div:last-child > div:nth-child(1)').text(cartName[4]);
		$('section .cart-box > .cart-box-4 > div:last-child > div:nth-child(2)').text(cartPrice[4]);
		cartPrice[4] = cartPrice[4].replace(',', '');
		priceSum = priceSum + Number(cartPrice[4]);
	} else {
		$('section .cart-box > .cart-box-4').hide();
	}
	
	if(cartSrc[5] != '') {
		$('section .cart-box > .cart-box-5 > .img-box > img').attr('src', cartSrc[5]);
		$('section .cart-box > .cart-box-5 > div:last-child > div:nth-child(1)').text(cartName[5]);
		$('section .cart-box > .cart-box-5 > div:last-child > div:nth-child(2)').text(cartPrice[5]);
		cartPrice[5] = cartPrice[5].replace(',', '');
		priceSum = priceSum + Number(cartPrice[5]);
	} else {
		$('section .cart-box > .cart-box-5').hide();
	}
	
	priceSumStr = priceSum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	
	$('section .cart-box > .price-box > h3 > span').text(priceSumStr);
}

function itemDel() {
	if($('input:checkbox[id="checkbox-1"]').is(':checked')) {
		$('input:checkbox[id="checkbox-1"]').prop('checked', false);
		$('section .cart-box > .cart-box-0').hide();
		priceSum = priceSum - Number(cartPrice[0]);
	}
	if($('input:checkbox[id="checkbox-2"]').is(':checked')) {
		$('input:checkbox[id="checkbox-2"]').prop('checked', false);
		$('section .cart-box > .cart-box-1').hide();
		priceSum = priceSum - Number(cartPrice[1]);
	}
	if($('input:checkbox[id="checkbox-3"]').is(':checked')) {
		$('input:checkbox[id="checkbox-3"]').prop('checked', false);
		$('section .cart-box > .cart-box-2').hide();
		priceSum = priceSum - Number(cartPrice[2]);
	}
	if($('input:checkbox[id="checkbox-4"]').is(':checked')) {
		$('input:checkbox[id="checkbox-4"]').prop('checked', false);
		$('section .cart-box > .cart-box-3').hide();
		priceSum = priceSum - Number(cartPrice[3]);
	}
	if($('input:checkbox[id="checkbox-5"]').is(':checked')) {
		$('input:checkbox[id="checkbox-5"]').prop('checked', false);
		$('section .cart-box > .cart-box-4').hide();
		priceSum = priceSum - Number(cartPrice[4]);
	}
	if($('input:checkbox[id="checkbox-6"]').is(':checked')) {
		$('input:checkbox[id="checkbox-6"]').prop('checked', false);
		$('section .cart-box > .cart-box-5').hide();
		priceSum = priceSum - Number(cartPrice[5]);
	}
	
	priceSumStr = priceSum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	
	$('section .cart-box > .price-box > h3 > span').text(priceSumStr);
}

function itemBuy() {
	var selectedPrice = 0;
	var selectedPriceStr = '';
	var finalConfirm;
	
	if($('input:checkbox[id="checkbox-1"]').is(':checked')) {
		selectedPrice = selectedPrice + Number(cartPrice[0]);
	}
	if($('input:checkbox[id="checkbox-2"]').is(':checked')) {
		selectedPrice = selectedPrice + Number(cartPrice[1]);
	}
	if($('input:checkbox[id="checkbox-3"]').is(':checked')) {
		selectedPrice = selectedPrice + Number(cartPrice[2]);
	}
	if($('input:checkbox[id="checkbox-4"]').is(':checked')) {
		selectedPrice = selectedPrice + Number(cartPrice[3]);
	}
	if($('input:checkbox[id="checkbox-5"]').is(':checked')) {
		selectedPrice = selectedPrice + Number(cartPrice[4]);
	}
	if($('input:checkbox[id="checkbox-6"]').is(':checked')) {
		selectedPrice = selectedPrice + Number(cartPrice[5]);
	}
	
	selectedPriceStr = selectedPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	finalConfirm = confirm('총 결제금액 ' + selectedPriceStr + '원 입니다.\n결제 하시겠습니까?');
	if(finalConfirm == true){
		alert('구매 감사합니다!');
		location.href='./store.html';
	}
}

function itemBuyAll() {
	var finalConfirm;
	finalConfirm = confirm('총 결제금액 ' + priceSumStr + '원 입니다.\n결제 하시겠습니까?');
	if(finalConfirm == true){
		alert('구매 감사합니다!');
		location.href='./store.html';
	}
}
