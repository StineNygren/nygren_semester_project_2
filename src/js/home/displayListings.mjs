import { listings_section } from "../utils/domElements.mjs";

function displayListings(result) {
  let media = result.media;
  if (!result.media[0]) {
    media = "https://via.placeholder.com/150";
  }

  const timeLine = result.endsAt.slice(0, 10);

  const listingElement = document.createElement("a");
  listingElement.href = `/listing.html?id=${result.id}`;

  listingElement.className =
    "border-2 border-gray-200 rounded-lg shadow flex flex-col justify-between";

  listingElement.innerHTML = `
  

    <img class="rounded-t-lg h-full object-cover  w-full" src="${media}" alt="" />
    <div class="p-5">
      <p class="text-gray-600">By ${result.seller.name}</p>
      <h2 class="text-xl">${result.title}</h2>
      <p>${result.description}</p>
      <h3 class="text-center text-xl">${timeLine}</h3>
    </div>
  `;

  listings_section.appendChild(listingElement);
}

export { displayListings };
