import { fetchNextPage } from "./nextPage.mjs";
import { listings_section } from "../utils/domElements.mjs";

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

      if (
        scrollY + windowHeight >= documentHeight - 100 ||
        listings_section.innerHTML.length === 0
      ) {
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
