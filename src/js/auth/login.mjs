import { fetchBase } from "../api/fetch/fetch.mjs";
import { login_btn, email_input } from "../utils/domElements.mjs";
import { passwordValidation } from "./validation.mjs";

login_btn.addEventListener("click", async (e) => {
  e.preventDefault();
  const postData = {
    email: `${email_input.value}`,
    password: `${passwordValidation()}`,
  };

  const result = await fetchBase("auth/login", "POST", postData);
  console.log(result);
  saveData(result);
});

//localStorage.clear();

function saveData(result) {
  let token = result.accessToken;
  localStorage.setItem("jwt", `Bearer ` + token);
  localStorage.setItem("personUserName", result.name);
}
