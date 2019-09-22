// shift panel on the first screen
$('#shift').mousedown(function () {
    $(document).mousemove(function (e) {
        if (e.pageX >= 0) {
            $('.scene-1-shifting-panel').css('left', e.pageX);
        } else {
            return;
        }
        if (e.pageX <= $('.footer-2plus-block').offset().left) {
            $('.footer-2plus-block img').attr('src', 'img/humans-black.png');
            $('.footer-2plus-block-text').css('color', 'black');
        } else {
            $('.footer-2plus-block img').attr('src', 'img/humans-white.png');
            $('.footer-2plus-block-text').css('color', 'white');
        }

        if (e.pageX <= $('.header-logo').offset().left) {
            $('.header-img').attr('src', 'img/logo-black.png');
        } else {
            $('.header-img').attr('src', 'img/logo-white.png');
        }
    });
    $(document).mouseup(function () {
        $(document).off('mousemove');
    })
});