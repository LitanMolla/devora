const menu = document.getElementById('menu');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden')
})


$(document).ready(function () {
    $('.bg-slider').slick({
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 700,
        fade: true,
    });

    $('.client-reviews').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
    });

});

// Carousel 


