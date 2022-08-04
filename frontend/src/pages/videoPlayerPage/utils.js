export const reduceEpisodeId = id => {
  const data = id.split("-episode-");
  return {animeId: data[0], episodeNumber: parseInt(data[1]) };
};
