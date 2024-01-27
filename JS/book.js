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
