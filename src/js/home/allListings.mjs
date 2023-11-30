import { fetchBase } from "../api/fetch/fetch.mjs";
import { displayListings } from "./displayListings.mjs";

async function allListings(offset, limit) {
  console.log("get listing offset", offset);
  const result = await fetchBase(
    `listings?limit=${limit}&offset=${offset}&_seller=true`,
    "GET"
  );
  // result.forEach((listing) => {
  //   displayListings(listing);
  // });
  console.log(result);

  return result;
}
export { allListings };

// async function allListings() {
//   const result = await fetchBase(`listings?_seller=true`, "GET");
//   result.forEach((listing) => {
//     displayListings(listing);
//   });
//   console.log(result);
//   return result;
// }
// export { allListings };
