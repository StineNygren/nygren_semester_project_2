import {
  password_input,
  repeat_password_input,
  email_input,
  password_error,
  email_error,
  name_input,
  name_error,
} from "../utils/domElements.mjs";

/**
 * Validates the password input.
 * @returns {boolean|string} Returns false if the passwords do not match or if the password is less than 8 characters long. Otherwise, returns the password value.
 */
function passwordValidation() {
  if (password_input.value != repeat_password_input.value) {
    password_error.innerHTML = "Passwords do not match";
    return false;
  } else if (password_input.value.length < 8) {
    password_error.innerHTML = "Password must be at least 8 characters long";
    return false;
  } else {
    password_error.innerHTML = "";
    return password_input.value;
  }
}

/**
 * Validates an email address.
 * @returns {boolean|string} Returns false if the email is invalid, otherwise returns the trimmed email value.
 */
function emailValidation() {
  const regEx = /@stud\.noroff\.no$/;
  const emailValue = email_input.value.trim();

  if (!regEx.test(emailValue)) {
    email_error.innerHTML = "Email must end with @stud.noroff.no";
    return false;
  } else {
    email_error.innerHTML = "";
    return emailValue;
  }
}

/**
 * Validates the name input field.
 * @returns {boolean|string} Returns false if the input is invalid, otherwise returns the input value.
 */
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

export { passwordValidation, emailValidation, nameValidation };
