/* 페이지 로딩시 실행 */
$(document).ready(function () {
	/* 마우스 스크롤 감지 */
    $("html, body").on('mousewheel DOMMouseScroll', function () {
        scrollEvent();
    });
	/* 시작시 밑줄 */
	$('header > ul:nth-child(2) > li:nth-child(1) > a').addClass('active');
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
		$('header > ul:nth-child(2) > li:nth-child(1) > a').addClass('active');
	} else {
		$('header').fadeOut(300);
		$('header > ul:nth-child(2) > li:nth-child(1) > a').removeClass('active');
	}
}
/* 회원가입 폼 체크 */
function signUp() {
	var signUpName = $('#Name').val();
	var signUpPass = $('#Pass').val();
	var signUpMail = $('#Mail').val();
	
	if(signUpName == '') {
		alert('이름을 입력하세요!');
		$('#Name').focus();
	} else if(signUpMail == '') {
		alert('메일주소를 입력하세요!');
		$('#Mail').focus();
	} else if(signUpPass == '') {
		alert('패스워드를 입력하세요!');
		$('#Pass').focus();
	} else {
		alert(signUpName + '님 가입을 축하합니다!');
		location.href="./login.html";
	}
}
