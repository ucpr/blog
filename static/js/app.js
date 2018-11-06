function init() {
    $("#about").hide();
    $("#works").hide();
    $("#events").hide();
    $("#socials").hide();
}

$(function(){
    init();
    $("#about").css("display", "");

    $("nav ul li").click(function() {
        // ul liで押された場所の取得
        var index = $(this).index() + 1;
        switch (index) {
            case 1:
                init();
                $("#about").css("display", "");
                break;
            case 2:
                init();
                $("#works").css("display", "");
                break;
            case 3:
                init();
                $("#events").css("display", "");
                break;
            case 4:
                init();
                $("#socials").css("display", "");
                break;
        }
    });
});