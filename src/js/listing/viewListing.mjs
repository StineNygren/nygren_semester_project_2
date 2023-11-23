const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let postId = urlParams.get("id");
