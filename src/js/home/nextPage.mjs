// fetchNextPage.mjs
import { allListings } from "./allListings.mjs";
import { displayListings } from "./displayListings.mjs";

let currentPage = 1;

async function fetchNextPage() {
  const nextPageListings = await allListings(currentPage);
  currentPage++;

  // If there are more listings, fetch the next page
  if (nextPageListings.length > 0) {
    nextPageListings.forEach((listing) => {
      displayListings(listing);
    });
  }
}

export { fetchNextPage };
