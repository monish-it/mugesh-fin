$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");

            if (this.scrollY > 600) {
                $('.navbar').addClass("sticky1");

            } else {
                $('.navbar').removeClass("sticky1");
            }
            if (this.scrollY > 1800) {
                $('.navbar').addClass("sticky2");

            } else {
                $('.navbar').removeClass("sticky2");
            }
            if (this.scrollY > 2800) {
                $('.navbar').addClass("sticky3");

            } else {
                $('.navbar').removeClass("sticky3");
            }

        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });


    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
    });

    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active")
        $('.menu-btn i').toggleClass("active")
    });
});