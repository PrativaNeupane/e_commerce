document.addEventListener("DOMContentLoaded", function () {
  const hamburgerBtn = document.getElementById("hamburger-menu");
  const crossBtn = document.getElementById("cross_btn");
  const mbNavbar = document.getElementById("mb_navbar");

  hamburgerBtn.addEventListener("click", function (e) {
    mbNavbar.style.display = "block";
  });

  crossBtn.addEventListener("click", function (e) {
    mbNavbar.style.display = "none";
  });
});
