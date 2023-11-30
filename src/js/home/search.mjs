import {
  search_input,
  search_btn,
  listings_section,
} from "../utils/domElements.mjs";
import { displayListings } from "./displayListings.mjs";
import { allListings } from "./allListings.mjs";
import { searchFilter } from "./searchFilther.mjs";
import { fetchNextPage } from "./nextPage.mjs";

async function search() {
  search_input.addEventListener("input", async () => {
    const listings = await allListings(0, 10);
    const filteredListings = searchFilter(listings);
    console.log(filteredListings.length);

    listings_section.innerHTML = "";
    fetchNextPage();
    let i = 0;
    while (i < 10 && filteredListings.length < 10) {
      i++;
      await fetchNextPage();
    }
  });
}

export { search };
// async function search() {
//   search_input.addEventListener("input", async () => {
//     const listings = await allListings(0, 10);
//     const inputString = search_input.value.toLowerCase();

//     const filterSearchArray = listings.filter((listing) => {
//       return listing.title.toLowerCase().includes(inputString);
//     });
//     console.log("Filtered Listings Length:", filterSearchArray.length);

//     // Clear previous listings
//     listings_section.innerHTML = "";

//     // Display the filtered listings
//     filterSearchArray.forEach((listing) => {
//       displayListings(listing);
//     });
//   });
// }

// export { search };

//

//
// import {
//   search_input,
//   search_btn,
//   listings_section,
// } from "../utils/domElements.mjs";
// import { displayListings } from "./displayListings.mjs";
// import { allListings } from "./allListings.mjs";

// async function search() {
//   const listings = await allListings(0, 10);

//   search_input.addEventListener("input", () => {
//     const inputString = search_input.value.toLowerCase();

//     const filterSearchArray = listings.filter((listing) => {
//       return listing.title.toLowerCase().includes(inputString);
//     });
//     console.log("Filtered Listings Length:", filterSearchArray.length);

//     // Clear previous listings
//     listings_section.innerHTML = "";

//     // Display the filtered listings
//     filterSearchArray.forEach((listing) => {
//       displayListings(listing);
//     });
//   });
// }

// export { search };
