function openNavbar() {
  document.getElementById("smallNavigation").style.width = "250px";
  document.getElementById("main").style.marginRight = "250px";
  document.getElementById("openNavbutton").style.display = "none";
  document.getElementById("closeNavbutton").style.display = "block"; // Display closeNavbutton
}

function closeNavbar() {
  document.getElementById("smallNavigation").style.width = "0";
  document.getElementById("main").style.marginRight = "0";
  document.getElementById("openNavbutton").style.display = "block";
  document.getElementById("closeNavbutton").style.display = "none";
}
