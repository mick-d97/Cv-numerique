AOS.init();

AOS.init({
    delay:5000,
    duration:400
    

})

var swiper = new Swiper('.swiper-container', {
    speed: 600,
    parallax: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
