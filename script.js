const nav = document.getElementById("nav");
const navBtn = document.getElementById("nav-btn");
const hamburger = document.getElementById("hamburger");
const cross = document.getElementById("cross");
const overlay = document.getElementById("overlay");

navBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
  hamburger.classList.toggle("hamburger-active");
  cross.classList.toggle("cross-active");
  overlay.classList.toggle("slide");
});
