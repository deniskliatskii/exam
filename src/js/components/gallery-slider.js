$(document).ready(function () {
    $('.gallery-slider').slick({
        
    });

    $('.gallery-list .gallery-item img').click(function (event) {
        $('.gallery__modal-window').show();
        $('.overlay-modal').show();
        $('body').css('overflow', 'hidden');
    })

    $(document).bind('click keydown', function (event) {
        if (event.keyCode == 27) {
            $('.gallery__modal-window').hide();
            $('.overlay-modal').hide();
            $('body').css('overflow', '');
        }
    })
});