import { useQuery } from "@tanstack/react-query";
import { GogoClient } from "services/GogoClient";

const useHomepage = () => { 
  const getRecentEpisodes = async () => {
    const { data } = await GogoClient.get(`/api/category/recent-release`);
    return data;
  };
  const getTrendingAnime = async () => {
    const { data } = await GogoClient.get(`api/category/top-airing`);
    return data;
  };
  const getFavouriteAnime = async () => {
    const { data } = await GogoClient.get(`api/category/popular`);
    return data;
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
