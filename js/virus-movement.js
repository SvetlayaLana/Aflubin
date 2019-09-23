(function setUpViruses(selector) {
    let randQuantity = Math.floor(Math.random() * 5) + 5; //between 5 and 9

    for (let i = 0; i < randQuantity; i++) {
        let randSize = Math.floor(Math.random() * 51) + 30;// between 30 and 80
        let randY = Math.floor(Math.random() * $(selector).height());
        let randX = Math.floor(Math.random() * $(selector).width());
        $(selector).append(`<img class="virus" src="img/virus.png" alt="virus" height="${randSize}px" style="top:${randY}px;left: ${randX}px ">`);
    }
})('.main');

function makeNewPosition($container) {

    $container = ($container || $(window));
    let h = $container.height();
    let w = $container.width();

    let nh = Math.floor(Math.random() * h);
    let nw = Math.floor(Math.random() * w);

    return [nh, nw];

}

function calcSpeed(prev, next) {

    let x = Math.abs(prev[1] - next[1]);
    let y = Math.abs(prev[0] - next[0]);

    let greatest = x > y ? x : y;

    let speedModifier = 0.1;

    let speed = Math.ceil(greatest / speedModifier);

    return speed;

}

$('.virus').each(function () {
    let $target = $(this);

    function animateDiv() {

        let newq = makeNewPosition($target.parent());
        let oldq = $target.offset();
        let speed = calcSpeed([oldq.top, oldq.left], newq);

        $target.animate({
            top: newq[0],
            left: newq[1]
        }, speed, function () {
            animateDiv();
        });

    }

    animateDiv();
});