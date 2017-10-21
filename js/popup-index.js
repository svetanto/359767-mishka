// Открытие и закрытие модального окна

var modal_open_button = document.querySelector(".week-product__link");
var modal_window = document.querySelector(".cart-popup");

modal_open_button.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal_window.classList.add("cart-popup--show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode == 27) {
    modal_window.classList.remove("cart-popup--show");
  }
});
