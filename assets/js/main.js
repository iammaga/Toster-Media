const menu = document.querySelector("#menu");
const close = document.querySelector("#close_menu");
const burger_menu = document.querySelector("#burger_menu");
const btn_buy = document.querySelector("#btn_buy");
const checkout = document.querySelector("#checkout");
const close_checkout = document.querySelector("#close_checkout");

menu.addEventListener("click", () => {
  burger_menu.classList.remove("hidden");
});

close.addEventListener("click", () => {
  burger_menu.classList.add("hidden");
});

btn_buy.addEventListener("click", () => {
  checkout.classList.remove("hidden");
});

close_checkout.addEventListener("click", () => {
  checkout.classList.add("hidden");
});
