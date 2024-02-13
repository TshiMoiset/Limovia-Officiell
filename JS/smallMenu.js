let screenSizex = window.matchMedia("(max-width: 1025px)");
let screenSizey = window.matchMedia("(max-width: 568px)");

document
  .getElementById("smallNavigation")
  .addEventListener("click", function () {
    closeNavbar();
  });

function openNavbar() {
  document.getElementById("openNavbutton").style.display = "none";
  document.getElementById("closeNavbutton").style.display = "block";
  if (screenSizey.matches) {
    document.getElementById("smallNavigation").style.width = "100%";
  } else if (screenSizex.matches) {
    document.getElementById("smallNavigation").style.width = "35%";
  }
}

function closeNavbar() {
  document.getElementById("smallNavigation").style.width = "0";
  document.getElementById("openNavbutton").style.display = "block";
  document.getElementById("closeNavbutton").style.display = "none";
}
