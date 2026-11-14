const getCroppedImageUrl = (url: string) => {
  const mediaIndex = url.indexOf("media/");
  if (mediaIndex === -1) return url;

  const index = mediaIndex + "media/".length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
