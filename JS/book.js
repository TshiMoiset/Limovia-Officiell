let currentMonth = 0; // 0 represents January
let selectedDay = 0;
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
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
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
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

//Price random generator
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

// Region change

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