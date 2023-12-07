import { search_input, listings_section } from "../utils/domElements.mjs";
import { allListings } from "./allListings.mjs";
import { searchFilter } from "./searchFilther.mjs";
import { fetchNextPage } from "./nextPage.mjs";

async function search() {
  search_input.addEventListener("input", async () => {
    const listings = await allListings(0, 10);
    const filteredListings = searchFilter(listings);
    console.log(filteredListings);
    listings_section.innerHTML = "";
    let i = 0;
    while (i < 10 && filteredListings.length < 10) {
      i++;
      await fetchNextPage();
    }
  });
}

export { search };
