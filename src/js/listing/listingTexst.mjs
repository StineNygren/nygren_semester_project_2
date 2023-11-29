import { fetchListing } from "./fetchListing.mjs";
import {
  listing_description,
  listing_header,
  listing_posted,
  listing_user_email,
  listing_user_name,
  listing_user_avatar,
} from "../utils/domElements.mjs";

function listingText(listing) {
  const date = listing.created.slice(0, 10);
  console.log(listing);
  listing_header.innerHTML = listing.title;
  listing_description.innerHTML = listing.description;
  listing_posted.innerHTML = `Posted ${date}`;
  listing_user_name.innerHTML = listing.seller.name;
  listing_user_email.innerHTML = listing.seller.email;
  listing_user_avatar.src = listing.seller.avatar;
}

export { listingText };
