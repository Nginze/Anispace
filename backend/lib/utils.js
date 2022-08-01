export const USER_AGENT =
 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36';
export const renameKey = (obj, oldKey, newKey) => {
 if (!obj.hasOwnProperty(oldKey)) return;
 const oldValue = obj[oldKey];
 delete obj[oldKey];
 obj[newKey] = oldValue;
};
export const animeIdParser = (animeTitle) => {
 return animeTitle
  ?.replace(/[^A-Za-z0-9 ×-]/g, '')
  .toLowerCase()
  .split(' ')
  .join('-');
};
export const dubParser = (episodeId) => {
 const [animeId, episodeNumber] = episodeId.split('-episode-');
 const episodeIdDub = `${animeId}-dub-episode-${episodeNumber}`;
 return episodeIdDub;
};
export const anilistParser = (animeTitle) => {
 animeTitle = animeTitle.replace("-dub", "").replace("-tv", "")
 if (animeTitle.length > 24) {
  const splitString = animeTitle.split('-').join(' ');
  console.log(animeTitle.length);
  console.log(splitString.substring(0, 25));
  return splitString?.substring(0, 25);
 }
 const splitString = animeTitle.split('-').join(' ');
 console.log(splitString);
 return splitString;
};
