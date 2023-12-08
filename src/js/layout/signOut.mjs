import { signout_btn } from "../utils/domElements.mjs";
import { clearLocalStorage } from "./clearLocalStorage.mjs";

function signOut() {
  signout_btn.addEventListener("click", () => {
    clearLocalStorage();
    window.location.href = "./index.html";
  });
}
export { signOut };
