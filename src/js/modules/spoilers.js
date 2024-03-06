function spoilers() {
  const boxes = Array.from(document.querySelectorAll(".box")); // считываем все элементы аккордеона в массив

  boxes.forEach((box) => {
    box.addEventListener("click", boxHandler); // при нажатии на бокс вызываем функцию boxHandler
  });

  function boxHandler(e) {
    e.preventDefault(); // сбрасываем стандартное поведение

    let currentBox = e.currentTarget; // определяем текущий бокс
    let currentContent = currentBox.querySelector(".content"); // находим скрытый контент

    // Проверяем, был ли клик совершен на контенте
    let isContentClick = e.target.closest(".content");

    // Если клик был совершен на контенте, просто завершаем выполнение функции
    if (isContentClick) {
      return;
    }

    currentBox.classList.toggle("active"); // присваиваем или удаляем активный класс

    // Проверяем, существует ли контент
    if (currentContent) {
      if (currentBox.classList.contains("active")) {
        // если класс активный ..
        currentContent.style.maxHeight = currentContent.scrollHeight + "px"; // открываем контент
      } else {
        // в противном случае
        currentContent.style.maxHeight = null; // удаляем стили maxHeight
      }
    }
  }
}

export default spoilers;
