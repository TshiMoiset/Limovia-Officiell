document.addEventListener("DOMContentLoaded", function () {
  // DOM elements
  const bookingCalendarSection = document.querySelector(".bookingCalendar");
  const checkoutFormSection = document.querySelector(".checkoutForm");
  const nextPageButton = document.querySelector(".nextPage");
  const goBackButton = document.querySelector(".backButton");
  const serviceInfoText = document.querySelector(".serviceInfoText");
  const paymentInfoText = document.querySelector(".paymentInfoText");
  const serviceLocations = document.querySelector(".serviceLocations");
  const regionSelect = document.querySelector(".selectWheelRegion select");
  const selectedDate = document.getElementById("selectedDate");
  const pickupTime = document.getElementById("pickupTime");

  // Event listener for next page button
  nextPageButton.addEventListener("click", function () {
    // Validation (if needed)
    /* 
    if (
      regionSelect.value === "" ||
      selectedDate.innerText === "xx Januari 2024" ||
      pickupTime.value === ""
    ) {
      alert(
        "Se till att välja region, datum och tid innan du fortsätter till nästa steg."
      );
      return;
    }
    */

    // Hide booking calendar and show checkout form
    bookingCalendarSection.style.display = "none";
    checkoutFormSection.style.display = "block";

    // Hide service info text and locations, show payment info text
    serviceInfoText.style.display = "none";
    serviceLocations.style.display = "none";
    paymentInfoText.style.display = "block";
  });

  // Event listener for go back button
  goBackButton.addEventListener("click", function () {
    // Toggle display of checkout form and booking calendar sections
    if (checkoutFormSection.style.display === "block") {
      checkoutFormSection.style.display = "none";
      bookingCalendarSection.style.display = "grid"; // Assuming booking calendar is displayed as grid
    } else {
      checkoutFormSection.style.display = "block";
      bookingCalendarSection.style.display = "none";
    }
  });
});

// Function to confirm booking
function confirmBooking() {
  // Hide all sections except the thank you page
  document.querySelectorAll("section").forEach((section) => {
    if (!section.classList.contains("thankYouPage")) {
      section.style.display = "none";
    }
  });

  // Display the thank you page
  document.querySelector(".thankYouPage").style.display = "block";
}
