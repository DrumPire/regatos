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
var mySwiper = new Swiper('.swiper-container-reviews', {
  navigation: {
    nextEl: '.news-next',
    prevEl: '.news-prev',
  },
  pagination: {
    el: '.news-pagination',
    clickable: true,
    renderBullet: function (index, activeClassName) {
      return `<span class="news-pagination-number ${activeClassName}">${
        index + 1
      }</span>`;
    },
  },
});



