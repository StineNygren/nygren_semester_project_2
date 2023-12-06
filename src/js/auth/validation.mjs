import {
  password_input,
  repeat_password_input,
  email_input,
  password_error,
  email_error,
  name_input,
  name_error,
} from "../utils/domElements.mjs";

function passwordValidation() {
  if (password_input.value != repeat_password_input.value) {
    password_error.innerHTML = "Passwords do not match";
    //alert("Passwords do not match");
    return false;
  } else if (password_input.value.length < 8) {
    password_error.innerHTML = "Password must be at least 8 characters long";
    //alert("Password must be at least 8 characters long");
    return false;
  } else {
    password_error.innerHTML = "";
    return password_input.value;
  }
}

function emailValidation() {
  const regEx = /@stud\.noroff\.no$/;
  const emailValue = email_input.value.trim(); // Trim leading and trailing whitespaces

  if (!regEx.test(emailValue)) {
    email_error.innerHTML = "Email must end with @stud.noroff.no";
    return false;
  } else {
    email_error.innerHTML = "";
    return emailValue;
  }
}
function nameValidation() {
  const regEx = /^[a-zA-Z0-9_]+$/;
  if (!name_input.value || !regEx.test(name_input.value)) {
    name_error.innerHTML = "Only letters, numbers, and underscores are allowed";
    return false;
  } else {
    name_error.innerHTML = "";
    return name_input.value;
  }
}

//mail på slutt og valid tegn

// function emailValidation() {
//   if (!email_input.value.endsWith("@stud.noroff.no")) {
//     //alert("Email must end with @stud.noroff.no");
//   } else {
//     return email_input.value;
//   }
//   // return email_input.endsWith("@stud.noroff.no");
// }

export { passwordValidation, emailValidation, nameValidation };
