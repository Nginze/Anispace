import { GogoClient } from "services/GogoClient";
const { useQuery } = require("@tanstack/react-query");


const useAnimeInfo = (animeId) => { 
  const getAnimeInfo = async ({animeId}) => {
    const { data } = await GogoClient.get(`/api/details/anime-details/${animeId}`);
    return data;
  };
  const {data: animeInfo} = useQuery(["AnimeInfo", animeId ], () => getAnimeInfo({animeId}))
  return {animeInfo}
};

export default useAnimeInfo;
