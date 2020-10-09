const burgerButton = document.querySelector('.burger');


burgerButton.addEventListener('click', () => {
  console.log('click');
});


var mySwiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.slider-next',
    prevEl: '.slider-prev',
  },
});
