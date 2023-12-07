import {
  register_open,
  login_open,
  register_section,
  login_section,
} from "../utils/domElements.mjs";

function registerToggel() {
  register_open.addEventListener("click", toggleHidden);
  login_open.addEventListener("click", toggleHidden);
}

function toggleHidden() {
  register_section.classList.toggle("hidden");
  register_section.classList.toggle("flex");
  login_section.classList.toggle("hidden");
  login_section.classList.toggle("flex");
}
export { registerToggel, toggleHidden };
