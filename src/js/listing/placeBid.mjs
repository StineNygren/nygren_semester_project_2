import {
  bid_btn,
  bid_input,
  jwt,
  bid_error,
  user,
} from "../utils/domElements.mjs";
import { fetchBase } from "../api/fetch/fetch.mjs";
import { getProfile } from "../profile/getProfile.mjs";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let postId = urlParams.get("id");

function placeBid(bids) {
  if (!jwt) {
    bid_btn.disabled = true;
    bid_input.disabled = true;
    bid_btn.classList.add("opacity-50");
    bid_btn.classList.remove("hover:bg-blue-800");
    return;
  }

  bid_btn.addEventListener("click", async (e) => {
    e.preventDefault();

    const credit = await getProfile(`profiles/${user}/credits`);

    const bidValue = parseFloat(bid_input.value);

    if (bids.length > 0) {
      const highestBid = bids[0].amount;
      if (bidValue <= highestBid) {
        bid_error.innerHTML = "Your bid must be higher than the current bid";
        return;
      }
    }

    if (credit.credits < bidValue) {
      bid_error.innerHTML = "You don't have enough credits";
      return;
    } else if (isNaN(bidValue)) {
      bid_error.innerHTML = "Invalid bid amount. Please enter a valid number.";
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
