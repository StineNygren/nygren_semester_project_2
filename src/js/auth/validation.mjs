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
    return { error: "Passwords do not match" };
  } else if (password_input.value.length < 8) {
    password_error.innerHTML = "Password must be at least 8 characters long";
    return { error: "Password must be at least 8 characters long" };
  } else {
    password_error.innerHTML = "";
    return { value: password_input.value, error: null };
  }
}

function emailValidation() {
  const regEx = /@stud\.noroff\.no$/;
  const emailValue = email_input.value.trim();

  if (!regEx.test(emailValue)) {
    email_error.innerHTML = "Email must end with @stud.noroff.no";
    return { error: "Email must end with @stud.noroff.no" };
  } else {
    email_error.innerHTML = "";
    return { value: emailValue, error: null };
  }
}

function nameValidation() {
  const regEx = /^[a-zA-Z0-9_]+$/;
  if (!name_input.value || !regEx.test(name_input.value)) {
    name_error.innerHTML = "Only letters, numbers, and underscores are allowed";
    return { error: "Only letters, numbers, and underscores are allowed" };
  } else {
    name_error.innerHTML = "";
    return { value: name_input.value, error: null };
  }
}

export { passwordValidation, emailValidation, nameValidation };
