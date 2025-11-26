const learnButtons = document.querySelectorAll('.learn-btn');
const slider = document.getElementById('slider');
const sliderClose = document.getElementById('sliderClose');
const sliderYear = document.getElementById('sliderYear');
const sliderDetails = document.getElementById('sliderDetails');
const sliderImagesContainer = document.getElementById('sliderImages');

const competitionData = {

  "2023": {details:`
    <strong>Robotico proudly participated in the FIRST LEGO League robotics competition with six teams in the 6–9 age category, achieving the following awards:</strong>
    <ul>
      <li>Unbeatable Team: Core Values Award</li>
      <li>Seekers Team: Team Model Award</li>
    </ul>`, images:["images/co9.jpg","images/co10.jpg"]},
  "2024": 
  {
    details:`<strong>Robotico proudly participated in the FIRST LEGO League robotics competition with six teams in the 6–9 age category, achieving the following awards:</strong>
    <ul>
      <li>Unbeatable Team: Coding Award</li>
      <li>Seekers Team: Coding Award</li>
      <li>Unstoppable Team: Coding Award</li>
      <li>Brainstormers Team: Core Values Award</li>
      <li>Troublemakers Team: Team Model Award</li>
      <li>Innovators Team: Coding Award</li>
    </ul>

    <strong>The academy also joined the same competition with one team in the 10–17 age category, earning the following awards:</strong>
    <ul>
      <li>Robotico Creative Commanders Team: Breakthrough Award</li>
    </ul>
  `, images:["images/co5.jpg","images/co6.jpg","images/co7.jpg","images/co8.jpg"]},
  "2025": {
    details: `
    Achievements in 2025 Competitions:
      <strong>Robotico proudly participated in the FIRST LEGO League robotics competition (6–9 age category):</strong>
      <ul>
        <li>Ocean Explorers Team: Core Value Award</li>
        <li>Inventors Team: Team Model Award</li>
        <li>Hydro Hackers Team: Coding Award</li>
        <li>Aqua Warriors Team: Coding Award</li>
        <li>Wave Breakers Team: Core Value Award</li>
        <li>Mermaids Team: Coding Award</li>
      </ul>

      <strong>10–17 age category:</strong>
      <ul>
        <li>Robotico Creative Commanders Team: Rising All-Star Award</li>
        <li>Robotico Treasure Hunters Team: Judging Award</li>
      </ul>
      The Creative Commanders team qualified for the Robofest competition at Lawrence Technological University in the United States, representing Egypt.
      <hr>
      <strong>Robotex Competition (6–9 age category):</strong>
      <ul>
        <li>Mini-Doctors Team: 2nd place "Presentation Skills"</li>
        <li>Bots Team: 3rd place "Poster"</li>
        <li>Byte-Force Team: 2nd place "Champion"</li>
      </ul>
      Byte_Force for international participation in Estonia.
      <hr>
      <strong>Robotex Competition (10–17 age category):</strong>
      <ul>
        <li>Creative-Commanders Team: Best Programming</li>
        <li>Line Trackers Team: Best Strategy</li>
      </ul>
      <hr>
      <strong>FPC Web Design Competition (10–17 age category):</strong>
      <ul>
        <li>Team Agrinova: 4th place</li>
        <li>Team Economy Vision: 6th place</li>
      </ul>
      Both teams qualified to compete internationally in Jordan.
    `,
    images:["images/CO1.jpg","images/CO2.jpg","images/CO3.jpg","images/CO4.jpg"]
  }
};

// دالة واحدة فقط
function openSlider(year, details, images=[]) {
  sliderYear.textContent = year;
  sliderDetails.innerHTML = details; // مهم: innerHTML لعرض HTML

  sliderImagesContainer.innerHTML = '';
  images.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    sliderImagesContainer.appendChild(img);
  });

  slider.classList.add('active');
}

// تفعيل كل زر
learnButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const year = e.target.closest('.comp-card').dataset.year;
    const data = competitionData[year];
    openSlider(year, data.details, data.images);
  });
});

// إغلاق الـ slider
sliderClose.addEventListener('click', () => {
  slider.classList.remove('active');
});

// Navbar toggle
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});
