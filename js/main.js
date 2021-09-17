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

    // === reviews ===
    $('.reviews').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: true
    });

    // === open-modal ===
    $('.open-modal').click(() => {
        $('.reservation__container').css('display', 'flex');
    });

    $('.reservation__cancel__close, .reservation__container').click((e) => {
        if ((e.target.className === 'reservation__container') || (e.target.className === 'reservation__cancel__close')) {
            $('.reservation__container').hide();
        }
    });

    // === send form ===
    $('.reserve__button > button').click(() => {
        let name = $('#name');
        let count = $('#count');
        let phone = $('#phone');
        let time = $('#time');

        name.css('border-color', 'rgb(255, 255, 255)');
        count.css('border-color', 'rgb(255, 255, 255)');
        phone.css('border-color', 'rgb(255, 255, 255)');
        time.css('border-color', 'rgb(255, 255, 255)');

        if (name.val() && count.val() && phone.val() && time.val()) {
            // $('.reservation__sent').show();
            // $('.reservation__content').hide();
            $.ajax({
                type: 'post',
                url: 'mail.php',
                data: 'name=' + name.val() + '&count=' + count.val() + '&phone=' + phone.val() + '&time=' + time.val(),
                success: () => {
                    $('.reservation__sent').show();
                    $('.reservation__content').hide();
                },
                error: () => {
                    $('.reservation__container').hide();
                    alert('Ошибка бронирования. Свяжитесь пожалуйста, по номеру телефона.');
                }
            })
        } else {
            $('.reserve__error').show();
            if (!name.val()) {
                name.css('border-color', 'rgb(241, 57, 57)');
            }
            if (!count.val()) {
                count.css('border-color', 'rgb(241, 57, 57)');
            }
            if (!phone.val()) {
                phone.css('border-color', 'rgb(241, 57, 57)');
            }
            if (!time.val()) {
                time.css('border-color', 'rgb(241, 57, 57)');
            }
        }
    });
});