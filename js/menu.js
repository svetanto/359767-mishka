// Открытие и закрытие мобильного меню

var menu_toggle_button = document.querySelector(".menu-toggle");
var mobile_sitemenu = document.querySelector(".site-menu");
var mobile_usermenu = document.querySelector(".user-menu");

menu_toggle_button.classList.remove("menu-toggle--nojs");
mobile_sitemenu.classList.add("site-menu--closed");
mobile_usermenu.classList.add("user-menu--closed");

menu_toggle_button.addEventListener("click", function(evt) {
  evt.preventDefault();
  menu_toggle_button.classList.toggle("menu-toggle--open");
  mobile_sitemenu.classList.toggle("site-menu--open");
  mobile_usermenu.classList.toggle("user-menu--open");
});
