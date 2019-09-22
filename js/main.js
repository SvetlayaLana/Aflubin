//initializing page

//scroll to top while refreshing
$(window).scrollTop(0);

//set section size when resizing window and refreshing, 150px - footer height
$('.main').css('height', $(window).height() - 150);
$(window).resize(function () {
    $('.main').css('height', $(window).height() - 150);
});

$.get('snippets/scene1-snippet.html', function (data) {

    $('#scene')
        .addClass('scene-1')
        .html(data);

});

// console.log('scroll', $(window).scrollTop());

$(window).scroll(function (e) {
    let scrollTop = $(this).scrollTop();
    // console.log(scrollTop);
    /*if(scrollTop < 500){
        scrollTop = 0;
    }else if(scrollTop >= 500 && scrollTop < 1000){
        scrollTop = 500;
    }else if(scrollTop >= 1000 && scrollTop < 1500){
        scrollTop = 1000;
    }else{
        scrollTop
    }*/
    if (!$('#scene').hasClass('scene-1')) {
        $('.header-img').attr('src', 'img/logo-black.png');
        $('.footer-2plus-block img').attr('src', 'img/humans-black.png');
        $('.footer-2plus-block-text').css('color', 'black');
    }

    if (scrollTop <= 500 && !$('#scene').hasClass('scene-1')) {

        $('#scene')
            .removeClass()
            .addClass('scene-1')
            .hide();
        $.get('snippets/scene1-snippet.html', function (data) {
            $('.header-img').attr('src', 'img/logo-white.png');
            $('.footer-2plus-block img').attr('src', 'img/humans-white.png');
            $('.footer-2plus-block-text').css('color', 'white');
            $('#scene')
                .html(data)
                .fadeIn();

        });

    } else if (scrollTop > 500 && scrollTop <= 1000) { //scene 2
        if ($('#scene').hasClass('scene-1')/* || $('#scene').hasClass('scene-3')*/) {
            console.log('load scene 2');
            $('#scene')
                .removeClass()
                .addClass('scene-2')
                .hide();

            $.get('snippets/scene2-snippet.html', function (data) {
                $('#scene')
                    .html(data)
                    .fadeIn();

                $('.ball').hide();

            });

        } else if ($('#scene').hasClass('scene-3')) {

            $('#scene')
                .removeClass()
                .addClass('scene-2');

            $.get('snippets/scene2-text-snippet.html', function (data) {

                $('.scene-text')
                    .html(data);

                $(".scene-img-block .changeable")
                    .attr('src', 'img/screen2-woman.png')
                    .animate({
                        maxWidth: '270px',
                    }, 1000);
                $('.ball').hide();
                $('.man, .girl').fadeIn(700);

            });

        }
    } else if (scrollTop > 1000 && scrollTop <= 1500) { //scene 3

        if ($('#scene').hasClass('scene-2')) {
            console.log('load scene 3');
            $('#scene')
                .removeClass()
                .addClass('scene-3');
            $.get('snippets/scene3-snippet.html', function (data) {
                $('.man, .girl').fadeOut(700);

                $('.scene-text').html(data);

                $(".scene-img-block .changeable")
                    .attr('src', 'img/screen3-photo.png')
                    .animate({
                        maxWidth: '390px',
                    }, 1000, function () {
                        $('.ball').fadeIn(500);
                    });

            });
        } else if ($('#scene').hasClass('scene-4')) {

            $('#scene')
                .removeClass()
                .addClass('scene-3');

            $.get('snippets/scene3-snippet.html', function (data) {

                $('.scene-img-block img:nth-child(-n+4)').remove();

                $('.scene-img-block').append('<img src="img/scren2-small.png" class="man" style="display: none">',
                    '<img src="img/scren2-small.png" class="girl" style="display: none">',
                    '<img src="img/aflubin-ball.png" class="ball">');

                $('.scene-img-block img:nth-child(1)').addClass('changeable');

                $(".scene-img-block .changeable")
                    .attr('src', 'img/screen3-photo.png')
                    .animate({
                        maxWidth: '390px',
                    }, 1000, function () {
                        $('.ball').fadeIn(500);
                    });

                $('.scene-text').html(data);

            });


        }
    } else if (scrollTop > 1500 && scrollTop <= 2000) { //scene 4

        if ($('#scene').hasClass('scene-3')) {
            console.log('load scene 4');

            $('#scene')
                .removeClass()
                .addClass('scene-4');


            $.get('snippets/scene4-snippet.html', function (data) {

                $('.scene-text').html(data).fadeIn(500);

                $(".scene-img-block .changeable")
                    .attr({
                        'src': 'img/screen4-1.png',
                        'alt': 'gorechavka'
                    })
                    .removeClass('changeable');

                loadImages();
                loadSlider();

            });

        } else if ($('#scene').hasClass('scene-5')) {

            $('#scene')
                .removeClass()
                .addClass('scene-4');

            let finalHtml = '<div class="scene-img">\n' +
                '<div class="scene-img-block">\n' +
                '</div>\n' +
                '</div>\n' +
                '<div class="scene-text">\n' +
                '</div>';

            $('#scene').html(finalHtml);

            $.get('snippets/scene4-snippet.html', function (data) {

                $('.scene-text').html(data);

                $('.scene-img-block').append(
                    '<img src="img/screen4-2.png" alt="borez">',
                    '<img src="img/screen4-3.png" alt="perestupen">',
                    '<img src="img/screen4-5.png" alt="milk acid">',
                    '<img src="img/screen4-4.png" alt="metal">',
                    '<img src="img/screen4-1.png" alt="gorechavka">');
                loadSlider();
            });


        }

    } else if (scrollTop > 2000 && scrollTop <= 2500) { //scene 5
        if ($('#scene').hasClass('scene-4')) {

            $('#scene')
                .removeClass()
                .addClass('scene-5');

            $.get('snippets/scene5-snippet.html', function (data) {
                $('#scene').html(data);
            });

        } else if ($('#scene').hasClass('scene-5')) {

            $('h2').text('Как принимать таблетки?');
            $('#scene-5-text-1').html('Дети в возрасте от 5 до 12 лет – ½ таблетки.<br>' +
                '            Взрослые и дети в возрасте от 12 лет – 1 таблетка.<br>' +
                '            Для быстрого улучшения состояния препарат принимать 3 раза в сутки');
            $('#scene-5-text-2').text(' Принимать разовую дозу таблеток 2 раза в день до выздоровления');
            $('#glass-drop').attr('src', 'img/glass.png');
            $('.scene-5-img-block-text').text(' Таблетку подержать во рту до полного растворения')
        }


    } else if (scrollTop > 2500 && scrollTop <= 3000) {
        if ($('#scene').hasClass('scene-5')) {
            $('h2').text('Как принимать капли?');
            $('#scene-5-text-1').html(
                'Дети в возрасте от 2 до 4 лет – 2-4 капли. <br>' +
                'Дети в возрасте от 5 до 12 лет – 5-9 капель. <br>' +
                'Взрослые и дети в возрасте от 12 лет – по 10 капель. <br>' +
                'Для быстрого улучшения состояния препарат принимать каждые полчаса-час, но не более 8 раз в сутки');
            $('#scene-5-text-2').text('Принимать разовую дозу капель 3 раза в день до выздоровления');
            $('#glass-drop').attr('src', 'img/water-drop.png');
            $('.scene-5-img-block-text').text('Для удобства применения детям препарат разводят в ложке воды.')
        } else if ($('#scene').hasClass('scene-6')) {

        }

    }
});

function loadImages() {
    $('.scene-img-block img:nth-child(n+2)').remove();
    $('.scene-img-block').prepend(
        '<img src="img/screen4-2.png" alt="borez">',
        '<img src="img/screen4-3.png" alt="perestupen">',
        '<img src="img/screen4-5.png" alt="milk acid">',
        '<img src="img/screen4-4.png" alt="metal">');
}

function loadSlider() {
    console.log('just called');
    let scrolled = 0;
    let scrollHeight = $('.slider').prop('scrollHeight');
    let scrollDelta = $('.slider').height();
// console.log(scrollHeight);
    $('.arrow.down').click(function () {
        //console.log('working');
        $('.scene-img-block img:nth-child(1)').remove().appendTo($('.scene-img-block'));
        if (scrolled < scrollHeight - scrollDelta) {
            scrolled += scrollDelta;
        } else {
            scrolled = 0;
        }
        // console.log(scrolled);
        $('.slider').scrollTop(scrolled);

    });

    $('.arrow.up').click(function () {
        $('.scene-img-block img:nth-child(5)').remove().prependTo($('.scene-img-block'));
        if (scrolled === 0) {
            scrolled = scrollHeight - scrollDelta;
        } else {
            scrolled -= scrollDelta;
        }
        // console.log(scrolled);
        $('.slider').scrollTop(scrolled);
    });
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





