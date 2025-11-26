/* =================== NAVBAR TOGGLE =================== */
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector("nav ul");

menuToggle?.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

/* =================== ABOUT SLIDER =================== */
let slideIndex = 0;
const slides = document.querySelectorAll(".about-slider .slide");

function showSlides() {
  slides.forEach((slide) => slide.classList.remove("active"));
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add("active");
}

if (slides.length > 0) {
  slides[0].classList.add("active");
  setInterval(showSlides, 3000); // كل 3 ثواني
}

/* =================== SMOOTH SCROLLING =================== */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
