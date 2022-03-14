$(document).ready(function(){
    $(".toogle-dropdown").on("click", function(){
        if($(this).find(".menu-dropdown").css("display") == "none"){
            $(this).find(".menu-dropdown").css(
                {"display": "block"},
                {"transition-duration": "1s"}
            )   
        } else {
            $(this).find(".menu-dropdown").css(
                {"display": "none"},
                {"transition-duration": "1s"}
            )
        }
    })

    $(".toogle-feature").on('click', function(){
        var animationEvent = 'webkitAnimationEnd oanimationend msAnimationEnd animationend';

        $(".feature-item-long").addClass("feature-item-short");
        $(".feature-item-long").removeClass("animationScale");
        $(".feature-item-long").addClass("animationScale");
        $(".feature-item-long").one(animationEvent, function(event){
            $(".feature-item-long").removeClass("animationScale");
        })
        $(".feature-item-long").find(".border-feature").attr("src", "asset/border-feature-svg.png");
        $(".feature-item-long").find(".title-long").addClass("title-short")
        $(".feature-item-long").find(".title-long").removeClass("title-long")
        $(".feature-item-long").find("svg").addClass("hide-short")
        $(".feature-item-long").find(".subtitle-long").addClass("subtitle-short")
        $(".feature-item-long").find(".subtitle-long").removeClass("subtitle-long")
        $(".feature-item-long").removeClass("feature-item-long")

        $(this).removeClass("feature-item-short")
        $(this).addClass("feature-item-long")
        $(this).addClass("feature-item-long")
        $(this).find(".title-short").addClass("title-long")
        $(this).removeClass("animationScale");
        $(this).addClass("animationScale");
        $(this).find(".title-short").removeClass("title-short")
        $(this).find("svg").removeClass("hide-short")
        $(this).find(".subtitle-short").addClass("subtitle-long")
        $(this).find(".subtitle-short").removeClass("subtitle-short")
        $(this).find(".border-feature").attr("src", "asset/border-feature-long-svg.png")
        $(this).one(animationEvent, function(event){
            $(this).removeClass("animationScale");
        })
    })
})
