$(document).ready(function () {
    $('section.animation > .video-cover').click(function (e) {
        actionStart();
    });
    $('section.animation > .video-cover > img:nth-child(1)').click(function (e) {
        e.stopPropagation();
        location.href = './index.html';
    });
});

function actionStart() {
    $('section.animation > .video-cover').fadeOut(500);
    actionTimer = setTimeout(function () {
        actionEnd();
    }, 19000);

    $('section.animation > .video-box > .logo-1').addClass('action-1');
    $('section.animation > .video-box > .bottle-body').addClass('action-2');
    $('section.animation > .video-box > .bottle-liquid-1').addClass('action-3');
    $('section.animation > .video-box > .bottle-liquid-2').addClass('action-4');
    $('section.animation > .video-box > .bottle-liquid-3').addClass('action-5');
    $('section.animation > .video-box > .bottle-cap').addClass('action-6');
    $('section.animation > .video-box > .bottle-label').addClass('action-7');
    $('section.animation > .video-box > .bottle-car').addClass('action-8');
}

function actionEnd() {
    $('section.animation > .video-box > .logo-1').removeClass('action-1');
    $('section.animation > .video-box > .bottle-body').removeClass('action-2');
    $('section.animation > .video-box > .bottle-liquid-1').removeClass('action-3');
    $('section.animation > .video-box > .bottle-liquid-2').removeClass('action-4');
    $('section.animation > .video-box > .bottle-liquid-3').removeClass('action-5');
    $('section.animation > .video-box > .bottle-cap').removeClass('action-6');
    $('section.animation > .video-box > .bottle-label').removeClass('action-7');
    $('section.animation > .video-box > .bottle-car').removeClass('action-8');
    $('section.animation > .video-cover').fadeIn(1000);
}
