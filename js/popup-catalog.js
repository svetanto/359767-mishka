// Открытие и закрытие модального окна

var modal_open_button = document.querySelectorAll(".itemcard__cart");
var modal_window = document.querySelector(".cart-popup");

if (modal_open_button.length > 0) {
  for (var i = 0; i < modal_open_button.length; i++) {
    modal_open_button[i].addEventListener("click", function(evt) {
      evt.preventDefault();
      modal_window.classList.add("cart-popup--show");
    });
  }
}

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode == 27) {
    modal_window.classList.remove("cart-popup--show");
  }
});
