// Loader

const elLoader = document.querySelector(".loader-wrapper");

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    elLoader.classList.add("close");
  }, 1500);
});

// Toggler

const elTogglerOpen = document.querySelector(".toggler--open");
const elTogglerClose = document.querySelector(".toggler--close");
const elNav = document.querySelector(".nav");
const elNavCloserWindow = document.querySelector(".nav__closer-window");
const elHeaderLogo = document.querySelector(".site-header__logo");

const navClose = () => {
  elTogglerClose.classList.remove("togglerOpen");
  elTogglerClose.classList.add("togglerClose");
  elTogglerOpen.classList.remove("togglerClose");
  elTogglerOpen.classList.add("togglerOpen");
  elNav.classList.remove("togglerOpen");
  document.body.removeAttribute("style");
};

elTogglerOpen.onclick = () => {
  elTogglerOpen.classList.remove("togglerOpen");
  elTogglerOpen.classList.add("togglerClose");
  elTogglerClose.classList.add("togglerOpen");
  elTogglerClose.classList.remove("togglerClose");
  elNav.classList.add("togglerOpen");
  document.body.style = "overflow: hidden;";
};

elTogglerClose.onclick = () => {
  navClose();
};

elNavCloserWindow.onclick = () => {
  navClose();
};

elHeaderLogo.onclick = () => {
  navClose();
};
