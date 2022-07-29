import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetVideoMeta = (animeId) => {
  const GogoClient = axios.create({
    baseURL: "http://localhost:5000",
  });
  const getVideoMeta = async ({animeId}) => {
    const {data} = await GogoClient.get(`/anime-details/${animeId}`)
    return data
  }
  const {data: videoMeta} = useQuery(["VideoData", animeId], () => getVideoMeta({animeId}))
  return {videoMeta}

};

export default useGetVideoMeta;
