// import { listings_section } from "../utils/domElements.mjs";
// import { imageCheck } from "./imageCheck.mjs";

// function displayListings(result) {
//   let media = result.media;

//   imageCheck(result.media[0], (exists) => {
//     if (!exists) {
//       console.error("Image does not exist.");
//       media =
//         "https://images.unsplash.com/photo-1633544325196-bcf8bf81ead0?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
//     }

//     // Now, you can use the updated 'media' variable here or in subsequent code.
//     console.log("Final media:", media);
//   });

//   // let media = result.media;
//   // if (!result.media[0]) {
//   //   media =
//   //     "https://images.unsplash.com/photo-1633544325196-bcf8bf81ead0?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
//   // }

//   const timeLine = result.endsAt.slice(0, 10);

//   const listingElement = document.createElement("a");
//   listingElement.href = `/listing.html?id=${result.id}`;

//   listingElement.className =
//     "border-2 border-gray-200 rounded-lg shadow flex flex-col justify-between";

//   listingElement.innerHTML = `

//     <img class="rounded-t-lg h-full object-cover  w-full" src="${media}" alt="" />
//     <div class="p-5">
//       <p class="text-gray-600">By ${result.seller.name}</p>
//       <h2 class="text-xl">${result.title}</h2>
//       <p>${result.description}</p>
//       <h3 class="text-center text-xl">${timeLine}</h3>
//     </div>
//   `;

//   listings_section.appendChild(listingElement);
// }

// export { displayListings };

////////////////////////////

// import { listings_section } from "../utils/domElements.mjs";
// import { imageCheck } from "./imageCheck.mjs";

// function displayListings(result) {
//   console.log(result);
//   let media = result.media[0];

//   const displayPromise = new Promise((resolve) => {
//     imageCheck(result.media[0], (exists) => {
//       if (!exists) {
//         console.error("Image does not exist.");
//         media =
//           "https://images.unsplash.com/photo-1633544325196-bcf8bf81ead0?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
//       }
//       resolve(media);
//     });
//   });

//   displayPromise.then((finalMedia) => {
//     const timeLine = result.endsAt.slice(0, 10);

//     const listingElement = document.createElement("a");
//     listingElement.href = `./listing.html?id=${result.id}`;

//     listingElement.className =
//       "border-2 border-gray-200 rounded-lg shadow flex flex-col justify-between";

//     listingElement.innerHTML = `
//       <img class="rounded-t-lg object-cover  w-96 h-96" src="${finalMedia}" alt="" />
//       <div class="p-5">
//         <p class="text-gray-600">By ${result.seller.name}</p>
//         <h2 class="text-xl">${result.title}</h2>
//         <p>${result.description}</p>
//         <h3 class="text-center text-xl">${timeLine}</h3>
//       </div>
//     `;

//     listings_section.appendChild(listingElement);
//   });
// }

// export { displayListings };

import { listings_section } from "../utils/domElements.mjs";
import { imageCheck } from "./imageCheck.mjs";

function displayListings(result) {
  console.log(result);
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
    imgElement.alt = "";

    const divElement = document.createElement("div");
    divElement.className = "p-5";

    // const sellerParagraph = document.createElement("p");
    // sellerParagraph.className = "text-gray-600";
    // sellerParagraph.textContent = `By ${result.seller.name}`;

    // Check if the current page is not profile.html before adding the seller information
    if (window.location.pathname !== "/profile.html") {
      const sellerParagraph = document.createElement("p");
      sellerParagraph.className = "text-gray-600";
      sellerParagraph.textContent = `By ${result.seller.name}`;
      divElement.appendChild(sellerParagraph);
    }

    const titleHeader = document.createElement("h2");
    titleHeader.className = "text-xl";
    titleHeader.textContent = result.title;

    const descriptionParagraph = document.createElement("p");
    descriptionParagraph.textContent = result.description;

    const timelineHeader = document.createElement("h3");
    timelineHeader.className = "text-center text-xl";
    timelineHeader.textContent = timeLine;

    //divElement.appendChild(sellerParagraph);
    divElement.appendChild(titleHeader);
    divElement.appendChild(descriptionParagraph);
    divElement.appendChild(timelineHeader);

    listingElement.appendChild(imgElement);
    listingElement.appendChild(divElement);

    listings_section.appendChild(listingElement);
  });
}

export { displayListings };
