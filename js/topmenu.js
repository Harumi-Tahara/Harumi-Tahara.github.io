$(function () {
    var menuBtn = $("#menu-btn"),
        menuContent = $("#menu-content");
    menuBtn.click(function () {
        menuContent.slideToggle();
    });
    $(window).resize(function () {
        var win = $(window).width(),
            p = 768; //19
        if (win > p) {
            menuContent.show();
        } else {
            menuContent.hide();
        }
    });
});
