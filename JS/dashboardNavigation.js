let screenSizex = window.matchMedia("(max-width: 1025px)");
let screenSizey = window.matchMedia("(max-width: 568px)");
let smallNavigation = document.getElementById("smallDashboardLinks");

document
  .getElementById("openDashboardNav")
  .addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent click event from reaching document when open button is clicked
    openDashboardNav();
  });

document
  .getElementById("closeDashboardNav")
  .addEventListener("click", function () {
    closeDashboardNav();
  });

// Add event listeners to buttons and links within the navbar to close the navbar when clicked
let navbarElements = smallDashboardLinks.querySelectorAll("button, a");
for (let i = 0; i < navbarElements.length; i++) {
  navbarElements[i].addEventListener("click", closeDashboardNav);
}

function openDashboardNav() {
  document.getElementById("openDashboardNav").style.display = "block";
  document.getElementById("closeDashboardNav").style.display = "block";
  if (screenSizey.matches) {
    smallDashboardLinks.style.width = "100%";
  } else if (screenSizex.matches) {
    smallDashboardLinks.style.width = "50%";
  }
  document.addEventListener("click", closeNavbarOutside);
}

function closeDashboardNav() {
  smallDashboardLinks.style.width = "0";
  document.getElementById("openDashboardNav").style.display = "block";
  document.getElementById("closeDashboardNav").style.display = "none";
  document.removeEventListener("click", closeNavbarOutside);
}

function closeNavbarOutside(event) {
  if (!smallDashboardLinks.contains(event.target)) {
    closeDashboardNav();
  }
}
