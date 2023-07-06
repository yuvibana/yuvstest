window.onload = () => {
    var swiper = new Swiper(".newsSlider", {
        loop: true,
        loopFillGroupWithBlank: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        // cssMode: true,
        // mousewheel: true,
        // keyboard: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            576: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
    });
    

    $(".customdrpheder").click(function () {
        let obj = $(this)
        $(".customdrpList").removeClass('dropdownActive');
        obj.parent().find(".customdrpList").addClass('dropdownActive');
        $(document).bind("click", function (event) {
            $target = $(event.target);
            if (!$target.closest(".customDropDown").length &&
                $(".customDropDown .customdrpList").is(":visible")) {
                $(".customDropDown .customdrpList").removeClass('dropdownActive');
                $(document).unbind("click", function (event) { });
            }
        });
    });

    $(document).on('click', '.customDropDown  .customdrpList .dropcloser', function () {
        $(".customDropDown .customdrpList").removeClass('dropdownActive');
    })

    $(".hamburgerIcon").click(function () {
        $('.navList, .navmenu').toggleClass('active');
        $(document).bind("click", function (event) {
            $target = $(event.target);
            if (!$target.closest(".header").length &&
                $(".navList, .navmenu").is(":visible")) {
                $(".navList, .navmenu").removeClass('active');
                $(document).unbind("click", function (event) { });
            }
        });
    });
};