(function ($) {
    "use strict";
    $("[data-bg").each(function () {
        $(this).css("background-image", " url( " + $(this).attr("data-bg") + " )");
    });

    new WOW().init();

})(jQuery);