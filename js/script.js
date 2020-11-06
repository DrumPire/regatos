const burgerButton = document.querySelector('.burger');
const mobile = document.querySelector('.mobile');
const mobileClose = document.querySelector('.mobile-close');
const overlay = document.querySelector('.overlay');
const openModal = document.querySelector('#modal');
const openModalResponse = document.querySelector('#modal-response');
const openFooterModal = document.querySelector('#footer-modal');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal-close');
const scrolling = document.querySelector('.scrolling');
const body = document.querySelector('body');
const comentsLink = document.querySelector('.coments-link');
const revievHidden = document.querySelector('.reviev-hidden');

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
});

openModal.addEventListener('click', () => {
  modal.classList.add('modal-open');
  body.classList.add('scrolling');
});

openFooterModal.addEventListener('click', () => {
  modal.classList.add('modal-open');
  body.classList.add('scrolling');
});

openModalResponse.addEventListener('click', () => {
  modal.classList.add('modal-open');
  body.classList.add('scrolling');
});

closeModal.addEventListener('click', () => {
  modal.classList.remove('modal-open');
  body.classList.remove('scrolling');
});

function toggleText() {
  const mainTexts = document.querySelectorAll('.js-toggle-text');
  const buttonMore = `<button class="coments-link more">Читать подробнее</button>`;
  const buttonLess = `<button class="coments-link less">Cвернуть отзыв</button>`;

  mainTexts.forEach((mainText) => {
    const text = mainText.textContent;

    if (mainText.textContent.length > 300) {
      mainText.textContent = text.slice(0, 300) + '...';
      mainText.insertAdjacentHTML('beforeend', buttonMore);
      mainText.addEventListener('click', (event) => {
        if (event.target.classList.contains('more')) {
          mainText.innerHTML = text + buttonLess;
        }
        if (event.target.classList.contains('less')) {
          mainText.innerHTML = text.slice(0, 300) + '...' + buttonMore;
        }
      });
    }
  });
}
toggleText();

function toggleTextIndex() {
  const mainTexts = document.querySelectorAll('.js-toggle-text-main');
  const buttonMore = `<button class="coments-link more">Читать подробнее</button>`;
  const buttonLess = `<button class="coments-link less">Cвернуть отзыв</button>`;

  mainTexts.forEach((mainText) => {
    const text = mainText.textContent;

    if (mainText.textContent.length > 130) {
      mainText.textContent = text.slice(0, 130) + '...';
      mainText.insertAdjacentHTML('beforeend', buttonMore);
      mainText.addEventListener('click', (event) => {
        if (event.target.classList.contains('more')) {
          mainText.innerHTML = text + buttonLess;
        }
        if (event.target.classList.contains('less')) {
          mainText.innerHTML = text.slice(0, 130) + '...' + buttonMore;
        }
      });
    }
  });
}
toggleTextIndex();

var mySwiper = new Swiper('.swiper-container', {
  speed: 1000,
  loop: true,
  disableOnInteraction: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
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
  disableOnInteraction: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
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
    disableOnInteraction: false,
  },
});

$(document).ready(function () {
  $('#mainForm').validate({
    rules: {
      username: {
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      email: 'required',
      review: 'required',
    },
    messages: {
      username: '',
      email: '',
      review: '',
    },
  });
  $('#modalForm').validate({
    rules: {
      username: {
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      email: 'required',
      review: 'required',
    },
    messages: {
      username: '',
      email: '',
      review: '',
    },
  });
  $('#helpsForm').validate({
    rules: {
      username: {
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      phone: 'required',
    },
    messages: {
      username: '',
      phone: '',
    },
  });
});
