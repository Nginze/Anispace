import useVideoStore from "store/useVideoStore";

export const reduceEpisodeId = id => {
  const data = id.split("-episode-");
  return { title: data[0], episodeNumber: data[1] };
};
