/**
 * Checks if an image is valid by loading it and invoking a callback function.
 * @param {string} url - The URL of the image to be checked.
 * @param {function} onImageCheckComplete - The callback function to be invoked when the image check is complete.
 * @returns {void}
 */
function imageCheck(url, onImageCheckComplete) {
  const img = new Image();
  img.onload = () => onImageCheckComplete(true);
  img.onerror = () => onImageCheckComplete(false);
  img.src = url;

  if (img.complete) {
    onImageCheckComplete(img.naturalWidth !== 0); // true if loaded successfully, false otherwise
  }
}

export { imageCheck };
