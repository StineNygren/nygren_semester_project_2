// fetchNextPage.mjs
import { allListings } from "./allListings.mjs";
import { displayListings } from "./displayListings.mjs";

async function fetchNextPage() {
  const nextPageListings = await allListings();

  // If there are more listings, fetch the next page
  if (nextPageListings.length > 0) {
    nextPageListings.forEach((listing) => {
      displayListings(listing);
    });
  }
}

export { fetchNextPage };
