(function($) {
    "use strict";
    var NAY = {};
    NAY.menuToggleClose = function(){
        $(".toggle-menu").on("click", function(){
            $(".header-left").stop().toggleClass("menu-open");
        });
        $(".header-left a").on("click", function(){
            var toggle = $(".toggle-menu");
        });
    }

    $(document).on("ready", function(){
        NAY.menuToggleClose();
    });

})(jQuery);