$(document).ready(function () {
    $('#gallery').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 1
                }
            }

        ]
    });

    $('a[href^="#"]').on("click", function (e) {
        const anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 800);
        e.preventDefault();
        return false;
    });

    const mobileMenu = function () {

        $('.mobile-menu').on("click", function () {
            if ($(this).hasClass('close')) {
                $('header nav').animate({
                    transform: 'translateX(-180px)'
                }, 350);
                $(this).removeClass('close');
                $('body').animate({
                    transform: 'translateX(0px)'
                }, 350);
            } else {
                $('.mobile-menu').addClass('close');
                $('header nav').addClass('open-header');
                $('header nav').animate({
                    transform: 'translateX(100%)'
                }, 350);
                $('body').animate({
                    transform: 'translateX(-25%)'
                }, 350);
            }
        });
    };

    $(document).ready(mobileMenu);

});

//Animation
wow = new WOW(
    {
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true
    }
);
wow.init();
//End animation
