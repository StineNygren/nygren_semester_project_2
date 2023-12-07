import { listing_bids } from "../utils/domElements.mjs";

function showBids(result) {
  const bids = result.bids;
  bids.sort((a, b) => new Date(b.created) - new Date(a.created));

  const fragment = document.createDocumentFragment();

  bids.forEach((bid) => {
    const bid_date = bid.created.slice(0, 10);

    const bidContainer = document.createElement("div");
    bidContainer.className = "grid  grid-cols-7 gap-3";

    const bidderNameElement = document.createElement("p");
    bidderNameElement.className = "overflow-hidden col-span-3";
    bidderNameElement.textContent = bid.bidderName;

    const bidDateElement = document.createElement("p");
    bidDateElement.className = " overflow-hidden col-span-3";
    bidDateElement.textContent = bid_date;

    const amountElement = document.createElement("p");
    amountElement.className = "overflow-hidden";
    amountElement.textContent = bid.amount;

    bidContainer.appendChild(bidderNameElement);
    bidContainer.appendChild(bidDateElement);
    bidContainer.appendChild(amountElement);

    fragment.appendChild(bidContainer);
  });

  listing_bids.innerHTML = "";
  listing_bids.appendChild(fragment);
}

export { showBids };
