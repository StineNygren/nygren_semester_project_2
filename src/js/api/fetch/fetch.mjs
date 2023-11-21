import { baseURL } from "../env/env.mjs";
import { jwt } from "../../utils/domElements.mjs";

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

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}
