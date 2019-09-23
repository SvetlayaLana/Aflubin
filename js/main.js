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
    $('body').append('<script src="js/scene-1.js"></script>');
});


$(window).scroll(function (e) {
    let scrollTop = $(this).scrollTop();

    if (!$('#scene').hasClass('scene-1') && !$('#scene').hasClass('scene-6') && !$('#scene').hasClass('scene-7')) {
        $('.header-img').attr('src', 'img/logo-black.png');
        $('.footer-2plus-block img').attr('src', 'img/humans-black.png');
        $('.footer-2plus-block-text').css('color', 'black');
    }

    // transform viruses to aflubin and vice versa
    if (!$('#scene').hasClass('scene-1') && !$('#scene').hasClass('scene-2')) {
        if ($('.virus').attr('alt') === 'virus') {
            console.log('working');
            $('.virus').each(function () {
                $(this).attr({
                    src: 'img/aflubin.png',
                    alt: 'aflubin'
                });
            })
        }
    } else {
        if ($('.virus').attr('alt') === 'aflubin') {
            $('.virus').each(function () {
                $(this).attr({
                    src: 'img/virus.png',
                    alt: 'virus'
                });
            })
        }
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
            $('body').append('<script src="js/scene-1.js"></script>');
        });

    } else if (scrollTop > 500 && scrollTop <= 1000) { //scene 2
        if ($('#scene').hasClass('scene-1')) {

            console.log('load scene 2');
            // $('script:last-child').remove();

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

            $('.scene-img > *:nth-child(-n+3)').remove();
            $('.scene-img-block > *:nth-child(2)').remove();
            $('.scene-img-block img')
                .attr({
                    src: 'img/screen4-1.png',
                    alt: 'gorechavka'
                })
                .animate({
                    maxWidth: '270px',
                });

            $('.scene-img-block').prepend(
                '<img src="img/screen4-2.png" alt="borez">',
                '<img src="img/screen4-3.png" alt="perestupen">',
                '<img src="img/screen4-5.png" alt="milk acid">',
                '<img src="img/screen4-4.png" alt="metal">');

            $.get('snippets/scene4-snippet.html', function (data) {

                $('.scene-text').html(data);

                loadSlider();
            });


        }

    } else if (scrollTop > 2000 && scrollTop <= 2500) { //scene 5
        if ($('#scene').hasClass('scene-4')) {

            $('#scene')
                .removeClass()
                .addClass('scene-5');
            $('.scene-img-block img:nth-child(-n+4)').remove();
            $('.scene-img-block img:nth-child(1)')
                .attr({
                    src: 'img/fork&spoon.png',
                    alt: ''
                })
                .animate({
                    maxWidth: '130px',
                });
            $('.scene-img-block').append('<div>\n' +
                '                Следует принимать за 30 мин до или через 1 час после еды\n' +
                '            </div>');

            $('.scene-img').prepend('<h2>Как принимать таблетки?</h2><h3>1-2 сутки заболевания простудой или гриппом</h3>\n' +
                '        <div class="scene-5-block-text" id="scene-5-block-text-1">\n' +
                '            Дети в возрасте от 5 до 12 лет – ½ таблетки.<br>\n' +
                '            Взрослые и дети в возрасте от 12 лет – 1 таблетка.<br>\n' +
                '            Для быстрого улучшения состояния препарат принимать\n' +
                '            3 раза в сутки\n' +
                '        </div>');

            $.get('snippets/scene5-snippet.html', function (data) {
                $('.scene-text').html(data);
            });

        } else if ($('#scene').hasClass('scene-5') && !(/таблетки/).test($('h2'))) {

            $('h2').text('Как принимать таблетки?');
            $('#scene-5-block-text-1').html('Дети в возрасте от 5 до 12 лет – ½ таблетки.<br>' +
                '            Взрослые и дети в возрасте от 12 лет – 1 таблетка.<br>' +
                '            Для быстрого улучшения состояния препарат принимать 3 раза в сутки');
            $('#scene-5-block-text-2').text(' Принимать разовую дозу таблеток 2 раза в день до выздоровления');
            $('#glass-drop').attr('src', 'img/glass.png');
            $('.scene-img-block-text').text(' Таблетку подержать во рту до полного растворения')
        }


    } else if (scrollTop > 2500 && scrollTop <= 3000) {
        if ($('#scene').hasClass('scene-5') && !(/капли/).test($('h2'))) {
            $('h2').text('Как принимать капли?');
            $('#scene-5-block-text-1').html(
                'Дети в возрасте от 2 до 4 лет – 2-4 капли. <br>' +
                'Дети в возрасте от 5 до 12 лет – 5-9 капель. <br>' +
                'Взрослые и дети в возрасте от 12 лет – по 10 капель. <br>' +
                'Для быстрого улучшения состояния препарат принимать каждые полчаса-час, но не более 8 раз в сутки');
            $('#scene-5-block-text-2').text('Принимать разовую дозу капель 3 раза в день до выздоровления');
            $('#glass-drop').attr('src', 'img/water-drop.png');
            $('.scene-img-block-text').text('Для удобства применения детям препарат разводят в ложке воды.')

        } else if ($('#scene').hasClass('scene-6')) {

            $('#scene')
                .removeClass()
                .addClass('scene-5');

            $('.scene-img > *:nth-child(-n+2)').remove();
            $('#scene').append('<div class="scene-text"></div>');

            $('.footer-2plus-block img').attr('src', 'img/humans-black.png');
            $('.footer-2plus-block-text').css('color', 'black');

            $('.scene-img-block img:nth-child(1)')
                .attr({
                    src: 'img/fork&spoon.png',
                })
                .animate({
                    maxWidth: '130px',
                });
            $('.scene-img-block')
                .removeAttr('style')
                .append('<div>\n' +
                    '                Следует принимать за 30 мин до или через 1 час после еды\n' +
                    '            </div>');

            $('.scene-img').prepend('<h2>Как принимать таблетки?</h2><h3>1-2 сутки заболевания простудой или гриппом</h3>\n' +
                '        <div class="scene-5-block-text" id="scene-5-block-text-1">\n' +
                '            Дети в возрасте от 5 до 12 лет – ½ таблетки.<br>\n' +
                '            Взрослые и дети в возрасте от 12 лет – 1 таблетка.<br>\n' +
                '            Для быстрого улучшения состояния препарат принимать\n' +
                '            3 раза в сутки\n' +
                '        </div>');

            $.get('snippets/scene5-snippet.html', function (data) {
                $('.scene-text').html(data);
            });

        }

    } else if (scrollTop > 3000 && scrollTop <= 3500) {// scene 6
        if ($('#scene').hasClass('scene-5')) {

            $('#scene')
                .removeClass()
                .addClass('scene-6');


            $('.footer-2plus-block img').attr('src', 'img/humans-white.png');
            $('.footer-2plus-block-text').css('color', 'white');

            $.get('snippets/scene6-snippet.html', function (data) {
                $('.scene-img > *:nth-child(-n+3)').remove();
                $('.scene-img-block > *:nth-child(2)').remove();
                $('.scene-text').remove();

                $('.scene-img').prepend(data);

                $('.scene-img-block img')
                    .attr('src', 'img/screen6.png')
                    .css({
                        maxWidth: '100%',
                        height: '100%'
                    });
                $('.scene-img-block')
                    .animate({
                        top: 0,
                        right: 0
                    });
            })
        } else if ($('#scene').hasClass('scene-7')) {

            $('#scene')
                .removeClass()
                .addClass('scene-6');

            $('.scene-text,.scene-advertisement').remove();

            $.get('snippets/scene6-snippet.html', function (data) {
                $('.scene-img').prepend(data);
            });

            $('.scene-img-block img')
                .attr('src', 'img/screen6.png');

            $('.footer-2plus-block img').show();
            $('.footer-2plus-block-text').show();


        }
    } else if (scrollTop > 3500 && !$('#scene').hasClass('scene-7')) {
        $('#scene')
            .removeClass()
            .addClass('scene-7');

        $('.footer-2plus-block img').hide();
        $('.footer-2plus-block-text').hide();

        $('.scene-img > *:nth-child(-n+2)').remove();
        $('#scene').append('<div class="scene-text"></div>');

        $.get('snippets/scene7-snippet.html', function (data) {
            $('.scene-text').html(data);
            $('#scene').append('<div class="scene-advertisement">Реклама лікарського засобу. АФЛУБІН ®, краплі оральні. Р.П. МОЗ України №UA/1952/02/01 від 21.02.2017. АФЛУБІН ®, таблетки. Р.П. МОЗ України №UA/10018/01/01 від 22.07.2019. Виробник: Ріхард Біттнер АГ, Оссіахерштрассе 7, А-9560 Фельдкірхен, Австрія. Побічні реакції. У виняткових випадках в осіб  з гіперчутливістю на будь-який компонент препарату, можливі алергічні реакції (включаючи висипання, гіперемію, свербіж шкіри, кропив\'янку). Перед застосуванням необхідно уважно прочитати інструкції та проконсультуватися з лікарем. Зберігати в недоступному для дітей місці. Відпускається в аптеках та їх структурних підрозділах без рецепта.\n</div>')
        });

        $('.scene-img img').attr('src', 'img/screen7.png');

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
    $('.slider').scrollTop(0);
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





