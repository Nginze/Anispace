import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useHomepage = () => {
  const GogoClient = axios.create({
    baseURL: "http://localhost:5000",
  });
  const getRecentEpisodes = async () => {
    const { data } = await GogoClient.get(`/recent-release`);
    return data;
  };
  const getTrendingAnime = async () => {
    const { data } = await GogoClient.get(`/trending`);
    return data.data.Page.media;
  };
  const getFavouriteAnime = async () => {
    const { data } = await GogoClient.get(`/favourite`);
    return data.data.Page.media;
  };
  const { data: recentEpisodesList } = useQuery(
    ["recentEpisodesList"],
    getRecentEpisodes
  );
  const { data: trendingAnimeList } = useQuery(
    ["trendingAnimeList"],
    getTrendingAnime
  );
  const { data: favouriteAnimeList } = useQuery(
    ["favouriteAnimeList"],
    getFavouriteAnime
  );

  return { recentEpisodesList, trendingAnimeList, favouriteAnimeList };
};

export default useHomepage;
