import { useQuery } from "@tanstack/react-query";
import { GogoClient } from "services/GogoClient";

const useGenreFilter = (genre) => {
  const getGenre = async ({ genre }) => {
    const { data } = await GogoClient.get(`api/g/genre/${genre}`);
    return data
  };
  const { data: animeList, isLoading: listLoading } = useQuery(
    ["Genre", genre],
    () => getGenre({ genre })
  );
  return { animeList, listLoading };
};

export default useGenreFilter;
