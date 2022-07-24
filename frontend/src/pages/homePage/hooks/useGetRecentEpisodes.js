import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetRecentEpisodes = () => {
  const GogoClient = axios.create({
    baseURL: "http://localhost:5000",
  });
  const getRecentEpisodes = async () => {
    const { data } = await GogoClient.get(`/recent-release`);
    return data;
  };
  const {data: recentEpisodesList} = useQuery(["recentEpisodesList"], getRecentEpisodes)

  return { recentEpisodesList };
};

export default useGetRecentEpisodes;
