function imageCheck(url, callback) {
  const img = new Image();
  img.onload = () => callback(true);
  img.onerror = () => callback(false);
  img.src = url;

  // Check if the image is already in the browser's cache
  if (img.complete) {
    callback(img.naturalWidth !== 0); // true if loaded successfully, false otherwise
  }
}

export { imageCheck };
