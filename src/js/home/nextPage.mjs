import { allListings } from "./allListings.mjs";
import { displayListings } from "./displayListings.mjs";
import { search_input } from "../utils/domElements.mjs";
import { searchFilter } from "./searchFilther.mjs";

let offset = 0;
let limit = 10;

async function fetchNextPage() {
  search_input.addEventListener("input", async () => {
    offset = 0;
  });

  if (search_input.value.length === 0) {
    const nextPageListings = await allListings(offset, limit);
    nextPageListings.forEach((listing) => {
      displayListings(listing);
    });
  } else if (search_input.value.length > 0) {
    const nextPageListings = await allListings(offset, limit);
    const searchloop = await searchFilter(nextPageListings, offset);
    searchloop.forEach((listing) => {
      displayListings(listing);
    });
    console.log(searchloop);
  }

  offset += limit;
}

export { fetchNextPage };
