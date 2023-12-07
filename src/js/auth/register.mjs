import { fetchBase } from "../api/fetch/fetch.mjs";
import { register_btn, avatar_input } from "../utils/domElements.mjs";
import { toggleHidden } from "./registerToggel.mjs";
import {
  passwordValidation,
  emailValidation,
  nameValidation,
} from "./validation.mjs";

function register() {
  register_btn.addEventListener("click", async (e) => {
    e.preventDefault();

    const body = {
      name: nameValidation(),
      email: emailValidation(),
      avatar: avatar_input.value,
      password: passwordValidation(),
    };

    try {
      const result = await fetchBase("auth/register", "POST", body);
      console.log(result);
      toggleHidden();
    } catch (error) {
      console.error(error);
    }
  });
}

export { register };
