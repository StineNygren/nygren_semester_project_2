import { fetchBase } from "../api/fetch/fetch.mjs";
import { displayListings } from "./displayListings.mjs";
async function allListings() {
  const result = await fetchBase("listings?_seller=true", "GET");
  result.forEach((listing) => {
    console.log(listing.id);
    displayListings(listing);
  });
  console.log(result);
}
export { allListings };
