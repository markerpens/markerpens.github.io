$(document).ready(function () {

    (function ($) {

        /*--Scroll Back to Top Button Show--*/

        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });

        // Click event scroll to top button jquery

        $('#back-to-top').click(function () {

            $('html, body').animate({ scrollTop: 0 }, 600);
            return false;
        });

        // Down arrow scroll to anchor

        $(".down-arrow").click(function (e) {
            e.preventDefault();
            var aid = $(this).attr("href");
            $('html,body').animate({ scrollTop: $(aid).offset().top }, 'slow');
        });

    })(jQuery);
});