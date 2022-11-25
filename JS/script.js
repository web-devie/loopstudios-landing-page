const btnNav = document.querySelectorAll(".btn--mobile");
const navBox = document.querySelector(".navigation-box");

btnNav.forEach(function (btn) {
  btn.addEventListener("click", () => {
    navBox.classList.toggle("nav-open");
  });
});
