import {
  password_input,
  repeat_password_input,
  email_input,
} from "../utils/domElements.mjs";

function passwordValidation() {
  if (password_input.value === repeat_password_input.value) {
    return password_input.value;
  }
}

function emailValidation() {
  const regEx = /@stud.noroff.no/;
  return regEx.test(email_input.value);
}
// export function emailValidation() {
//   return email_input.endsWith("@stud.noroff.no");
// }

export { passwordValidation, emailValidation };
