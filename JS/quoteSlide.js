var slideIndex = 0;
var intervalId;

showSlides(slideIndex);
startAutoPlay();

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function startAutoPlay() {
  intervalId = setInterval(function () {
    plusSlides(1);
  }, 3000);
}

function fadeInNextSlide() {
  var slides = document.getElementsByClassName("slides");
  var currentSlide = slides[slideIndex];

  // Start fading out the current slide
  currentSlide.style.opacity = 0;

  // After a short delay, advance to the next slide and start fading it in
  setTimeout(function () {
    plusSlides(1);
    currentSlide.style.opacity = 1;
  }, 500); // Adjust the delay to your preference
}

function stopAutoPlay() {
  clearInterval(intervalId);
  setTimeout(startAutoPlay, 6000); // Restart after 10 seconds
}
