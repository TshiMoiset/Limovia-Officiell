document.addEventListener("DOMContentLoaded", function () {
  // Get the service parameter from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const service = urlParams.get("service");

  // Update the hero image based on the service parameter
  if (service === "Privatleasing") {
    document.querySelector(".serviceHeroImage").style.backgroundImage =
      "url('IMAGES/3VolvosInRow.jpg')";
    document.querySelector(".heroImageTitle").textContent =
      "Privatleasing Title";
  } else if (service === "Abonnemang") {
    document.querySelector(".serviceHeroImage").style.backgroundImage =
      "url('IMAGES/VolvoInterior.jpg')";
    document.querySelector(".heroImageTitle").textContent = "Abonnemang Title";
  } else if (service === "Flygplatstransfer") {
    document.querySelector(".serviceHeroImage").style.backgroundImage =
      "url('IMAGES/Airport.jpg')";
    document.querySelector(".heroImageTitle").textContent =
      "Flygplatstransfer Title";
  } else if (service === "Evenemangstransfer") {
    document.querySelector(".serviceHeroImage").style.backgroundImage =
      "url('IMAGES/WeddingRings.jpg')";
    document.querySelector(".heroImageTitle").textContent =
      "Evenemangstransfer Title";
  } else if (service === "Timbokning") {
    document.querySelector(".serviceHeroImage").style.backgroundImage =
      "url('IMAGES/CarWindowView.png')";
    document.querySelector(".heroImageTitle").textContent = "Timbokning Title";
  } else if (service === "Lokal Transfer") {
    document.querySelector(".serviceHeroImage").style.backgroundImage =
      "url('IMAGES/GuyOpensDoorForWoman.jpg')";
    document.querySelector(".heroImageTitle").textContent =
      "Lokal Transfer Title";
  } else if (service === "Stad till Stad-transfer") {
    document.querySelector(".serviceHeroImage").style.backgroundImage =
      "url('IMAGES/VolvoXC60BridgeUp.jpg')";
    document.querySelector(".heroImageTitle").textContent =
      "Stad till Stad-transfer";
  }
});
