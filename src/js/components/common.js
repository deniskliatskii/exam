$(document).ready(function () {
    // $('.your').slick({
        
    // });

    $('nav a').on('click', function (event) {
        event.preventDefault();
        var ellClick = $(this).attr('href');
        var distScroll = $(ellClick).offset().top;
        $('html, body').animate(
            { 'scrollTop': distScroll }, 1500);
    })

    /*
    *
    * Show more
    *
    */

    $('.all-services__btn').on('click', function (event) {
        event.preventDefault();
        $('.all-services').slideToggle();
    })

    /*
    *
    * Button Up
    *
    */

    $('body').append('<button class="btn-up"/>');

    $('.btn-up').click(function () {
        $('html, body').animate({ 'scrollTop': 0 }, 1000);
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > 1000) {
            $('.btn-up').addClass('btn-up__active');
        } else {
            $('.btn-up').removeClass('btn-up__active');
        }
    })


});

