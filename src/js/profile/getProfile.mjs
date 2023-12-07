import { fetchBase } from "../api/fetch/fetch.mjs";

async function getProfile(endpoint) {
  const result = await fetchBase(endpoint, "GET");
  console.log(result);
  return result;
}

export { getProfile };
