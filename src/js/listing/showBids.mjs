import { bid_btn, bid_input, listing_bids } from "../utils/domElements.mjs";
import { fetchBase } from "../api/fetch/fetch.mjs";
import { fetchListing } from "./fetchListing.mjs";

function showBids(result) {
  const bids = result.bids;
  bids.sort((a, b) => new Date(b.created) - new Date(a.created));
  console.log(listing_bids);

  listing_bids.innerHTML = "";

  bids.forEach((bid) => {
    const bid_date = bid.created.slice(0, 10);
    listing_bids.innerHTML += `
          <div class="flex justify-between ">
            <p>${bid.bidderName}</p>
            <p class="px-5">${bid_date}</p>
            <p>${bid.amount}</p>
          </div>
          `;
  });
}

export { showBids };
