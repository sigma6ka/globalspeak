function toggleBtn() {
  // const authForms = document.querySelectorAll(".auth__form");
  const authBtns = document.querySelectorAll(".auth__btn");

  authBtns.forEach(function (button) {
    button.addEventListener("click", function () {
      // Удаляем класс _active у всех кнопок
      authBtns.forEach(function (btn) {
        btn.classList.remove("_active");
      });
      // Добавляем класс _active к нажатой кнопке
      button.classList.add("_active");

      // Определяем класс формы для показа/скрытия
      var formClass = button.classList.contains("_sign-in")
        ? "_sign-in"
        : "_sign-up";

      // Показываем соответствующую форму и скрываем другую форму
      var forms = document.querySelectorAll(".auth__form");
      forms.forEach(function (form) {
        if (form.classList.contains(formClass)) {
          form.classList.add("_show");
        } else {
          form.classList.remove("_show");
        }
      });
    });
  });
}

export default toggleBtn;
