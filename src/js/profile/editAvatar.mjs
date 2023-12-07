import {
  profile_avatar_container,
  user,
  avatar_modal,
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
    avatar_input.value = "";
    avatar_modal.classList.toggle("hidden");
    avatar_modal.classList.toggle("flex");
    profileText(result);
  });
}

function modal() {
  const modalToggle = (e) => {
    e.preventDefault();
    avatar_modal.classList.toggle("hidden");
    avatar_modal.classList.toggle("flex");
  };

  profile_avatar_container.addEventListener("click", modalToggle);

  document.body.addEventListener("click", (event) => {
    if (event.target === avatar_modal) {
      avatar_modal.classList.toggle("hidden");
      avatar_modal.classList.toggle("flex");
    }
  });
}

export { editAvatar, modal };
