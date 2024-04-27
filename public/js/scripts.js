"use strict";

(() => {
  const tabs = document.querySelectorAll(".tabs button");
  const navItems = document.querySelectorAll(".header__nav li a");
  const burgerMenuNavItems = document.querySelectorAll(".burger-menu__nav li a");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((node) => node.classList.remove("active"));
      tab.classList.add("active");
    });
  });

  const currentPage = window.location.pathname;

  [...navItems, ...burgerMenuNavItems].forEach((navItem) => {
    const navItemPath = navItem.dataset.path;
    if (!navItemPath) return;

    if (currentPage.includes(navItemPath)) {
      navItem.classList.add("active");
    }
  });
})();
