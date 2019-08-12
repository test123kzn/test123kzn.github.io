$(function () {

    var lazyLoadInstance = new LazyLoad({
        elements_selector: ".lazy"
    });

    $('.js__bi').each(function () {
        var $ind_bg = $(this).data('bi');
        $(this).css('background-image', 'url(' + $ind_bg + ')');
    });

    $(document).on('click','.js__label-title',function () {
        var $parent = $(this).parents('.js__label');
        var $check = $parent.find('.js__label-check');
        var $btn = $(this).parents('form').find('button');

        if($check.is(':checked')){
            $btn.addClass('disabled').prop('disabled',true);
        }else{
            $btn.removeClass('disabled').prop('disabled',false);
        }
    });

    $('.partner__slider').slick({
        dots: true,
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [
            {
                breakpoint: 1299,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            },
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 499,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    });
    $().fancybox({
        selector: '.slick-slide:not(.slick-cloned) .photo__slider-item',
        hash: false,
        buttons: ['zoom', 'download', 'close']
    });

    $('.photo__slider').slick({
        dots: true,
        arrows: false,
        slidesToShow: 4,
        lazyLoad: 'ondemand',
        centerMode: true,
        centerPadding: '240px',
        responsive: [
            {
                breakpoint: 1299,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                }
            },
            {
                breakpoint: 499,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '0px',
                }
            },
        ]
    });


    //img to svg
    if ($('.js-svg-img').length) {
        $('.js-svg-img').each(function () {
            var $img = $(this);
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');

            $.get(imgURL, function (data) {
                var $svg = $(data).find('svg');
                if (typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }
                if (typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass + ' replaced-svg');
                }
                $svg = $svg.removeAttr('xmlns:a');
                if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                    $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
                }
                $img.replaceWith($svg);
                $svg.addClass('ready');
            }, 'xml');
        });
    }

});