/* 페이지 로딩시 실행 */
$(document).ready(function () {
    /* 마우스 스크롤 감지 */
    $("html, body").on('mousewheel DOMMouseScroll', function () {
        scrollEvent();
    });
    /* 시작시 밑줄 */
    $('header > ul:nth-child(1) > li:nth-child(3) > a').addClass('active');
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
        $('header > ul:nth-child(1) > li:nth-child(3) > a').addClass('active');
    } else {
        $('header').fadeOut(300);
        $('header > ul:nth-child(1) > li:nth-child(3) > a').removeClass('active');
    }
}
