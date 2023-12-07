import { search_input } from "../utils/domElements.mjs";

/**
 * Filters an array of items based on a search input string.
 * @param {Array} inputArray - The array to be filtered.
 * @returns {Array} - The filtered array.
 */
function searchFilter(inputArray) {
  const inputString = search_input.value.toLowerCase();

  return inputArray.filter((item) => {
    return item.title.toLowerCase().includes(inputString);
  });
}

export { searchFilter };
