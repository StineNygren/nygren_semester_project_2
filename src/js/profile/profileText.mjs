import { getProfile } from "./getProfile.mjs";
import {
  profile_name,
  profile_avatar,
  profile_email,
  user,
} from "../utils/domElements.mjs";
import { displayListings } from "../home/displayListings.mjs";

async function profileText() {
  const profile = await getProfile(`profiles/${user}`);
  profile_name.textContent = profile.name;
  profile_avatar.src = profile.avatar;
  profile_email.textContent = profile.email;
  console.log(profile);
}
async function profileDisplay() {
  const profileContent = await getProfile(`profiles/${user}/listings`);
  profileContent.forEach((listing) => {
    displayListings(listing);
  });

  console.log(profileContent);
}
export { profileText, profileDisplay };
