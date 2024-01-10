document.addEventListener("DOMContentLoaded", function () {
  // Get all slide elements
  var slides = document.querySelectorAll(".carousel-slide");

  // Initialize current slide index
  var currentSlide = 0;

  // Function to show the current slide
  function showSlide(index) {
    slides.forEach(function (slide, i) {
      if (i === index) {
        slide.style.display = "flex";
      } else {
        slide.style.display = "none";
      }
    });
  }

  // Initial display
  showSlide(currentSlide);

  // Function to navigate to the next slide
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  // Function to navigate to the previous slide
  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  // Attach click event listeners to navigation buttons using class selectors
  document
    .querySelector(".prevCarfleetBtn")
    .addEventListener("click", prevSlide);
  document
    .querySelector(".nextCarFleetbtn")
    .addEventListener("click", nextSlide);
});
