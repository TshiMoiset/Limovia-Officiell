// Read the query parameter to get the selected service
const urlParams = new URLSearchParams(window.location.search);
const selectedService = urlParams.get("service");

// Update the title based on the selected service
if (selectedService) {
  document.title = `Limovia | ${selectedService}`;
}

document.addEventListener("DOMContentLoaded", function () {
  // Get the service parameter from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const service = urlParams.get("service");

  // Update the service name based on the selected service
  updateServiceName(service);
});

function updateServiceName(service) {
  // Get the element with the id "serviceName"
  const serviceNameElement = document.getElementById("serviceName");

  // Update the content based on the selected service
  if (service === "Privatleasing") {
    serviceNameElement.textContent = "Privatleasing";
  } else if (service === "Abonnemang") {
    serviceNameElement.textContent = "Abonnemang";
  } else if (service === "Flygplatstransfer") {
    serviceNameElement.textContent = "Flygplatstransfer";
  } else if (service === "Evenemangstransfer") {
    serviceNameElement.textContent = "Evenemangstransfer";
  } else if (service === "Timbokning") {
    serviceNameElement.textContent = "Timbokning";
  } else if (service === "Lokal Transfer") {
    serviceNameElement.textContent = "Lokal Transfer";
  } else if (service === "Stad till Stad-transfer") {
    serviceNameElement.textContent = "Stad till Stad-transfer";
  }
}
