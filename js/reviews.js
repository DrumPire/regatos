const reviewsContent = document.querySelector('.reviews-content');
const load = document.querySelector('.load');

function createReviews() {
  const reviews = `
    <div class="reviews-content_wrapp">
      <div class="main-wrap">
      <div class="main-img">
        <img src="img/reviews/review.png" alt="photo">
      </div>
      <div class="main-review">
          <div class="main-coments">
            <span class="main-data">27.03.2019</span>
            <h3 class="main-title">Евгений</h3>
          </div>
      </div>
      <div class="dekor-img"><img src="img/news/elem.png" alt="photo" class="elem"></div>
      </div>
      <p class="main-text">
        Спасибо вам большое) быстро подобрали хороший вариант, отель супер (ездили в Египет), эмоций целое море:))
        Все на высшем уровне;) Очень рекомендую))
      </p>
    </div>
    <div class="reviews-content_wrapp">
    <div class="main-wrap">
      <div class="main-img">
        <img src="img/reviews/review.png" alt="photo">
      </div>
      <div class="main-review">
          <div class="main-coments">
            <span class="main-data">27.03.2019</span>
            <h3 class="main-title">Sevgi Hacikasımoğlu</h3>
          </div>
      </div>
      <div class="dekor-img"><img src="img/news/elem.png" alt="photo" class="elem"></div>
    </div>
    <p class="main-text">
      Все чётко и слажено, спасибо что вы есть, советую всем обращаться только в Регатос!
    </p>
    </div>
    <div class="reviews-content_wrapp">
    <div class="main-wrap">
      <div class="main-img">
        <img src="img/reviews/review.png" alt="photo">
      </div>
      <div class="main-review">
          <div class="main-coments">
            <span class="main-data">27.03.2019</span>
            <h3 class="main-title">Сергей Ерохин</h3>
          </div>
      </div>
      <div class="dekor-img"><img src="img/news/elem.png" alt="photo" class="elem"></div>
    </div>
    <p class="main-text">
      Отличное агентство, профессионалы своего дела. Покупали авиабилеты, подобрал нам самый оптимальный 
      и удобный вариант, все объяснили подсказали.
    </p>
    </div>
    <div class="reviews-content_wrapp">
    <div class="main-wrap">
      <div class="main-img">
        <img src="img/reviews/review.png" alt="photo">
      </div>
      <div class="main-review">
          <div class="main-coments">
            <span class="main-data">27.03.2019</span>
            <h3 class="main-title">Елена Сытник</h3>
          </div>
      </div>
      <div class="dekor-img"><img src="img/news/elem.png" alt="photo" class="elem"></div>
    </div>
    <p class="main-text">
      Приветливые девушки, все подскажут, расскажут, проконсультируют и подберут подходящий вариант
    </p>
    </div>
    <div class="reviews-content_wrapp">
          <div class="main-wrap">
            <div class="main-img">
              <img src="img/reviews/review.png" alt="photo">
            </div>
            <div class="main-review">
                <div class="main-coments">
                  <span class="main-data">27.03.2019</span>
                  <h3 class="main-title">Пятый Отзыв</h3>
                </div>
            </div>
            <div class="dekor-img"><img src="img/news/elem.png" alt="photo" class="elem"></div>
          </div>
          <p class="main-text">
            Отличное агентство, профессионалы своего дела. Покупали авиабилеты, подобрал нам самый оптимальный 
            и удобный вариант, все объяснили подсказали.
          </p>
        </div>
  `;

  reviewsContent.insertAdjacentHTML('beforeend', reviews);
}

load.addEventListener('click', createReviews);