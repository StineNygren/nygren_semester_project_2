import { fetchBase } from "../api/fetch/fetch.mjs";
import {
  post_listing_btn,
  date_input,
  description_input,
  title_input,
  url_input_container,
  sell_error,
} from "../utils/domElements.mjs";

function postListing() {
  post_listing_btn.addEventListener("click", async (e) => {
    e.preventDefault();

    const imageInputs = Array.from(
      url_input_container.querySelectorAll("input[name='url_input[]']"),
    );
    const imageUrls = imageInputs.map((input) => input.value);

    const body = {
      title: title_input.value,
      description: description_input.value,
      endsAt: date_input.value,
      media: imageUrls,
    };

    const result = await fetchBase("listings", "POST", body);
    console.log(result.errors);

    const sellErrors = result.errors.map((error) => error.message);
    console.log(sellErrors);

    sellErrors.forEach((error) => {
      console.log(error);
      sell_error.innerHTML += `<p class="text-red-600">${error}</p>`;
    });

    //sell_error.innerHTML = result.errors[0].message;

    //window.location.href = `./listing.html?id=${result.id}`;
  });
}

export { postListing };
