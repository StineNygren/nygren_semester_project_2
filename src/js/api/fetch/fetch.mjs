import { baseURL } from "../env/env.mjs";

export async function fetchBase(endPoint, method, body) {
  try {
    const url = `${baseURL}${endPoint}`;
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDc5LCJuYW1lIjoiVXNlciIsImVtYWlsIjoidXNlckBub3JvZmYubm8iLCJhdmF0YXIiOiJodHRwczovL21lZGlhLm1hY3BodW4uY29tL2ltZy91cGxvYWRzL2N1c3RvbWVyL2hvdy10by81NzkvMTU1MzE4NDA3MjVjOTNiNTQ4OWQ4NGU5LjQzNzgxNjIwLmpwZz9xPTg1Jnc9MTM0MCIsImNyZWRpdHMiOjEwMDAsIndpbnMiOltdLCJpYXQiOjE2OTk0NTA1MTV9.sR29hTKU-NFbEnCbFARmez3u6a9tVQwUirrkoGU2uIo`, // Add your actual token here
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
    throw error; // Re-throw the error to handle it elsewhere if needed
  }
}
