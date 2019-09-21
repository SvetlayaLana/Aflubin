console.log($(window).height());
$(window).scrollTop(0);
$('.main').css('height', $(window).height() - 150);
$(window).resize(function () {
    $('.main').css('height', $(window).height() - 150);
});

console.log('scroll', $(window).scrollTop());

$(window).scroll(function (e) {
    let scrollTop = $(this).scrollTop();
    console.log(scrollTop);
    if (scrollTop <= 500 && $('.scene-1').length === 0) {
        $('.main').fadeOut(function () {
            $.get('snippets/scene1-snippet.html', function (data) {
                $('.main').html(data).fadeIn();

            })
        });
    } else if (scrollTop > 500 && scrollTop <= 1000) {
        if ($('.scene-2').length === 0 || $('.scene-3').length !== 0) {
            $('.main').fadeOut(function () {
                // $('.ball').css('display', 'none');
                $.get('snippets/scene2-snippet.html', function (data) {

                    $('.main').html(data).fadeIn();

                })
            });
        }


    } else if (scrollTop > 1000 && scrollTop <= 1500 && $('.scene-3').length === 0) {
        $('.scene-img-block img:nth-child(n+2)').fadeOut(700);
        $('.scene-text').fadeOut(300, function () {
            $.get('snippets/scene3-snippet.html', function (data) {
                $('.scene-2').addClass('scene-3');
                $('.scene-text').html(data).fadeIn(500,function () {
                    $(".scene-img-block img:first-child").attr('src', 'img/screen3-photo.png').animate({
                        maxWidth: '390px',
                    }, 1000);
                    $('.ball').fadeIn();
                });

            });
        });


    }else if(scrollTop > 1500 && scrollTop <= 2000 && $('.scene-4').length === 0){
        $('.ball').fadeOut();
        $('.scene-text').fadeOut(300, function () {
            $.get('snippets/scene4-snippet.html', function (data) {
                $('.scene-3').addClass('scene-4');
                $('.scene-text').html(data).fadeIn(500,function () {
                    $(".scene-img-block img:first-child").attr('src', 'img/screen4-1.png').animate({
                        maxWidth: '385px',
                    }, 1000);

                })
            })
        })


    }


    /*else if(scrollTop > 200 && $('.scene-3').length === 0){
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
    }*//*else{
       $.get('snippets/scene1-snippet.html', function (data) {
           $('.main').html(data);
       })
   }*/

})
;


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



