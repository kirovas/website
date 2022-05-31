var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);


// gsap.to(".features .fixed-image", {
//     duration: 0.5,
//     scale: 6,
//     transformOrigin: "top left",
//     ease: "none",
//     x:"50%",
//     scrollTrigger: {
//       trigger: ".features",
//       start: "top 40%",
//       end: "+=50%",
//       scrub: true
//     }
//   });

  let nft = gsap.timeline({
    scrollTrigger: {
        trigger: ".scroll-trigger",
        start: "top 50%", 
        end: "+=200", 
        scrub: 1, 
       markers: true,
      //pin: true
      }
  })
  gsap.set(['.features .fixed-image'], {opacity: 0, scale: 0.5, })
  gsap.set('.features .fixed-image', {y: 250})
  nft.to('.features .fixed-image', {duration: 1.5, opacity: 1, scale: 1, y: 500,})
  
  let width = window.innerWidth - 200;

  let nextSection = gsap.timeline({
    scrollTrigger: {
        trigger: ".subscribe",
        start: "top 90%", 
        end: "bottom 50%", 
        scrub: 1, 
       markers: true,
      //pin: true
      }
  })
  nextSection.to('.features .fixed-image', {duration: 0.5, opacity: 1, scale: 1, y: 500,x:width,})
  
  // let mintSection = gsap.timeline({
  //   scrollTrigger: {
  //       trigger: "#mint",
  //       start: "top 50%", 
  //       end: "bottom 50%", 
  //       scrub: 1, 
  //      markers: true,
  //     //pin: true
  //     }
  // })
  // mintSection.to('.features .fixed-image', {duration: 0.5, opacity: 1, scale: 0.5, y: 500,x:width,})

  let roadmapSection = gsap.timeline({
    scrollTrigger: {
        trigger: "#roadmap",
        start: "top 50%", 
        end: "bottom 50%", 
        scrub: 1, 
       markers: true,
      //pin: true
      }
  })
  roadmapSection.to('.features .fixed-image', {duration: 0.5, opacity: 0, scale: 0.5, y: 500,x:0,})

  wow = new WOW(
    {
    boxClass:     'wow',      
    animateClass: 'animate__animated', 
    offset:       50,          
    mobile:       true,       
    live:         true,        
    resetAnimation: true,
  }
  )
  wow.init();

  //mint
  const cards = document.querySelector(".cards");
const images = document.querySelectorAll(".card__img");
const backgrounds = document.querySelectorAll(".card__bg");
const range = 40;

// const calcValue = (a, b) => (((a * 100) / b) * (range / 100) -(range / 2)).toFixed(1);
const calcValue = (a, b) => (a/b*range-range/2).toFixed(1) // thanks @alice-mx

let timeout;
document.addEventListener('mousemove', ({x, y}) => {
  if (timeout) {
    window.cancelAnimationFrame(timeout);
  }
  	
  timeout = window.requestAnimationFrame(() => {
    const yValue = calcValue(y, window.innerHeight);
    const xValue = calcValue(x, window.innerWidth);

    cards.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`;

    [].forEach.call(images, (image) => {
      image.style.transform = `translateX(${-xValue}px) translateY(${yValue}px)`;
    });

    [].forEach.call(backgrounds, (background) => {
      background.style.backgroundPosition = `${xValue*.45}px ${-yValue*.45}px`;
    })
	})
}, false);

$(document).ready(function() {
  $('.cards').slick({
    infinite: true,
    slidesToShow: 3,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  $('.gal-carousel').slick({
    infinite: true,
    slidesToShow: 8,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  
  
});

var $circle = $('.circle'),
    $follow = $('.circle-follow');

function moveCircle(e) {
  TweenLite.to($circle, 0.3, {
      x: e.clientX,
      y: e.clientY
  });
  TweenLite.to($follow, 0.7, {
      x: e.clientX,
      y: e.clientY
  });  
}

function hoverFunc(e) {
  TweenLite.to($circle, 0.3, {
    opacity: 1,
    scale: 0
  });
  TweenLite.to($follow, 0.3, {
      scale: 3
  });  
}

function unhoverFunc(e) {
  TweenLite.to($circle, 0.3, {
    opacity: 1,
    scale: 1
  });
  TweenLite.to($follow, 0.3, {
      scale: 1
  });  
}

$(window).on('mousemove', moveCircle);

$("a,button").hover(hoverFunc, unhoverFunc);

