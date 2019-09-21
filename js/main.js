$(window).on('scroll',function () {
   console.log('scrolling');
   $.get('snippets/scene2-snippet.html', function (data) {
       $('.main').html(data);
   })
});

$('#shift').mousedown(function () {
    $(document).mousemove(function (e) {
        if(e.pageX >= 0) {
            $('.scene-1-shifting-panel').css('left', e.pageX);
        }else{
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

let virus = $('.virus');

/*(function animate() {
    let containerWidth = $('.main').width()- virus.width();
    let containerHeight = $('.main').height() - virus.height();
    let virusOffsetTop = virus.offset().top;

    let randWidth = Math.floor(Math.random()*(containerWidth+1));
    let randHeight = Math.floor(Math.random()*(containerHeight+1));


    virus.animate({
        'top': randHeight,
        'left': randWidth
    }, 7000, 'linear', function () {
        virus.animate({
            'top': randHeight,
            'left': randWidth
        }, 7000, 'linear', function () {
            animate();
        })
    })

})();*/



$(document).click(function () {
    $('.scene-img-block div:nth-child(n+2)').fadeOut();
    $('.scene-2').fadeOut(300, function () {

        $.get('snippets/scene3-snippet.html', function (data) {
            $('.scene-text').html(data).fadeIn(500);
        });
        $(this).addClass('scene-3');

        $(".scene-img-block div:first-child").css('background-image', 'url(img/screen3-photo.png)').fadeIn(function () {

            $(this).animate({
                width: '390px',
                height: '390px',
            }, 500)


        });
    }).fadeIn(500, function () {
        $('.ball').fadeIn();
    });

});