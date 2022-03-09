let winheight = window.innerHeight/5;

// let offset = "";
// $(window).on("scroll", function(){
//     offset = $(window).scrollTop() + $(window).height();
//     if(window.innerHeight/offset>=0.6){
//         $(".scroll-position").css(
//             {"top": "0%"},
//             {"border-radius":"20px"},
//             // {"transitonDuration": "2s"}
//         );
//     } else if(window.innerHeight/offset>=0.3){
//         $(".scroll-position").css(
//             {"top": "20%"},
//             {"border-radius":"20px"}
//             // {"transitonDuration": "2s"}
//         );
//     } else if(window.innerHeight/offset>=0.25){
//         $(".scroll-position").css(
//             {"top": "40%"},
//             {"borderRadius":"20px"}
//             // {"transitonDuration": "2s"}
//         );
//     } else if(window.innerHeight/offset>=0.18){
//         $(".scroll-position").css(
//             {"top": "60%"},
//             {"borderRadius":"20px"},
//             // {"transitonDuration": "2s"}
//         );
//     } else {
//         $(".scroll-position").css(
//             {"top": "80%"},
//             {"borderRadius":"20px"},
//             // {"transitonDuration": "2s"}
//         );
//     }
// })
let diskon = document.getElementById("diskon");
let fromDiskon = 0;

$(".hamburger").click(function(){
    $(this).toggleClass("is-active");
    if($(".hamburger").hasClass("is-active")){
        $(".page").css("opacity", "100");
    } else {
        $(".page").css("opacity", "0");
    }
});

function changeText(){
    $('#diskon').each(function () {
        if(+$(this).text().split(" %")[0] == 0){
        $(this).prop('Counter',0).animate({
            Counter: $('#diskon').attr('data-diskon')
        }, {
            duration: 1000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now) + " %");
            }
        });
        }
    });
}


$(window).on('resize', function(){
    $(".page").css("opacity", "0");
    if($(".hamburger").hasClass("is-active")){
        $(".hamburger").toggleClass("is-active");
    }
})

let offset = "";

$(window).on("scroll", function(){
    offset = $(window).scrollTop() + $(window).height();
    let posisi1 = $(".banner-title").offset().top;
    let posisi2 = $(".best-bg").offset().top;
    let posisi3 = $(".another-content").offset().top;
    let posisi4 = $(".about-content").offset().top;
    let posisi5 = $(".diskon-content").offset().top;
    let footer = $("#footer").offset().top;
    if(offset>10){
        $(".page").css("opacity", "0");
        if($(".hamburger").hasClass("is-active")){
            $(".hamburger").toggleClass("is-active");
        }
    }
    if ((posisi4 < offset) && (footer > offset)){
        if(!$(".about-name:first-child").hasClass("slideLeft")){
            // $(".about-name:first-child").toggleClass("slideLeft");
        }
        if(!$(".about-name:nth-child(2)").hasClass("slideRight")){
            // $(".about-name:nth-child(2)").toggleClass("slideRight");
        }
    } else {
        $(".about-name:nth-child(2)").removeClass("slideRight");
        $(".about-name:first-child").removeClass("slideLeft");
    }
    if(posisi5 < offset){
        changeText();
        $(".scroll-position").css(
            {"top": "80%"},
            {"border-radius":"20px"},
            {"transitonDuration": "2s"}
        );
    } else if (posisi4 < offset){
        $(".scroll-position").css(
            {"top": "60%"},
            {"border-radius":"20px"},
            {"transitonDuration": "2s"}
        );
    } else if (posisi3 < offset){
        $(".scroll-position").css(
            {"top": "40%"},
            {"border-radius":"20px"},
            {"transitonDuration": "2s"}
        );
    } else if (posisi2 < offset){
        $(".scroll-position").css(
            {"top": "20%"},
            {"border-radius":"20px"},
            {"transitonDuration": "2s"}
        );
    } else if (posisi1 < offset){
        $(".scroll-position").css(
            {"top": "0%"},
            {"border-radius":"20px"},
            {"transitonDuration": "2s"}
        );
    }
})
