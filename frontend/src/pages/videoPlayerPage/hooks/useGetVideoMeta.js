import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { GogoClient } from "services/GogoClient";

const useGetVideoMeta = (animeId) => {
  
  const getVideoMeta = async ({animeId}) => {
    const {data} = await GogoClient.get(`/anime-details/${animeId}`)
    return data
  }
  const {data: videoMeta} = useQuery(["VideoData", animeId], () => getVideoMeta({animeId}))
  return {videoMeta}

};

export default useGetVideoMeta;
