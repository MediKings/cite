$('document').ready(function(){

    // Initialisation AOS Library
    AOS.init({
        delay: 100,
        duration: 2000,
        mirror: false,
        once: true,
    });

    $('#menu-btn').click(()=>{
        $('#menu').toggleClass('show hide')
    })


    // Initialisation Slider
    $('.imgs').slick({
        infinite: true,
        autoplay: true,
        speed: 500,
        arrows: false,
        slidesToShow: 3,
        slidesToScrool: 3,
        responsive: [
            // {
            //     breakpoint: 769,
            //     settings: {
            //         slidesToShow: 2,
            //         slidesToScrool: 2,
            //     }
            // },
            {
                breakpoint: 567,
                settings: {
                    slidesToShow: 2,
                    slidesToScrool: 2,
                }
            },
        ]
    });

})
