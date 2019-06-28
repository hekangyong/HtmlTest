$(document).ready(function () {
    var initwidth = $(window).width();
    var initheight = $(window).height();
    var width = initwidth + "px";
    var height = initheight + "px";
    $(".rev_slider").css({
        width: width,
        height: height
    });
    $(window).resize(function () {
        var bhwidth = $(window).width();
        var bhheight = $(window).height();
        var bghwidth = bhwidth + "px";
        var bghheight = bhheight + "px"
        $(".rev_slider").css({
            width: bghwidth,
            height: bghheight
        });
    });
    for (var i = 0; i < $(".nav_link_hky").length; i++) {
        (function (i) {
            $(".nav_link_hky")[i].onclick = function (e) {
                console.log(i);
                $(".nav_link_hky").removeClass('active');
                $(this).addClass("active");
                var a = $(this).parents(".label_con").find(".tab_plane")[i];
                $(".tab_plane").removeClass("show")
                a.className = "tab_plane hade show"
            }
        })(i)
    }
});
window.onload = function () {

}