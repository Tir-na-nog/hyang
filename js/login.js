/* 페이지 로딩시 실행 */
$(document).ready(function () {
	/* 마우스 스크롤 감지 */
    $("html, body").on('mousewheel DOMMouseScroll', function () {
        scrollEvent();
    });
	/* 시작시 밑줄 */
	$('header > ul:nth-child(2) > li:nth-child(2) > a').addClass('active');
	$('section.con > form > div:nth-child(1) > h1').addClass('active');
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
		$('header > ul:nth-child(2) > li:nth-child(2) > a').addClass('active');
	} else {
		$('header').fadeOut(300);
		$('header > ul:nth-child(2) > li:nth-child(2) > a').removeClass('active');
	}
}
/* 로그인 폼 체크 */
function logIn() {
	var signUpMail = $('#Mail').val();
	var signUpPass = $('#Pass').val();

	if (signUpMail == '') {
		alert('메일주소를 입력하세요!');
		$('#Mail').focus();
	} else if(signUpPass == '') {
		alert('패스워드를 입력하세요!');
		$('#Pass').focus();
	} else {
		alert('당신의 아이디는 해킹되었읍니다.\n찾고 싶다면 아래 계좌로 1,250원을 입금하시오.\n123-1234-5678-90 SBS은행');
		$('#Mail').val('- !!! Warning !!! -')
		$('#Pass').val('')
	}
}
