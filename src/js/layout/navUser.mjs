import {
  signin_btn,
  signout_btn,
  jwt,
  credit_count,
  credit_nav,
} from "../utils/domElements.mjs";
function navUser() {
  if (!jwt) {
    credit_nav.classList.add("hidden");
    signout_btn.classList.add("hidden");
    signin_btn.classList.remove("hidden");
  } else {
    credit_count.innerHTML = localStorage.getItem("credit");
    credit_nav.classList.remove("hidden");
    signout_btn.classList.remove("hidden");
    signin_btn.classList.add("hidden");
  }
}

export { navUser };
