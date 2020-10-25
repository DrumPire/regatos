const burgerButton = document.querySelector('.burger');
const mobile = document.querySelector('.mobile');
const mobileClose = document.querySelector('.mobile-close');
const overlay = document.querySelector('.overlay');
const openModal = document.querySelector('#modal');
const openFooterModal = document.querySelector('#footer-modal');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal-close');
const scrolling = document.querySelector('.scrolling');
const body = document.querySelector('body');

burgerButton.addEventListener('click', () => {
  mobile.classList.add('open');
  overlay.classList.add('active');
});

mobileClose.addEventListener('click', () => {
  mobile.classList.remove('open');
  overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
  mobile.classList.remove('open');
  overlay.classList.remove('active');
})

openModal.addEventListener('click', () => {
  modal.classList.add('modal-open');
  body.classList.add('scrolling');
})

openFooterModal.addEventListener('click', () => {
  modal.classList.add('modal-open');
  body.classList.add('scrolling');
})

closeModal.addEventListener('click', () => {
  modal.classList.remove('modal-open');
  body.classList.remove('scrolling');
})


var mySwiper = new Swiper('.swiper-container', {
  speed: 1000,
  loop: true,
  autoplay: {
    delay: 10000,
  },
  navigation: {
    nextEl: '.slider-next',
    prevEl: '.slider-prev',
  },
});
var mySwiper = new Swiper('.swiper-container-reviews', {
  speed: 1000,
  loop: true,
  autoplay: {
    delay: 10000,
  },
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
var mySwiper = new Swiper('.swiper-container-coments', {
  speed: 1000,
  loop: true,
  autoplay: {
    delay: 10000,
  },
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

var mySwiper = new Swiper('.swiper-container-sponsors', {
  speed: 15000,
  loop: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false
  },
});

$(document).ready(function() {
  $("#mainForm").validate({
    rules: {
      username: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      email: "required",
      review: "required"
    },
    messages: {
      username: "",
      email: "",
      review: ""
    }
  });
  $("#modalForm").validate({
    rules: {
      username: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      email: "required",
      review: "required"
    },
    messages: {
      username: "",
      email: "",
      review: ""
    }
  });
});

