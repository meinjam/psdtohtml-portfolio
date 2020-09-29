// sticky nav
$(function () {
    // Show hide/nav in page load
    showHideNav();
    $(window).scroll(function () {
        showHideNav();
    });

    function showHideNav() {
        if ($(window).scrollTop() > 50) {
            $('nav').addClass('white-nav-top');
        } else {
            $('nav').removeClass('white-nav-top');
        }
    };
});

// add space in nav where it is in homepage
$(document).ready(function () {
    addAaa();
    $(window).scroll(function () {
        addAaa();
    });

    function addAaa() {
        if ($(window).scrollTop() > 50) {
            $('nav').removeClass('aaa');
        } else {
            $('nav').addClass('aaa');
        }
    };
});

//Progressbar
$('.skill1').circleProgress({
    value: .75,
    size: 150,
    fill: {
        gradient: ['#F5317F', '#FF7C6E']
    },
    animation: {
        duration: 1600,
        easing: 'circleProgressEasing'
    }
}).on('circle-animation-progress', function (event, progress) {
    $(this).find('.skill1percent').html(Math.round(75 * progress) + '<i>%</i>');
});

$('.skill2').circleProgress({
    value: .75,
    size: 150,
    animation: {
        duration: 1600,
        easing: 'circleProgressEasing'
    },
    fill: {
        gradient: ['#B122E5', '#FF63DE']
    },
}).on('circle-animation-progress', function (event, progress) {
    $(this).find('.skill2percent').html(Math.round(70 * progress) + '<i>%</i>');
});

$('.skill3').circleProgress({
    value: .95,
    size: 150,
    animation: {
        duration: 1600,
        easing: 'circleProgressEasing'
    },
    fill: {
        gradient: ['#1270E3', '#59C2FF']
    },
}).on('circle-animation-progress', function (event, progress) {
    $(this).find('.skill3percent').html(Math.round(95 * progress) + '<i>%</i>');
});

$('.skill4').circleProgress({
    value: .60,
    size: 150,
    animation: {
        duration: 1600,
        easing: 'circleProgressEasing'
    },
    fill: {
        gradient: ['#46EEAA', '#2CBFC7']
    },
}).on('circle-animation-progress', function (event, progress) {
    $(this).find('.skill4percent').html(Math.round(60 * progress) + '<i>%</i>');
});

$('.skill5').circleProgress({
    value: .85,
    size: 150,
    duration: 1600,
    fill: {
        gradient: ['#FF8359', '#FFDF40']
    },
}).on('circle-animation-progress', function (event, progress) {
    $(this).find('.skill5percent').html(Math.round(85 * progress) + '<i>%</i>');
});

// Testemonial Carousel
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    dots: true,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        767: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})

// Smooth Scroll
$(function () {

    $("a.smooth-scroll").click(function (e) {
        e.preventDefault();

        let section_id = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1250, "easeInOutExpo")
    })

});

// Portfolio filter
$(document).ready(function () {

    // init Isotope
    var $grid = $('#gallery-jjj').isotope({
        itemSelector: '.mix',
    });
    // filter items on button click
    $('#filter-button').on('click', 'p', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });
    //Active class
    $('#filter-button').each(function (i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'p', function () {
            $buttonGroup.find('.active').removeClass('active');
            $(this).addClass('active');
        });
    });

})