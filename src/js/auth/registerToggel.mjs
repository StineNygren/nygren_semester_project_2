import {
  register_open,
  login_open,
  register_section,
  login_section,
} from "../utils/domElements.mjs";

function registerOpen() {
  register_open.addEventListener("click", () => {
    register_section.classList.remove("hidden");
    register_section.classList.add("flex");
    login_section.classList.add("hidden");
  });
}
function loginOpen() {
  login_open.addEventListener("click", () => {
    register_section.classList.add("hidden");
    login_section.classList.remove("hidden");
  });
}
export { registerOpen, loginOpen };
