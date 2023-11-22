import {
  search_input,
  search_btn,
  listings_section,
} from "../utils/domElements.mjs";
import { displayListings } from "./displayListings.mjs";
import { allListings } from "./allListings.mjs";

async function search() {
  const listings = await allListings();
  console.log(listings);

  search_input.addEventListener("input", () => {
    const inputString = search_input.value.toLowerCase();
    console.log("Input String:", inputString);

    const filterSearchArray = listings.filter((element) => {
      return element.title.toLowerCase().includes(inputString);
    });
    console.log("Filtered Listings Length:", filterSearchArray.length);

    // Clear previous listings
    listings_section.innerHTML = "";

    // Display the filtered listings
    filterSearchArray.forEach((listing) => {
      displayListings(listing);
    });
  });
}

export { search };
