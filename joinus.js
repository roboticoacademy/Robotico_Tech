
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.querySelector('nav ul');
    const openFormBtn = document.getElementById('openFormBtn');
    const closeFormBtn = document.getElementById('closeFormBtn');
    const popupForm = document.getElementById('popupForm');
    const joinForm = document.getElementById('joinForm');

    menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    });

    openFormBtn.addEventListener('click', () => {
    popupForm.style.display = "flex";
    });

    closeFormBtn.addEventListener('click', () => {
    popupForm.style.display = "none";
    });

   joinForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = {
    name: joinForm.name.value,
    age: joinForm.age.value,
    course: joinForm.course.value,
    email: joinForm.email.value,
    phone: joinForm.phone.value,
  };

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbzHeE9GDPL3Sidped8xgf19dj7gmIl4aplDRUXc8xEII8u83_fU26EzWQOI3BhYTd8W3w/exec", {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    alert("✅ Your details have been submitted successfully!");
    popupForm.style.display = "none";
    joinForm.reset();
  } catch (error) {
    alert("❌ Something went wrong, please try again.");
    console.error(error);
  }
});

const counters = document.querySelectorAll('.counter');
let started = false;

function startCounter() {
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    let count = 0;
    const increment = target / 80;

    const update = setInterval(() => {
      count += increment;
      if (count >= target) {
        counter.innerText = target;
        clearInterval(update);
      } else {
        counter.innerText = Math.ceil(count);
      }
    }, 25);
  });
}

window.addEventListener('scroll', () => {
  const section = document.querySelector('.stats-section');
  const sectionTop = section.getBoundingClientRect().top;
  const triggerPoint = window.innerHeight - 100;

  if (!started && sectionTop < triggerPoint) {
    startCounter();
    started = true;
  }
});

