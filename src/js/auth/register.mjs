import { fetchBase } from "../api/fetch/fetch.mjs";
import {
  register_btn,
  email_input,
  name_input,
  avatar_input,
  password_input,
} from "../utils/domElements.mjs";
import { passwordValidation } from "./validation.mjs";

function register() {
  register_btn.addEventListener("click", async (e) => {
    e.preventDefault();

    const body = {
      name: name_input.value,
      email: email_input.value,
      avatar: avatar_input.value,
      password: password_input.value,
    };

    try {
      const result = await fetchBase("auth/register", "POST", body);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  });
}

export { register };
