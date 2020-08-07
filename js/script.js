$(function () {
$('a').on('click', function () {
    $(this).toggleClass('active')
    $('.go__wrapper').toggleClass('active')
    $('.gallery').toggleClass('active')

    if ( $(this).hasClass('active') ) {
        $(this).text('Close');
    } else {
        $(this).text('Go');
    }
});
});