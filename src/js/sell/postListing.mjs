import { fetchBase } from "../api/fetch/fetch.mjs";
import {
  post_listing_btn,
  date_input,
  description_input,
  title_input,
  url_input,
  url_input_container,
} from "../utils/domElements.mjs";

function postListing() {
  post_listing_btn.addEventListener("click", async (e) => {
    e.preventDefault();

    // Collect image URLs into an array
    const imageInputs = Array.from(
      url_input_container.querySelectorAll("input[name='url_input[]']")
    );
    const imageUrls = imageInputs.map((input) => input.value);

    const body = {
      title: title_input.value,
      description: description_input.value,
      endsAt: date_input.value,
      media: imageUrls,
    };
    //console.log(body);

    const result = await fetchBase("listings", "POST", body);
    console.log(result);
  });
}

export { postListing };
