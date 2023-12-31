import { clearLocalStorage } from "../layout/clearLocalStorage.js";
import "jest-localstorage-mock";

describe("logout function", () => {
  it("clears token from browser", () => {
    localStorage.setItem("token", "mocked-token");

    clearLocalStorage();

    expect(localStorage.getItem("token")).toBeNull();
  });
});
