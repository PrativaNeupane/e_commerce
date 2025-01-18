
let navlinks = document.getElementsByClassName("nav_links")[0];  // Get the first element with class 'nav_links'

navlinks.style.maxHeight = "0px";  // Set initial height to 0

function togglemenu() {
  if (navlinks.style.maxHeight == "0px") {
    navlinks.style.maxHeight = "300px";  // Expand menu
  } else {
    navlinks.style.maxHeight = "0px";  // Collapse menu
  }
}
