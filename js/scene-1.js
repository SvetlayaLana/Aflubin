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

$(function () {
    setUpViruses1('.scene-1-shifting-panel');

    $(document).mousemove(function () {
        $('.virus1').each(function () {
            let $target = $(this);
            animateDiv1($target);
        });
    });


    function setUpViruses1(selector) {
        let randQuantity = Math.floor(Math.random() * 5) + 5; //between 5 and 9

        for (let i = 0; i < randQuantity; i++) {
            let randSize = Math.floor(Math.random() * 51) + 30;// between 30 and 80
            let randY = Math.floor(Math.random() * $(selector).height());
            let randX = Math.floor(Math.random() * $(selector).width());
            $(selector).append(`<img class="virus1" src="img/virus.png" alt="virus" height="${randSize}px" style="top:${randY}px;left: ${randX}px ">`);
        }
    }

    function animateDiv1($target) {
        let newq = makeNewPosition($target.parent());
        let oldq = $target.offset();
        let speed = calcSpeed([oldq.top, oldq.left], newq);

        $target.animate({
            top: newq[0],
            left: newq[1]
        }, speed);
    }

});