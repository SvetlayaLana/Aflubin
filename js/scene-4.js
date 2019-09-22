let scrolled = 0;
let scrollHeight = $('.slider').prop('scrollHeight');
let scrollDelta = $('.slider').height();
// console.log(scrollHeight);
$('.arrow.down').click(function () {
    //console.log('working');
    $('.scene-img-block img:nth-child(1)').remove().appendTo($('.scene-img-block'));
    if(scrolled < scrollHeight-scrollDelta){
        scrolled += scrollDelta;
    }else{
        scrolled = 0;
    }
    // console.log(scrolled);
    $('.slider').scrollTop(scrolled);

});

$('.arrow.up').click(function () {
    $('.scene-img-block img:nth-child(5)').remove().prependTo($('.scene-img-block'));
    if(scrolled === 0){
        scrolled = scrollHeight - scrollDelta;
    }else{
        scrolled -= scrollDelta;
    }
    // console.log(scrolled);
    $('.slider').scrollTop(scrolled);
});