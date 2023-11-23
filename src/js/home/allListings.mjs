import { fetchBase } from "../api/fetch/fetch.mjs";
import { displayListings } from "./displayListings.mjs";

async function allListings(page = 1) {
  const result = await fetchBase("listings?_seller=true&page=${page}", "GET");
  result.forEach((listing) => {
    displayListings(listing);
  });
  return result;
}
export { allListings };
