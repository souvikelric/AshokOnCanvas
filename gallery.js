const slides = document.querySelectorAll(".slide");

window.addEventListener("scroll", update);

update();

function update() {
  const windowHeight = (window.innerHeight / 6) * 5;

  slides.forEach((slide) => {
    const slideTop = slide.getBoundingClientRect().top;

    if (slideTop < windowHeight) {
      slide.classList.add("show");
    } else {
      slide.classList.remove("show");
    }
  });
}
