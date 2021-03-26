jQuery(function () {


    $('._drop_down_title').click(function () {

        $('._drop_down_title').not(this).parent().removeClass('_active');
        $('._drop_down_title').not(this).siblings().slideUp();
        $(this).siblings().slideToggle();
        $(this).parent().toggleClass('_active');

    });
    $('._drop_item').click(function () {
        $(this).parent().slideUp();
        $(this).parent().parent().removeClass('_active');
        $(this).parent().siblings('._drop_down_title').children('.text').text($(this).children('.name').text());
    });



    let accordeon = () => {


        $('.acc_title').click(function () {
            $('.acc_title').not(this).siblings('.acc_body').slideUp();
            $(this).siblings('.acc_body').slideToggle();

            $('.acc_title').not(this).parent().removeClass('_active');
            $(this).parent().toggleClass('_active');
        })
    }

    $('.slider_body').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: $('.next_arrow'),
        prevArrow: $('.prev_arrow'),
        infinite: false,
    })
    accordeon();
    $('.star').click(function () {

        $([document.documentElement, document.body]).animate({
            scrollTop: $(".footer").offset().top
        }, 2000);
    })


});
let figmaAnimation = () => {
    let arrows = document.querySelectorAll('.arrow_item');

    for (let a = 0; a < arrows.length; a++) {
        traectory(arrows[a]);
    }
}

function traectory(props) {
    let n = Math.round(Math.random() * 2 + 2);
    function get_line() {
        return Math.random() * 200 - 100;
    }
    function trasnform(i, n) {

        if (i === n - 1) {
            props.style.transform = `translate(0px, 0px)`;
            //console.log(142);
        } else {
            props.style.transform = `translate(${get_line()}px, ${get_line()}px)`;
        }

    }

    let i = 0;
    setInterval(() => {
        trasnform(i, n);

        if (i === n - 1) {
            i = -1;
        }
        i++;
    }, 1000);



}
document.addEventListener('DOMContentLoaded', function () {

    figmaAnimation();
}, false);


let changeColor = () => {
    let colors = [
        "color_1",
        "color_2",
        "color_3",
        "color_4",
        "color_5",
        "color_1"
    ]
    let changeBtn = document.getElementById('chacnge_color');
    let body = document.querySelector('.big_wrapper')
    let currentIndex = 0;
    changeBtn.addEventListener('click', function () {
        if (currentIndex === 5) {
            currentIndex = 0;
        }
        body.className = "big_wrapper";
        body.classList.add(colors[currentIndex]);
        changeBtn.className = "chancge";
        changeBtn.classList.add(colors[currentIndex]);
        currentIndex++;
    });
}
changeColor();