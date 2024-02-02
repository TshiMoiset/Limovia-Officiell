document.addEventListener("DOMContentLoaded", function () {
  const bookingCalendarSection = document.querySelector(".bookingCalendar");
  const checkoutFormSection = document.querySelector(".checkoutForm");
  const nextPageButton = document.querySelector(".nextPage");
  const serviceInfoText = document.querySelector(".serviceInfoText");
  const paymentInfoText = document.querySelector(".paymentInfoText");
  const serviceLocations = document.querySelector(".serviceLocations");
  const regionSelect = document.querySelector(".selectWheelRegion select");
  const selectedDate = document.getElementById("selectedDate");
  const pickupTime = document.getElementById("pickupTime");

  nextPageButton.addEventListener("click", function () {
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
    } */

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
