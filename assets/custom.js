$(document).ready(function(){
    $('.quotes-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: '<button type="button" data-role="none" class="slick-next-custom slick-arrow" aria-label="Next" role="button"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg"><use xlink:href="#reuse-arrow-thin-right"></use></svg></button>',
        prevArrow: '<button type="button" data-role="none" class="slick-prev-custom slick-arrow" aria-label="Next" role="button"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg"><use xlink:href="#reuse-arrow-thin-left"></use></svg></button>',
        asNavFor: '.logos-carousel',
        autoplay: true,
        autoplaySpeed: 3000,
        adaptiveHeight: false
    });
    $('.logos-carousel').slick({
        infinite: true,
        slidesToShow: 5,
        centerMode: true,
        asNavFor: '.quotes-carousel',
        arrows: false,
        centerPadding: "0",
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3
              }
            }
        ]
    });  

    $('.flatlayslider').slick({
        dots: true,
        arrows: true,
        infinite: true,
        centerMode: false,
        nextArrow: '<button type="button" data-role="none" class="slick-next-custom slick-arrow" aria-label="Next" role="button"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg"><use xlink:href="#reuse-arrow-thin-right"></use></svg></button>',
        prevArrow: '<button type="button" data-role="none" class="slick-prev-custom slick-arrow" aria-label="Next" role="button"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg"><use xlink:href="#reuse-arrow-thin-left"></use></svg></button>'
    });
});


Fancybox.bind('[data-fancybox="images"]', {
  Thumbs: false,
});

$('.trucarry-slider-wrapper').slick({
  dots: true,
});

// Function to initialize the slider
function initSlider() {
  $('.tc-grid-container').slick({
    arrows: true,
    dots: true
  });
}

// Function to destroy the slider
function destroySlider() {
  $('.tc-grid-container').slick('unslick');
}

// Check window size on page load
$(document).ready(function() {
  if ($(window).width() <= 750) {
    initSlider();
  }
});

// Check window size when it's resized
$(window).resize(function() {
  if ($(window).width() <= 750) {
    initSlider();
  } else {
    destroySlider();
  }
});