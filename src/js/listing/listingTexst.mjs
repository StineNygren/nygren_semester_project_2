import {
  listing_description,
  listing_header,
  listing_posted,
  listing_user_email,
  listing_user_name,
  listing_user_avatar,
  avatar_img,
} from "../utils/domElements.mjs";
import { showBids } from "./showBids.mjs";

function listingTexst(listing) {
  const date = listing.created.slice(0, 10);
  console.log(listing);
  listing_header.textContent = listing.title;
  listing_description.textContent = listing.description;
  listing_posted.textContent = `Posted ${date}`;
  listing_user_name.textContent = listing.seller.name;
  listing_user_email.textContent = listing.seller.email;
  if (!listing.seller.avatar) {
    listing_user_avatar.src = avatar_img;
  } else {
    listing_user_avatar.src = listing.seller.avatar;
  }

  showBids(listing);
}

export { listingTexst };
