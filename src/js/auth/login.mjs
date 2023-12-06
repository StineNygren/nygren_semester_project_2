import { fetchBase } from "../api/fetch/fetch.mjs";
import {
  login_btn,
  login_email_input,
  form_action,
  login_password_input,
  login_error,
} from "../utils/domElements.mjs";

async function logIn() {
  login_btn.addEventListener("click", async (e) => {
    e.preventDefault();
    const body = {
      email: login_email_input.value,
      password: login_password_input.value,
    };

    try {
      const result = await fetchBase("auth/login", "POST", body);
      console.log(result);
      saveData(result);
      form_action.submit();
    } catch (error) {
      login_error.classList.remove("hidden");
      console.error(error);
    }
  });
}

function saveData(result) {
  let token = result.accessToken;
  localStorage.setItem("jwt", `Bearer ` + token);
  localStorage.setItem("user", result.name);
  localStorage.setItem("credit", result.credits);
}

export { logIn };
