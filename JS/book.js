// Nexet Page Button -----------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const bookingCalendarSection = document.querySelector(".bookingCalendar");
  const checkoutFormSection = document.querySelector(".checkoutForm");
  const nextPageButton = document.querySelector(".nextPage");
  const serviceInfoText = document.querySelector(".serviceInfoText");
  const paymentInfoText = document.querySelector(".paymentInfoText");
  const serviceLocations = document.querySelector(".serviceLocations");

  nextPageButton.addEventListener("click", function () {
    // Hide the bookingCalendar section
    bookingCalendarSection.style.display = "none";

    // Show the checkoutForm section
    checkoutFormSection.style.display = "block";

    // Hide serviceInfoText, serviceLocations, and show paymentInfoText
    serviceInfoText.style.display = "none";
    serviceLocations.style.display = "none";
    paymentInfoText.style.display = "block"; // Set it to 'block' or 'inline-block' based on your layout
  });
});

