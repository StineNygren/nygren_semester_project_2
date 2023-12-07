import { fetchBase } from "../api/fetch/fetch.mjs";
import { imageCarousel } from "./imageCarousel.mjs";
import { listingTexst } from "../listing/listingTexst.mjs";
import { timeLeft } from "./timeLeft.mjs";
import { placeBid } from "./placeBid.mjs";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let postId = urlParams.get("id");

async function fetchListing() {
  const result = await fetchBase(
    `listings/${postId}?_seller=true&_bids=true`,
    "GET"
  );
  imageCarousel(result.media, result.title);
  listingTexst(result);
  timeLeft(result.endsAt);
  placeBid(result.bids);

  return result;
}

export { fetchListing };
