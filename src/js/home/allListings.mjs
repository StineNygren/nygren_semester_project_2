import { fetchBase } from "../api/fetch/fetch.mjs";

async function allListings(offset, limit) {
  const result = await fetchBase(
    `listings?limit=${limit}&offset=${offset}&_seller=true&_active=true&sort=endsAt&sortOrder=asc`,
    "GET",
  );

  console.log(result.status);

  return result;
}
export { allListings };
