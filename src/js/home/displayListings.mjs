import { listings_section } from "../utils/domElements.mjs";
import { imageCheck } from "./imageCheck.mjs";

function displayListings(result) {
  let media = result.media[0];

  const displayPromise = new Promise((resolve) => {
    imageCheck(result.media[0], (exists) => {
      if (!exists) {
        console.error("Image does not exist.");
        media =
          "https://images.unsplash.com/photo-1633544325196-bcf8bf81ead0?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
      }
      resolve(media);
    });
  });

  displayPromise.then((finalMedia) => {
    const timeLine = result.endsAt.slice(0, 10);

    const listingElement = document.createElement("a");
    listingElement.href = `./listing.html?id=${result.id}`;
    listingElement.className =
      "border-2 border-gray-200 rounded-lg shadow flex flex-col justify-between";

    const imgElement = document.createElement("img");
    imgElement.className = "rounded-t-lg object-cover w-96 h-96";
    imgElement.src = finalMedia;
    imgElement.alt = `image for ${result.title}`;

    const divElement = document.createElement("div");
    divElement.className = "p-5";

    if (window.location.pathname !== "/profile.html") {
      const sellerParagraph = document.createElement("p");
      sellerParagraph.className = "text-gray-600";
      sellerParagraph.textContent = `By ${result.seller.name}`;
      divElement.appendChild(sellerParagraph);
    }

    const titleHeader = document.createElement("h2");
    titleHeader.className = "text-xl line-clamp-1";
    titleHeader.textContent = result.title;

    const descriptionParagraph = document.createElement("p");
    descriptionParagraph.textContent = result.description;
    descriptionParagraph.className = "line-clamp-3";

    const timelineHeader = document.createElement("h3");
    timelineHeader.className = "text-center text-xl";
    timelineHeader.textContent = timeLine;

    divElement.appendChild(titleHeader);
    divElement.appendChild(descriptionParagraph);
    divElement.appendChild(timelineHeader);

    listingElement.appendChild(imgElement);
    listingElement.appendChild(divElement);

    listings_section.appendChild(listingElement);
  });
}

export { displayListings };
