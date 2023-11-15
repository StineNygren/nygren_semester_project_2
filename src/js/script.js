const navigationSection = document.querySelector(".navigation-section");
const toggleButton = document.querySelector(".toggle-butten");
const navIcon = document.querySelector(".nav-icon");

toggleButton.addEventListener("click", () => {
  navigationSection.classList.toggle("hidden");

  navIcon.classList.toggle("fa-x");
});
