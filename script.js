const container = document.querySelector(".container");

const pictures = [
  "url('./assets/canvas1.jpg')",
  "url('./assets/canvas2.jpg')",
  "url('./assets/canvas3.jpg')",
  "url('./assets/canvas4.jpg')",
];

let index = 1;

setInterval(() => {
  index++;
  if (index > pictures.length - 1) {
    index = 0;
  }
  container.style.backgroundImage = pictures[index];
}, 3000);

const carousel = document.querySelector(".three-container");
const slides = document.querySelectorAll(".slide");

let count = 1;

setInterval(() => {
  carousel.style.transform = "translateY(" + -count * 100 + "%)";
  count++;
  if (count === slides.length) {
    count = 0;
  }
}, 2000);
