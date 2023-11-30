//import { allListings } from "../home/allListings.mjs";
import { search } from "../home/search.mjs";
import { fetchNextPage } from "../home/nextPage.mjs";
import { scrollHandler } from "../home/scrollHandler.mjs";
fetchNextPage();
scrollHandler();
search();
//allListings(0, 10);
