// fetchNextPage.mjs
import { allListings } from "./allListings.mjs";
import { displayListings } from "./displayListings.mjs";
import { search_input } from "../utils/domElements.mjs";
import { searchFilter } from "./searchFilther.mjs";

let offset = 0;
let limit = 10;
//let i = 0;
async function fetchNextPage() {
  search_input.addEventListener("input", async () => {
    offset = 0;
  });

  //const nextPageListings = await allListings(offset, limit);

  if (search_input.value.length === 0) {
    console.log("if", search_input.value.length);
    const nextPageListings = await allListings(offset, limit);
    nextPageListings.forEach((listing) => {
      displayListings(listing);
    });
  } else if (search_input.value.length > 0) {
    console.log("elseif", search_input.value.length);
    const NextPageListings = await allListings(offset, limit);
    const filteredNextPageListings = await searchFilter(NextPageListings);

    const searchloop = await searchFilter(NextPageListings, offset);

    searchloop.forEach((listing) => {
      displayListings(listing);
    });
    console.log(filteredNextPageListings);
  }

  //i++;
  console.log(offset);

  offset += limit;

  //offset = i * limit;
}

export { fetchNextPage };

////

////

// let offset = 25;
// let i = 0;
// async function fetchNextPage() {
//   search_input.addEventListener("input", async () => {
//     i = 0;
//     offset = 25;
//   });

//   let limit = 25;

//   if (search_input.value.length === 0) {
//     console.log("if", search_input.value.length);
//     const nextPageListings = await allListings(offset, limit);
//     // nextPageListings.forEach((listing) => {
//     //   displayListings(listing);
//     // });
//   } else if (search_input.value.length > 0) {
//     console.log("elseif", search_input.value.length);
//     const NextPageListings = await allListings(offset, limit);
//     const filteredNextPageListings = await searchFilter(NextPageListings);
//   }

//   i++;
//   console.log(offset);

//   // offset += limit;
//   offset = i * limit;
// }

// export { fetchNextPage };

// fetchNextPageExtra.mjs

// let offset = 10;

// async function fetchNextPageExtra() {

//   let limit = 10;

//   const nextPageListings = await allListings(offset, limit);
//   const filteredNextPageListings = await searchFilter(nextPageListings);

//   //let i = 0;

//   //i++;
//   console.log(offset);

//   offset += limit;
//   //offset = i * limit;
//   return filteredNextPageListings;
// }

// async function fetchNextPage() {
//   search_input.addEventListener("input", async () => {
//     offset = 10;
//   });
//   let limit = 10;

//   //let i = 0;
//   if (search_input.value.length === 0) {
//     console.log("if", search_input.value.length);
//     const nextPageListings = await allListings(offset, limit);
//     // nextPageListings.forEach((listing) => {
//     //   displayListings(listing);
//     // });
//   } else if (search_input.value.length > 0) {
//     console.log("elseif", search_input.value.length);
//     await fetchNextPageExtra();
//     console.log(await fetchNextPageExtra());
//   }

//   offset += limit;

// }

// export { fetchNextPage };
