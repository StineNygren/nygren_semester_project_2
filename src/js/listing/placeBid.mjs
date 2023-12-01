import { bid_btn, bid_input, listing_bids } from "../utils/domElements.mjs";
import { fetchBase } from "../api/fetch/fetch.mjs";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let postId = urlParams.get("id");

function placeBid() {
  bid_btn.addEventListener("click", async (e) => {
    e.preventDefault();
    const bidValue = parseFloat(bid_input.value);

    if (isNaN(bidValue)) {
      console.error("Invalid bid amount. Please enter a valid number.");
      return;
    }

    const body = {
      amount: bidValue,
    };
    const result = await fetchBase(`listings/${postId}/bids`, "POST", body);

    console.log(body);
    console.log(result);
    window.location.reload();
  });
}

export { placeBid };
