import axios from "axios";
import { useState, useEffect } from "react";

const useGetRecentEpisodes = () => {
  const [recentEpisodesList, setRecentEpisodes] = useState([]);
  const GogoClient = axios.create({
    baseURL: "http://localhost:5000",
  });
  const getRecentEpisodes = async () => {
    const { data: recentEpisodesList } = await GogoClient.get(
      `/recent-release`
    );
    setRecentEpisodes(recentEpisodesList);
  };
  getRecentEpisodes();

  return { recentEpisodesList };
};

export default useGetRecentEpisodes;
