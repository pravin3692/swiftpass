// Utility functions
const toggleClass = (element, className) => {
  element.classList.toggle(className);
};

// Scroll handling
const handleScroll = (elementId) => {
  const element = document.getElementById(elementId);
  const headerOffset = document.querySelector("header").offsetHeight;
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};

// Window scroll handling
const handleWindowScroll = () => {
  const header = document.querySelector("header");
  const bottomBtn = document.querySelector(".mobile-btn");

  header.classList.toggle("sticky", window.scrollY > 65);
  bottomBtn.classList.toggle("visible", window.scrollY > 75);
};

window.addEventListener("scroll", handleWindowScroll);

// App initialization
const app = (() => {
  let body, menu, menuItems;

  const init = () => {
    body = document.querySelector("body");
    menu = document.querySelector(".menu-icon");
    menuItems = document.querySelectorAll(".nav__list-item");

    menuItems.forEach((item) => {
      item.addEventListener("click", () => toggleClass(body, "nav-active"));
    });

    applyListeners();
  };

  const applyListeners = () => {
    menu.addEventListener("click", () => toggleClass(body, "nav-active"));
  };

  init();
})();
