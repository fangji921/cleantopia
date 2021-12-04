$(document).ready(function () {

    $("main .mockup_wrapper, main .text_wrapper").addClass("fade");

    var scrLeng = $(".scr").length;

    //scr 개수만큼 메뉴버튼 만들기

    for (i = 0; i < scrLeng; i++) {

        $("main .scroll_bar").append("<li></li>");
        $(".scroll_bar li").eq(0).addClass("menu_on");

    }

    //i번째 버튼 클릭시 해당 영역으로 이동

    $(".scroll_bar li").on("click", function () {

        var i = $(this).index();
        var offSet = $(".scr").eq(i).offset().top;

        $("html,body").stop().animate({
            "scrollTop": offSet
        }, 800)

    })

    //array에 각 섹션의 offsetTop 값 담기

    var arr = new Array;

    for (i = 0; i < scrLeng; i++) {

        var secOffset = $(".scr").eq(i).offset().top;
        arr.push(secOffset);

    }

    //각 섹션 도달시 이벤트 발생

    $(window).on("scroll", function () {

        var winTop = $(window).scrollTop();

        for (i = 0; i < scrLeng; i++) {

            if (winTop >= arr[i] && winTop < arr[i + 1]) {

                $(".scroll_bar li").eq(i).addClass("menu_on").siblings().removeClass("menu_on");

            } else if (winTop >= arr[scrLeng - 1]) {
                $(".scroll_bar li").eq(scrLeng - 1).addClass("menu_on").siblings().removeClass("menu_on");
            }

        }
        if (winTop >= arr[1] && winTop < arr[2]) {
            $(".sec_01 .text_wrapper p>span").addClass("text_up");
            $(".sec_01 .img_wrapper").addClass("slide_in_right");
        } else if (winTop >= arr[2] && winTop < arr[3]) {
            $(".sec_02 .persona").addClass("fade");
        } else if (winTop >= arr[3] && winTop < arr[4]) {
            $(".sec_03 .old_app").addClass("fade");
        } else if (winTop >= arr[4] && winTop < arr[5]) {
            $(".sec_04 .sol_box").addClass("fade").siblings(".cir").addClass("scale_in").siblings(".arrow").find("span").addClass("slide");
            $(".sec_04 .cir div:first-child").addClass("spread_01");
            $(".sec_04 .cir div:nth-child(2)").addClass("spread_02");
            $(".sec_04 .cir div:nth-child(3)").addClass("spread_03");
        } else if (winTop >= arr[5] && winTop < arr[6]) {
            $(".sec_05 .con").addClass("fade");
        } else if (winTop >= arr[6] && winTop < arr[7]) {
            $("svg").addClass("active")
        } else if (winTop >= arr[7] && winTop < arr[8]) {
            $(".sec_07 .mockup_wrapper, .sec_07 .text_wrapper").addClass("fade");
            $(".sec_07 .mockup_box").addClass("card_spread");
        } else if (winTop >= arr[8] && winTop < arr[9]) {
            $(".sec_08 .mockup_wrapper, .sec_08 .text_wrapper").addClass("fade");
        } else if (winTop >= arr[9] && winTop < arr[10]) {
            $(".sec_09 .mockup_wrapper, .sec_09 .text_wrapper").addClass("fade");
        } else if (winTop >= arr[10] && winTop < arr[11]) {
            $(".sec_10 .mockup_box, .sec_10 .text_wrapper").addClass("fade");
        } else if (winTop >= arr[11] && winTop < arr[12]) {
            $(".sec_11 .mockup_wrapper, .sec_11 .text_wrapper").addClass("fade");
        } else if (winTop >= arr[12] && winTop < arr[13]) {
            $(".sec_12 .mockup_wrapper, .sec_12 .text_wrapper").addClass("fade");
        } else if (winTop >= arr[13] && winTop < arr[14]) {
            $(".sec_13 .mockup_box").addClass("fade");
        }else if (winTop >= arr[14] && winTop < arr[15]) {
            $(".sec_14 .mockup_box").addClass("scale_in");
            $(".sec_14 .effect_box:first-child").addClass("scale-in02");
            $(".sec_14 .effect_box:nth-child(2)").addClass("spread_04");
            $(".sec_14 .effect_box:nth-child(3)").addClass("spread_05");
            $(".sec_14 .effect_box:nth-child(4)").addClass("spread_06");
        }

    })

});