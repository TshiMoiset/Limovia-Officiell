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
  }, 5000);
}

function stopAutoPlay() {
  clearInterval(intervalId);
}

