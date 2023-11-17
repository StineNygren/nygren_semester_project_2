import {
  password_input,
  repeat_password_input,
} from "../utils/domElements.mjs";
function passwordValidation() {
  if (password_input.value === repeat_password_input.value) {
    return password_input.value;
  }
}
export { passwordValidation };
