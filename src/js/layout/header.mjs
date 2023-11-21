const navigationSection = document.querySelector(".navigation-section");
const toggleButton = document.querySelector(".toggle-butten");
const navIcon = document.querySelector(".nav-icon");
const auth_section = document.querySelector(".auth-section");

function toggleNavigation() {
  toggleButton.addEventListener("click", () => {
    navigationSection.classList.toggle("hidden");
    navigationSection.classList.toggle("flex");

    auth_section.classList.toggle("hidden");
    auth_section.classList.toggle("flex");

    navIcon.classList.toggle("fa-x");
  });
}

export { toggleNavigation };
