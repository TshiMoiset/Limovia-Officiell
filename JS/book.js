let currentMonth = 0; // 0 represents January
let selectedDay = 0;
const monthNames = [
  "Januari",
  "Februari",
  "Mars",
  "April",
  "Maj",
  "Juni",
  "Juli",
  "Augusti",
  "September",
  "Oktober",
  "November",
  "December",
];

function updateCalendar() {
  const currentMonthElement = document.getElementById("currentMonth");
  currentMonthElement.textContent = monthNames[currentMonth] + " 2024";

  const calendarMonth = document.getElementById("calendarMonth");
  calendarMonth.innerHTML = ""; // Clear previous month's days

  // Only create weekdays if they are not already present
  if (!document.querySelector(".weekdays")) {
    const weekdaysContainer = document.createElement("div");
    weekdaysContainer.classList.add("weekdays");

    // Display the days of the week
    for (let i = 0; i < 7; i++) {
      const weekdayElement = document.createElement("div");
      weekdayElement.textContent = [
        "Sön",
        "Mon",
        "Tis",
        "Ons",
        "Tor",
        "Fre",
        "Lör",
      ][i];
      weekdayElement.classList.add("weekday");
      weekdaysContainer.appendChild(weekdayElement);
    }

    calendarMonth.appendChild(weekdaysContainer);
  }

  const daysInMonth = new Date(2024, currentMonth + 1, 0).getDate();

  // Get the day of the week for the first day of the month (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const firstDayOfWeek = new Date(2024, currentMonth, 1).getDay();

  // Create placeholders for the days before the first day of the month
  for (let i = 0; i < firstDayOfWeek; i++) {
    const placeholder = document.createElement("div");
    placeholder.classList.add("day", "placeholder");
    calendarMonth.appendChild(placeholder);
  }

  // Create the days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const dayElement = document.createElement("div");
    dayElement.textContent = day;
    dayElement.classList.add("day");
    if (day === selectedDay) {
      dayElement.classList.add("active");
    }
    dayElement.addEventListener("click", function () {
      selectDate(day);
    });
    calendarMonth.appendChild(dayElement);
  }
}

function selectDate(day) {
  selectedDay = day;
  updateCalendar();
  const selectedDateElement = document.getElementById("selectedDate");
  selectedDateElement.textContent = `${day} ${monthNames[currentMonth]} 2024`;
}

function prevMonth() {
  currentMonth = (currentMonth - 1 + 12) % 12; // Handle wrap-around to December
  updateCalendar();
}

function nextMonth() {
  currentMonth = (currentMonth + 1) % 12; // Handle wrap-around to January
  updateCalendar();
}

// Initial update
updateCalendar();

//Price random generator ------------------------------
let selectedDayPrices = {};

function updateDynamicPrice() {
  // If the selected date has a stored price, display it
  if (selectedDayPrices[selectedDay] !== undefined) {
    const priceElement = document.getElementById("dynamicPrice");
    priceElement.textContent =
      selectedDayPrices[selectedDay].toFixed(1) + " kr";
  } else {
    // Otherwise, generate a new random price between 1000 and 5000
    const randomPrice = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;

    // Update the price in the HTML
    const priceElement = document.getElementById("dynamicPrice");
    priceElement.textContent = randomPrice.toFixed(1) + " kr";

    // Store the generated price for the selected date
    selectedDayPrices[selectedDay] = randomPrice;
  }
}

function selectDate(day) {
  selectedDay = day;
  updateCalendar();
  const selectedDateElement = document.getElementById("selectedDate");
  selectedDateElement.textContent = `${day} ${monthNames[currentMonth]} 2024`;

  // Call the function to update the dynamic price
  updateDynamicPrice();
}

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

// Time--------------------------------------------

// Function to update the time based on the input
function updateTime() {
  // Get the value of the time input
  const inputTime = document.getElementById("pickupTime").value;

  // Update the time element in the "bookingCalendarRight" section based on the input time
  const timeElementBookingRight = document.querySelector(
    ".bookingCalendarRight .time"
  );
  timeElementBookingRight.textContent = inputTime || "00:00"; // Use "00:00" if the input is empty
}

// Attach the updateTime function to the input event of the time field
document.getElementById("pickupTime").addEventListener("input", updateTime);

// Time wheel -----------------------------------

// Function to update the time based on the input
function updateTime() {
  // Get the value of the time input
  const inputTime = document.getElementById("pickupTime").value;

  // Update the time element in the "bookingCalendarRight" section based on the input time
  const timeElementBookingRight = document.querySelector(
    ".bookingCalendarRight .time"
  );
  timeElementBookingRight.textContent = inputTime || "00:00"; // Use "00:00" if the input is empty
}

// Attach the updateTime function to the input event of the time field
document.getElementById("pickupTime").addEventListener("input", updateTime);

// Nexet Page Button -----------------------------------

function nextPage() {
  const bookingCalendar = document.querySelector(".bookingCalendar");
  const serviceInfoText = document.querySelector(".serviceInfoText");
  const serviceLocations = document.querySelector(".serviceLocations");
  bookingCalendar.style.display = "none";
  serviceInfoText.style.display = "none";
  serviceLocations.style.display = "none";
}

// Payment

document.addEventListener("DOMContentLoaded", function () {
  const paymentWheel = document.querySelector(".paymentWheel");
  const cardPayment = document.querySelector(".cardPayment");
  const invoicePayment = document.querySelector(".invoicePayment");

  const selectPaymentWheel = document.querySelector(
    ".selectPaymentWheel select"
  );

  selectPaymentWheel.addEventListener("change", function () {
    const selectedOption = selectPaymentWheel.value;

    // Hide both sections initially
    cardPayment.classList.add("hidden");
    invoicePayment.classList.add("hidden");

    // Show the selected section based on the value
    if (selectedOption === "payNow") {
      cardPayment.classList.remove("hidden");
    } else if (selectedOption === "invoice") {
      invoicePayment.classList.remove("hidden");
    }
  });
});
