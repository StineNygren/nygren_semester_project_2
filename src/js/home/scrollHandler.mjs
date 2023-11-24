// // scrollHandler.mjs
// import { fetchNextPage } from "./nextPage.mjs";

// // Add event listener for global scroll events
// function scrollHandler() {
//   // Add event listener for global scroll events
//   window.addEventListener("scroll", () => {
//     const scrollY = window.scrollY;
//     const windowHeight = window.innerHeight;
//     const documentHeight = Math.max(
//       document.body.scrollHeight,
//       document.documentElement.scrollHeight,
//       document.body.offsetHeight,
//       document.documentElement.offsetHeight,
//       document.body.clientHeight,
//       document.documentElement.clientHeight
//     );

//     // Check if the user has scrolled to the bottom
//     if (scrollY + windowHeight >= documentHeight - 100) {
//       // Fetch the next page when the user is close to the bottom
//       fetchNextPage();
//     }
//   });
// }

// export { scrollHandler };

import { fetchNextPage } from "./nextPage.mjs";

let isLoading = false;

function scrollHandler() {
  window.addEventListener("scroll", () => {
    if (!isLoading) {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      );

      if (scrollY + windowHeight >= documentHeight - 100) {
        isLoading = true;
        fetchNextPage()
          .then(() => {
            isLoading = false;
          })
          .catch((error) => {
            isLoading = false;
            console.error("Error fetching next page:", error);
          });
      }
    }
  });
}

export { scrollHandler };
