document.addEventListener("DOMContentLoaded", function () {
  const hamburgerBtn = document.getElementById("hamburger-menu");
  const crossBtn = document.getElementById("cross_btn");
  const mbNavbar = document.getElementById("mb_navbar");

  hamburgerBtn.addEventListener("click", function () {
    mbNavbar.style.display = "block";
  });

  crossBtn.addEventListener("click", function () {
    mbNavbar.style.display = "none";
  });

  window.addEventListener("resize", () => {
    if (mbNavbar.clientWidth > 1024) {
      mbNavbar.style.display = "none";
    }
  });

  // Functionality for the sign-in button
  const loginbtn = document.getElementById("button-container");
  const flipcard = document.getElementById("flipCardContainer");

  loginbtn.addEventListener("click", function () {
    // Toggle the visibility of the flipcard
    flipcard.classList.toggle("show");
  });
});
