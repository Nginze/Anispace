export const reduceEpisodeId = id => {
  const data = id.split("-episode-");
  return {title: data[0], episodeNumber: data[1]}
};
export const changeServer = src => {
  //set global video src to src
}
