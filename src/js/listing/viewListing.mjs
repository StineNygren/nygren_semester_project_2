import { fetchBase } from "../api/fetch/fetch.mjs";
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let postId = urlParams.get("id");

async function viewListing() {
  const result = await fetchBase(`listings/${postId}`, "GET");
  console.log(result);
  return result;
}

export { viewListing };
