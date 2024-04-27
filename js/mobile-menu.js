(() => {
  const refs = {
    openBurgerBtn: document.querySelector("[data-burger-open]"),
    closeBurgerBtn: document.querySelector("[data-burger-close]"),
    burgerMenu: document.querySelector("[data-burger]"),
    body: document.querySelector("body"),
  };

  refs.openBurgerBtn.addEventListener("click", toggleBurger);
  refs.closeBurgerBtn.addEventListener("click", toggleBurger);

  function toggleBurger() {
    refs.burgerMenu.classList.toggle("is-hidden");

    if (refs.burgerMenu.classList.contains("is-hidden")) {
      refs.body.style.overflow = "auto";
    } else {
      refs.body.style.overflow = "hidden";
    }
  }
})();