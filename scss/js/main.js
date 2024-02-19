let modeBtn = document.getElementById("light-dark");

modeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

const hamburger = document.querySelector(".hamburger");
const nav2 = document.querySelector(".nav2");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav2.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
