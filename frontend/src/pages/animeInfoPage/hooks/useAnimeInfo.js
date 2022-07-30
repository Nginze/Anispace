const { useQuery } = require("@tanstack/react-query");
const { default: axios } = require("axios");

const useAnimeInfo = (animeId) => {
  const GogoClient = axios.create({
    baseURL: "http://localhost:5000",
  });
  const getAnimeInfo = async ({animeId}) => {
    const { data } = await GogoClient.get(`/animeMeta/${animeId}`);
    return data
  };
  const {data: animeInfo} = useQuery(["AnimeInfo", animeId ], () => getAnimeInfo({animeId}))
  return {animeInfo}
};

export default useAnimeInfo;
