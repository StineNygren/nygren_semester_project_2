import { fetchBase } from "../api/fetch/fetch.mjs";
import { imageCarousel } from "./imageCarousel.mjs";
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let postId = urlParams.get("id");

async function fetchListing() {
  const result = await fetchBase(`listings/${postId}`, "GET");
  console.log(result);
  imageCarousel(result.media);

  return result;
}

export { fetchListing };
