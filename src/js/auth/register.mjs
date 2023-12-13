import { fetchBase } from "../api/fetch/fetch.mjs";
import {
  register_btn,
  avatar_input,
  register_error,
} from "../utils/domElements.mjs";
import { toggleHidden } from "./registerToggel.mjs";
import {
  passwordValidation,
  emailValidation,
  nameValidation,
} from "./validation.mjs";

function register() {
  register_btn.addEventListener("click", async (e) => {
    e.preventDefault();

    const passwordResult = passwordValidation();
    const emailResult = emailValidation();
    const nameResult = nameValidation();

    if (passwordResult.error || emailResult.error || nameResult.error) {
      console.error(
        "Validation failed:",
        passwordResult.error,
        emailResult.error,
        nameResult.error,
      );
      return;
    }

    const body = {
      name: nameResult.value,
      email: emailResult.value,
      avatar: avatar_input.value,
      password: passwordResult.value,
    };

    try {
      const result = await fetchBase("auth/register", "POST", body);

      if (result.status === "Bad Request") {
        register_error.innerHTML = result.errors[0].message;
        console.log(result.errors[0]);
      } else {
        register_error.innerHTML = "";
        toggleHidden();
      }
    } catch (error) {
      console.error(error);
    }
  });
}

export { register };
