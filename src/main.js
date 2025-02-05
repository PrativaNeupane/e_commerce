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
  const flipcrossbtn = document.querySelectorAll(".flip-cross-btn");
  const flipCardContainer = document.querySelector(".modal-container");
  const flipCard = document.querySelector(".flip-card");

  loginbtn.addEventListener("click", function () {
    flipCardContainer.style.display = "flex";
  });

  // Functionality to remove the flip container

  flipcrossbtn.forEach((crossBtn) => {
    crossBtn.addEventListener("click", function () {
      flipCardContainer.style.display = "none";
    });
  });

  // Functionality to flip the card
  const switchButtons = document.querySelectorAll(".switch");
  let isFlipped = false;

  switchButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const flipCard = document.querySelector(".flip-card-inner");

      // Toggle the flip state
      if (isFlipped) {
        flipCard.style.transform = "rotateY(0deg)";
      } else {
        flipCard.style.transform = "rotateY(180deg)";
      }

      isFlipped = !isFlipped;
    });
  });
});
