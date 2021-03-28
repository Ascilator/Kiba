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
        fade: true,
    })
    var slider = $('.adv_body');
    var sliderIsLive = false;

    if ($('html').width() < 500) {
        if (sliderIsLive === false) {
            slider.slick({
                dots: false,
                infinite: false,
                slidesToScroll: 1,
                arrows: false,
                variableWidth: true,
                easing: 'linear',
                autoplay: true,
                autoplaySpeed: 2000,
            });
            sliderIsLive = true;
        }

    } else {

        if (sliderIsLive === true) {
            slider.slick('unslick');
            sliderIsLive = false;
        }
    }
    $(window).resize(function () {
        if ($('html').width() < 500) {

            if (sliderIsLive === false) {
                slider.slick({
                    dots: false,
                    infinite: false,
                    slidesToScroll: 2,
                    arrows: false,
                    variableWidth: true,
                    easing: 'linear',
                    autoplay: true,
                    autoplaySpeed: 2000,
                });
                sliderIsLive = true;
            }
        } else {

            if (sliderIsLive === true) {
                slider.slick('unslick');
                sliderIsLive = false;
            }
        }

    });

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
    //traectory(arrows[0]);
    //traectory(arrows[1]);
}
let form = () => {
    let inputs = document.querySelectorAll('input');

    for (let input of inputs) {
        input.addEventListener('keydown', function () {
            if (this.value.length > 0) {
                this.classList.add('_black');
            } else {
                this.classList.remove('_black');
            }
        })
        input.addEventListener('change', function () {
            if (this.value.length > 0) {
                this.classList.add('_black');
            } else {
                this.classList.remove('_black');
            }
        })

    }
    inputs[2].addEventListener('change', function () {
        function validateEmail(email) { const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; return re.test(String(email).toLowerCase()); }
        if (validateEmail(this.value)) {
            this.classList.remove('_error');
        } else {
            this.classList.add('_error');
        }
    })
}
function traectory(props) {
    let n = Math.round(Math.random() * 2 + 2);
    function get_line() {
        return Math.random() * 150 - 75;
    }
    function get_timeout() {
        return Math.random() * 1000 + 1000;
    }
    function trasnform(i, n, trans) {

        props.style.transition = `${trans / 1000}s`;
        if (i === n - 1) {
            props.style.transform = `translate(0px, 0px)`;
        } else {
            props.style.transform = `translate(${get_line()}px, ${get_line()}px)`;
        }

    }

    let i = 0;
    let trans = get_timeout();

    setInterval(() => {
        trasnform(i, n, trans + 100);

        if (i === n - 1) {
            i = -1;
        }
        i++;
    }, trans);



}
document.addEventListener('DOMContentLoaded', function () {

    figmaAnimation();
}, false);
let inoutsFocus = () => {
    let inputs = document.querySelectorAll('input');
    for (input of inputs) {
        input.addEventListener('focus', function () {
            document.getElementById('chacnge_color').classList.add('_none');
        })
        input.addEventListener('blur', function () {
            document.getElementById('chacnge_color').classList.remove('_none');
        })
    }
}
inoutsFocus();


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

let rotationStar = () => {
    window.addEventListener('scroll', function () {
        var body = document.body,
            html = document.documentElement;
        rotation = window.pageYOffset / Math.max(body.scrollHeight, body.offsetHeight,
            html.clientHeight, html.scrollHeight, html.offsetHeight);

        let star = document.querySelector('.star>img');

        star.style.transform = `translate(-50%, -50%) rotate(${rotation * 400}deg)`
    })
}
rotationStar();
changeColor();
form();