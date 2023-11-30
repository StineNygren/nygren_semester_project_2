import {
  listing_description,
  listing_header,
  listing_posted,
  listing_user_email,
  listing_user_name,
  listing_user_avatar,
  listing_bids,
  bid_btn,
} from "../utils/domElements.mjs";
import { showBids } from "./showBids.mjs";

function listingTexst(listing) {
  const date = listing.created.slice(0, 10);
  console.log(listing);
  listing_header.innerHTML = listing.title;
  listing_description.innerHTML = listing.description;
  listing_posted.innerHTML = `Posted ${date}`;
  listing_user_name.innerHTML = listing.seller.name;
  listing_user_email.innerHTML = listing.seller.email;
  listing_user_avatar.src = listing.seller.avatar;

  showBids(listing);

  // const bids = listing.bids;
  // console.log(bids);

  // bids.sort((a, b) => new Date(b.created) - new Date(a.created));

  // bids.forEach((bid) => {
  //   const bid_date = bid.created.slice(0, 10);
  //   listing_bids.innerHTML += `
  //     <div class="flex justify-between py-2">
  //       <p>${bid.bidderName}</p>
  //       <p class="px-5">${bid_date}</p>
  //       <p>${bid.amount}</p>
  //     </div>
  //     `;
  // });
}

export { listingTexst };
