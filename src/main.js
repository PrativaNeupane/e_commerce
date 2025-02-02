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
  const flipcrossbtn = document.getElementById("flip-cross-btn");
  const flipCardContainer = document.getElementById("flipCardContainer");
  const flipCard = document.querySelector(".flip-card");
  let isVisible = false;

  loginbtn.addEventListener("click", function () {
    if (!isVisible) {
      flipCardContainer.classList.add("show");
      isVisible = true;
    }
  });
  //functionality to remove the flip container
  flipcrossbtn.addEventListener("click", function () {
    flipCardContainer.classList.remove("show");
    isVisible = false;
  });
  //fuctionality to flip the card
  const flipcardbtn = document.getElementById("flip-card-button");

  let showLoginForm = true;
  flipcardbtn.addEventListener("click", function () {
    if (showLoginForm) {
      flipCard.style.transform = "rotateY(0deg)";
      showLoginForm = false;
    } else {
      flipCard.style.transform = "rotateY(180deg)";
      showLoginForm = true;
    }
  });

  //to change the text each time we click on the button
  const flipCardButton = document.getElementById("flip-card-button");

  flipCardButton.addEventListener("click", function () {
    if (flipCardButton.innerHTML === "Click here to Sign Up") {
      flipCardButton.innerHTML = "Click here to Sign In";
    } else {
      flipCardButton.innerHTML = "Click here to Sign Up";
    }
  });
});
