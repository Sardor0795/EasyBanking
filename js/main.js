const elLoader = document.querySelector(".lodaer-wrapper");

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    elLoader.classList.add("close");
  }, 1500);
});
