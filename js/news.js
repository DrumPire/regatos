function toggleText(elements, length) {
  const buttonMore = `<button class="coments-link more">Читать подробнее</button>`;
  const buttonLess = `<button class="coments-link less">Cвернуть новость</button>`;

  elements.forEach((mainText) => {
    const text = mainText.textContent;

    if (mainText.textContent.length > length) {
      mainText.textContent = text.slice(0, length) + "...";
      mainText.insertAdjacentHTML("beforeend", buttonMore);
      mainText.addEventListener("click", (event) => {
        if (event.target.classList.contains("more")) {
          mainText.innerHTML = text + buttonLess;
        }
        if (event.target.classList.contains("less")) {
          mainText.innerHTML = text.slice(0, length) + "..." + buttonMore;
        }
      });
    }
  });
}

const newsPage = document.querySelectorAll(".js-toggle-text-news");

toggleText(newsPage, 130);