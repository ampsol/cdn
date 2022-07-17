//Example Jquery for wordpress
jQuery(document).ready(function ($) {
    var top = $(window).scrollTop();
    console.log(top)
    if (top != 0) {
        jQuery("#language_switcher_desktop li a").addClass("scroll");
    }

    $(".header-home-page .elementor-menu-toggle").click(function () {
        if (top == 0) {
            $(".header-home-page").toggleClass('bg-white', '');
        }

    });
});

//For nav transparent, add backgrount when scrolling
jQuery(window).scroll(function (event) {
    var top = jQuery(this).scrollTop();
    if (top < 10) {
        jQuery("#language_switcher_desktop li a").removeClass("scroll");
        jQuery("#language_switcher_mobile li a").removeClass("scroll");
        jQuery("#menu-list i").removeClass("scroll");
        jQuery(".toggleTransparent i").css('color', '#ffffff');

    }
    else {
        jQuery("#language_switcher_desktop li a").addClass("scroll");
        jQuery("#language_switcher_mobile li a").addClass("scroll");
        jQuery("#menu-list i").addClass("scroll");
        jQuery(".toggleTransparent i").css('color', '#0B3051');
    }
});
