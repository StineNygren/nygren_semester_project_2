import { signout_btn } from "../utils/domElements.mjs";

function signOut() {
  signout_btn.addEventListener("click", () => {
    localStorage.clear();
    window.location.href = "./index.html";
  });
}
export { signOut };
