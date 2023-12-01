import {
  profile_avatar_container,
  user,
  avatar_modal,
  avatar_modal_content,
  edit_avatar_btn,
  avatar_input,
} from "../utils/domElements.mjs";
import { fetchBase } from "../api/fetch/fetch.mjs";
import { profileText } from "./profileText.mjs";

function editAvatar() {
  edit_avatar_btn.addEventListener("click", async (e) => {
    e.preventDefault();

    const body = {
      avatar: avatar_input.value,
    };
    const result = await fetchBase(`profiles/${user}/media`, "PUT", body);
    console.log(result);
    avatar_input.value = "";
    avatar_modal.classList.toggle("hidden");
    avatar_modal.classList.toggle("flex");
    profileText(result);
  });
}

function modal() {
  profile_avatar_container.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("modal");
    avatar_modal.classList.toggle("hidden");
    avatar_modal.classList.toggle("flex");
  });
  window.onclick = function (event) {
    if (event.target == avatar_modal) {
      avatar_modal.classList.toggle("hidden");
      avatar_modal.classList.toggle("flex");
    }
  };
}

export { editAvatar, modal };
