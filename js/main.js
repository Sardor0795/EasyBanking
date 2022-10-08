// Loader

const elLoader = document.querySelector(".lodaer-wrapper");

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

elTogglerOpen.onclick = () => {
  elTogglerOpen.classList.remove("open");
  elTogglerOpen.classList.add("close");
  elTogglerClose.classList.add("open");
  elTogglerClose.classList.remove("close");
  elNav.classList.add("open");
};

elTogglerClose.onclick = () => {
  elTogglerClose.classList.remove("open");
  elTogglerClose.classList.add("close");
  elTogglerOpen.classList.remove("close");
  elTogglerOpen.classList.add("open");
  elNav.classList.remove("open");
};

elNavCloserWindow.onclick = () => {
  elTogglerClose.classList.remove("open");
  elTogglerClose.classList.add("close");
  elTogglerOpen.classList.remove("close");
  elTogglerOpen.classList.add("open");
  elNav.classList.remove("open");
};
