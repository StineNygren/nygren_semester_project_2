import {
  register_open,
  register_avatar,
  register_name,
  login_open,
  register_btn,
  login_btn,
  login_h1,
  register_h1,
} from "../utils/domElements.mjs";

function registerOpen() {
  register_open.addEventListener("click", () => {
    register_avatar.classList.remove("hidden");
    register_name.classList.remove("hidden");
    register_open.classList.add("hidden");
    login_open.classList.remove("hidden");
    register_btn.classList.remove("hidden");
    login_btn.classList.add("hidden");
    login_h1.classList.add("hidden");
    register_h1.classList.remove("hidden");
  });
}
function loginOpen() {
  login_open.addEventListener("click", () => {
    register_avatar.classList.add("hidden");
    register_name.classList.add("hidden");
    register_open.classList.remove("hidden");
    login_open.classList.add("hidden");
    register_btn.classList.add("hidden");
    login_btn.classList.remove("hidden");
    login_h1.classList.remove("hidden");
    register_h1.classList.add("hidden");
  });
}
export { registerOpen, loginOpen };
