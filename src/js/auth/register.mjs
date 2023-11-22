import { fetchBase } from "../api/fetch/fetch.mjs";
import {
  register_btn,
  email_input,
  name_input,
  avatar_input,
  password_input,
  login_section,
  register_section,
} from "../utils/domElements.mjs";

import { passwordValidation, emailValidation } from "./validation.mjs";

function register() {
  register_btn.addEventListener("click", async (e) => {
    e.preventDefault();

    const body = {
      name: name_input.value,
      email: emailValidation(),
      avatar: avatar_input.value,
      password: passwordValidation(),
    };

    try {
      const result = await fetchBase("auth/register", "POST", body);
      console.log(result);

      if (!Response.ok) {
        throw new Error("Something went wrong");
      } else {
        register_section.classList.add("hidden");
        login_section.classList.remove("hidden");
      }
    } catch (error) {
      console.error(error);
    }
  });
}

export { register };
