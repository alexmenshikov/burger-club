$(document).ready(() => {
    $('.category').click((e) => {
        let currentElement = $(e.target);
        $('.products-container').hide();
        let id = currentElement.data('id');
        $('#' + id).show();

        $('.category').removeClass('active');
        currentElement.addClass('active');

        $('#' + id + ' .products').slick('refresh');
        $('#' + id + ' .products-nav').slick('refresh');
    });

    // === burgers ===
    $('#burgers__container .products').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '#burgers__container .products-nav'
    });
    $('#burgers__container .products-nav').slick({
        slidesToShow: 7,
        slidesToScroll: 7,
        asNavFor: '#burgers__container .products',
        dots: false,
        centerMode: false,
        infinite: false,
        focusOnSelect: true
    });

    // === fries ===
    $('#fries__container .products').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '#fries__container .products-nav'
    });
    $('#fries__container .products-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        asNavFor: '#fries__container .products',
        dots: false,
        centerMode: false,
        infinite: false,
        focusOnSelect: true
    });

    // === sauces ===
    $('#sauces__container .products').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '#sauces__container .products-nav'
    });
    $('#sauces__container .products-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '#sauces__container .products',
        dots: false,
        centerMode: false,
        infinite: false,
        focusOnSelect: true
    });

    // === drinks ===
    $('#drinks__container .products').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '#drinks__container .products-nav'
    });
    $('#drinks__container .products-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        asNavFor: '#drinks__container .products',
        dots: false,
        centerMode: false,
        infinite: false,
        focusOnSelect: true
    });
});