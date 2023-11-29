import {
  carousel_img,
  next_btn,
  prev_btn,
  carousel_img_section,
} from "../utils/domElements.mjs";
import { fetchListing } from "./fetchListing.mjs";

let imageIndex = 0;

function nextSlide() {
  next_btn.addEventListener("click", async () => {
    imageIndex++;
    const listing = await fetchListing();

    console.log("next ", imageIndex);
    imageCarousel(listing.media, imageIndex);
  });
}

function prevSlide() {
  prev_btn.addEventListener("click", async () => {
    imageIndex--;
    const listing = await fetchListing();

    imageCarousel(listing.media, imageIndex);
    console.log("prev ", imageIndex);
  });
}

prevSlide();
nextSlide();

function imageCarousel(images) {
  if (images.length === 1) {
    prev_btn.classList.add("hidden");
    next_btn.classList.add("hidden");
    carousel_img_section.classList.remove("justify-between");
    carousel_img_section.classList.add("justify-center");
  }
  console.log(images.length);
  if (imageIndex === 0) {
    prev_btn.classList.add("text-slate-400");

    prev_btn.disabled = true;
  } else {
    prev_btn.classList.remove("text-slate-400");
    prev_btn.disabled = false;
  }

  if (imageIndex >= images.length - 1) {
    next_btn.classList.add("text-slate-400");
    next_btn.disabled = true;
  } else {
    next_btn.classList.remove("text-slate-400");
    next_btn.disabled = false;
  }

  carousel_img.innerHTML = "";
  carousel_img.innerHTML += `
      <div class="carousel-item ">
        <img class="max-h-96" src="${images[imageIndex]}">
        </div>`;
  console.log(imageIndex);
}

export { imageCarousel };
