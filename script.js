const hamburger = document.querySelector(".header__hamburger");
const navMenu = document.querySelector(".header__main");
const navLinks = document.querySelectorAll(".header-link");
const currentYear = document.querySelector("#currentYear");

const year = new Date().getFullYear();
currentYear.innerText = year;

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

navLinks.forEach((n) =>
  n.addEventListener("click", function () {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
