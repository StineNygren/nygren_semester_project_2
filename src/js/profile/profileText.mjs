import { getProfile } from "./getProfile.mjs";
import {
  profile_name,
  profile_avatar,
  profile_email,
  user,
  profile_display,
} from "../utils/domElements.mjs";
import { displayListings } from "../home/displayListings.mjs";

async function profileText() {
  const profile = await getProfile(`profiles/${user}`);
  profile_name.innerHTML = profile.name;
  profile_avatar.src = profile.avatar;
  profile_email.innerHTML = profile.email;
  console.log(profile);
}
async function profileDisplay() {
  const profileContent = await getProfile(`profiles/${user}/listings`);
  //profile_display.innerHTML += profileContent;
  profileContent.forEach((listing) => {
    displayListings(listing);
  });
  //displayListings(profileContent);

  console.log(profileContent);
}

// async function profileText() {
//   const profile = await getProfile(user);
//   profile_name.innerHTML = profile.name;
//   profile_avatar.src = profile.avatar;
//   profile_email.innerHTML = profile.email;
//   console.log(profile);
// }

//window.location.href = ""
export { profileText, profileDisplay };
