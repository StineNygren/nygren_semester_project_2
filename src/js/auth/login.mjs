import { fetchBase } from "../api/fetch/fetch.mjs";
import {
  login_btn,
  login_email_input,
  form_action,
  login_password_input,
} from "../utils/domElements.mjs";

function logIn() {
  login_btn.addEventListener("click", async (e) => {
    e.preventDefault();
    const body = {
      email: login_email_input.value,
      password: login_password_input.value,
    };

    const result = await fetchBase("auth/login", "POST", body);
    console.log(result);
    saveData(result);
    form_action.submit();
  });
}

function saveData(result) {
  let token = result.accessToken;
  localStorage.setItem("jwt", `Bearer ` + token);
  localStorage.setItem("user", result.name);
  localStorage.setItem("credit", result.credits);
}

export { logIn };
