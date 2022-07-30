export const animeIdParser = animeTitle => {
  return animeTitle
    .replace(/[^A-Za-z0-9 ×-]/g, "")
    .toLowerCase()
    .split(" ")
    .join("-");
};
