$(document).ready(function(){
    let nav = document.getElementById("page");

    setInterval(function(){
        $(".feature-text .owl-stage .owl-item").not(".center").find(".toogle-feature img").attr("src", "./asset/border-feature-long-svg.png")

        $(".feature-text .owl-stage .center").find(".toogle-feature").removeClass("feature-item-short").addClass("feature-item-long")
        $(".feature-text .owl-stage .center").find(".toogle-feature .title-short").addClass("title-long").removeClass("title-short")
        $(".feature-text .owl-stage .center").find(".toogle-feature svg").removeClass("hide-short")
        $(".feature-text .owl-stage .center").find(".toogle-feature .subtitle-short").addClass("subtitle-long").removeClass("subtitle-short")
        $(".feature-text .owl-stage .center").find(".toogle-feature img").attr("src", "./asset/border-feature-long-svg.png")
    }, 100)

    console.log(window.innerWidth > 510)
    if(window.innerWidth > 510){
        console.log("A")
        $("#feature-text-nocarousel").addClass("show")
        $("#feature-text-carousel").addClass("hide")
    } else {
        console.log("B")
        $("#feature-text-nocarousel").addClass("hide")
        $("#feature-text-carousel").addClass("show")
    }

    $(".toogle-dropdown").on('click', function(){
        if(!$(this).find("div").hasClass("hide") && !$(this).find("div").hasClass("show")){
            $(this).find("div").toggleClass("show flex-column")    
        } else {
            $(this).find("div").toggleClass("hide")
            $(this).find("div").toggleClass("show flex-column")
        }
    })

    $(".hamburger").click(function(){
        $(this).toggleClass("is-active");
        if($(".hamburger").hasClass("is-active")){
            $(".navbar").css("backgroundColor", "black")
            $("#page").css(
                {"opacity":"100"},
                {"transitionDuration": "0.5s"}
            )
        } else {
            $(".navbar").css("backgroundColor", "transparent")
            $("#page").css(
                {"opacity":"0"},
                {"transitionDuration": "0.5s"}
            )
        }
    });

    $(window).on("resize", function(){
        if(window.innerWidth < 510){
            if(!$("#feature-text-nocarousel").hasClass("hide") && !$("#feature-text-carousel").hasClass("show")){
                $("#feature-text-nocarousel").removeClass("show")
                $("#feature-text-nocarousel").addClass("hide")
                $("#feature-text-carousel").removeClass("hide")
                $("#feature-text-carousel").addClass("show")
            }
        } else {
            if(!$("#feature-text-nocarousel").hasClass("show") && !$("#feature-text-carousel").hasClass("hide")){
                $("#feature-text-nocarousel").removeClass("hide")
                $("#feature-text-nocarousel").addClass("show")
                $("#feature-text-carousel").removeClass("show")
                $("#feature-text-carousel").addClass("hide")
            }
        }
        if($(".hamburger").hasClass("is-active")){
            $(".hamburger").toggleClass("is-active");
            $("#page").css(
                {"opacity":"0"},
                {"transitionDuration": "0.5s"}
            )
         }
        $(".navbar").css("backgroundColor", "transparent")
        $(".menu-dropdown").css(
            {"display": "none"},
            {"transition-duration": "1s"}
        )
    })

    $(".toogle-feature").on('click', function(){
        var animationEvent = 'webkitAnimationEnd oanimationend msAnimationEnd animationend';

        $(".feature-item-long").attr("id","toogle-long");
        $(".feature-item-long").removeClass("animationScale");
        $(".feature-item-long").addClass("feature-item-short");
        $(".feature-item-long").addClass("animationScale");
        $(".feature-item-long").find(".border-feature").attr("src", "asset/border-feature-svg.png");
        $(".feature-item-long").find(".title-long").addClass("title-short")
        $(".feature-item-long").find(".title-long").removeClass("title-long")
        $(".feature-item-long").find("svg").addClass("hide-short")
        $(".feature-item-long").find(".subtitle-long").addClass("subtitle-short")
        $(".feature-item-long").find(".subtitle-long").removeClass("subtitle-long")
        $(".feature-item-long").one(animationEvent, function(event){
            $("#toogle-long").removeClass("animationScale")
            $("#toogle-long").attr("id","")
        })
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

function changeText(indentify, append, prepend, split="", formating=false, space=0){
    $(indentify).each(function () {
        let hasil = $(this).text().split(split)[0]
        if(+hasil == 0){
        $(this).prop('Counter',0).animate({
            Counter: $(this).attr('data-value')
        }, {
            duration: 1000,
            easing: 'swing',
            step: function (now) {
                if(formating){
                    let text = ""
                    let string = String(Math.ceil(now))
                    for(let i=1; i<=string.length; i++){
                        string = String(Math.ceil(now))
                        text = string[string.length - i] + text;
                        if(space==0){
                        } else if(i%space==0 && i!=string.length){
                            text = "," + text
                        }
                    }
                    $(this).text(text);
                    $(this).append(append);
                    $(this).prepend(prepend);
                } else {
                    $(this).text(Math.ceil(now));
                    $(this).append(append);
                    $(this).prepend(prepend);
                }
            }
        });
        }
    });
}

$(window).on('scroll', function(){
    offset = $(window).scrollTop() + $(window).height();
    let navTop = 1000;
    let posisi1 = $("#count-1").offset().top;
    let posisi4 = $("#count-4").offset().top;
    let posisi7 = $("#count-7").offset().top;
    if(offset > navTop){
        $("#page").css("opacity", "0");
        $(".navbar").css("backgroundColor", "black")
        $(".menu-dropdown").addClass("hide")
        $(".menu-dropdown").removeClass("show flex-column")
        if($(".hamburger").hasClass("is-active")){
           $(".hamburger").toggleClass("is-active");
        }    
    } else {
        $(".navbar").css("backgroundColor", "transparent")
    }
    if (posisi1 < offset && offset < posisi4){
        changeText("#count-1", "<span>+</span>");
        changeText("#count-2", "");
        changeText("#count-3", "<span>+</span>");
    } else if (posisi7 < offset){
        changeText("#count-4", ".90 <span>Beo</span>", "", "Beo", true, 3)
        changeText("#count-5", "")
        changeText("#count-6", "%")
        changeText("#count-7", "", "", "", true, 1)
        changeText("#count-8", ".90", "$", "$", true, 3)
        changeText("#count-9", " BEO", "", " BEO", true, 3)
        changeText("#count-10", ".5433 BEO", "", " BEO", true, 3)
    }
})
