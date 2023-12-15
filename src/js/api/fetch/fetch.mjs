import { baseURL } from "./baseURL.mjs";
import { jwt } from "../../utils/domElements.mjs";

/**
 * Fetches data from an API endpoint using the specified method and body.
 * @param {string} endPoint - The API endpoint to fetch data from.
 * @param {string} method - The HTTP method to use for the request (e.g., GET, POST, PUT, DELETE).
 * @param {Object} body - The request body to send with the request.
 * @returns {Promise<Object>} - A promise that resolves to the fetched data.
 * @throws {Error} - If there is an HTTP error or an error occurs during the fetch operation.
 */
export async function fetchBase(endPoint, method, body) {
  try {
    const url = `${baseURL}${endPoint}`;
    const headers = {
      "Content-Type": "application/json",
      Authorization: `${jwt}`,
    };

    const options = {
      method: method,
      headers: headers,
      body: JSON.stringify(body),
    };

    const response = await fetch(url, options);
    console.log(response.status);

    if (!response.ok) {
      console.error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw error; // Rethrow the error
  }
}
