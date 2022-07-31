import { GogoClient } from "services/GogoClient";

const { useQuery } = require("@tanstack/react-query");
const { default: axios } = require("axios");

const useAnimeInfo = (animeId) => { 
  const getAnimeInfo = async ({animeId}) => {
    const { data } = await GogoClient.get(`/animeMeta/${animeId}`);
    return data
  };
  const {data: animeInfo} = useQuery(["AnimeInfo", animeId ], () => getAnimeInfo({animeId}))
  return {animeInfo}
};

export default useAnimeInfo;
