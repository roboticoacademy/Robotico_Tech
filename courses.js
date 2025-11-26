// ====== Navbar Toggle for Mobile ======
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// ====== Join Us Buttons ======
const joinButtons = document.querySelectorAll(".join-btn");

joinButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    // Get course name from card
    const courseCard = btn.closest(".course-card");
    const courseName = courseCard.querySelector(".card-front h3").textContent;

    // Redirect to join.html with course name as parameter
    window.location.href = `join.html?course=${encodeURIComponent(courseName)}`;
  });
});
