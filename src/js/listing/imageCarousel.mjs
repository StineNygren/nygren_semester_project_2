import {
  carousel_img,
  next_btn,
  prev_btn,
  carousel_img_section,
  default_img,
} from "../utils/domElements.mjs";
import { fetchListing } from "./fetchListing.mjs";
import { imageCheck } from "../home/imageCheck.mjs";

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

async function imageCarousel(images, title) {
  if (images.length === 1 || images.length === 0) {
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

  const displayPromise = new Promise((resolve) => {
    imageCheck(images[imageIndex], (exists) => {
      if (!exists) {
        console.error("Image does not exist.");

        images[imageIndex] = default_img;
      }
      resolve(images[imageIndex]);
    });
  });

  displayPromise.then((finalImage) => {
    const carouselItem = document.createElement("div");
    carouselItem.className = "carousel-item";

    const imgElement = document.createElement("img");
    imgElement.className = "h-96 w-full object-cover";
    imgElement.src = finalImage;
    imgElement.alt = `image for ${title}`;

    carouselItem.appendChild(imgElement);
    carousel_img.innerHTML = "";
    carousel_img.appendChild(carouselItem);
  });
}

export { imageCarousel };
