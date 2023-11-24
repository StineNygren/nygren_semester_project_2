// searchFilter.mjs
import { search_input } from "../utils/domElements.mjs";

function searchFilter(inputArray) {
  const inputString = search_input.value.toLowerCase();

  return inputArray.filter((item) => {
    return item.title.toLowerCase().includes(inputString);
  });
}

export { searchFilter };
