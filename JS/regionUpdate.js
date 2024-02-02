// Region change ------------------------------------------

// Function to update the place based on the selected region
function updatePlace() {
  // Get the selected region from the dropdown
  const selectedRegion = document.querySelector(
    ".selectWheelRegion select"
  ).value;

  // Update the place element based on the selected region
  const placeElement = document.querySelector(".place");
  switch (selectedRegion) {
    case "option1":
      placeElement.textContent = "Hallands Län";
      break;
    case "option2":
      placeElement.textContent = "Jönköpings Län";
      break;
    case "option3":
      placeElement.textContent = "Kalmar Län";
      break;
    case "option4":
      placeElement.textContent = "Kronobergs Län";
      break;
    case "option5":
      placeElement.textContent = "Stockholms Län";
      break;
    case "option6":
      placeElement.textContent = "Södermanlands Län";
      break;
    case "option7":
      placeElement.textContent = "Uppsala Län";
      break;
    case "option8":
      placeElement.textContent = "Värmlands Län";
      break;
    case "option9":
      placeElement.textContent = "Västmanlands Län";
      break;
    case "option10":
      placeElement.textContent = "Västra Gotlands Län";
      break;
    case "option11":
      placeElement.textContent = "Örebro Län";
      break;
    case "option12":
      placeElement.textContent = "Östergötlands Län";
      break;
    default:
      placeElement.textContent = "Region";
  }
}

// Attach the updatePlace function to the change event of the dropdown
document
  .querySelector(".selectWheelRegion select")
  .addEventListener("change", updatePlace);
