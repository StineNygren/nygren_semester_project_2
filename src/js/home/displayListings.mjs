import { listings_section } from "../utils/domElements.mjs";

function displayListings(result) {
  const endTime = new Date(result.endsAt);
  endTime.toISOString();
  let media = result.media;
  if (!result.media[0]) {
    media = "https://via.placeholder.com/150";
  }

  const date = endTime.toLocaleDateString();
  const time = endTime.toLocaleTimeString();

  const timeLine = result.endsAt.slice(0, 10);

  const listingElement = document.createElement("a");
  listingElement.href = "";
  listingElement.className =
    "border border-gray-200 rounded-lg shadow flex flex-col justify-between";

  listingElement.innerHTML = `
    <img class="rounded-t-lg" src="${media}" alt="" />
    <div class="p-5">
      <p class="text-gray-800">By ${result.seller.name}</p>
      <h2 class="text-xl">${result.title}</h2>
      <p>${result.description}</p>
      <h3 class="text-center text-xl">${timeLine}</h3>
    </div>
  `;

  listings_section.appendChild(listingElement);
}

export { displayListings };
