import {
  password_input,
  repeat_password_input,
  email_input,
} from "../utils/domElements.mjs";

function passwordValidation() {
  if (password_input.value != repeat_password_input.value) {
    alert("Passwords do not match");
  } else if (password_input.value.length < 8) {
    alert("Password must be at least 8 characters long");
  } else {
    return password_input.value;
  }
}

// function emailValidation() {
//   const regEx = /@stud.noroff.no/;
//   return regEx.test(email_input.value);
// }
// mail på slutt og valid tegn
function emailValidation() {
  if (!email_input.value.endsWith("@stud.noroff.no")) {
    alert("Email must end with @stud.noroff.no");
  } else {
    return email_input.value;
  }
  // return email_input.endsWith("@stud.noroff.no");
}

export { passwordValidation, emailValidation };
