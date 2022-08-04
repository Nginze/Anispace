import { useQuery } from "@tanstack/react-query";
import { GogoClient } from "services/GogoClient";
const useBrowse = category => {
  const getBrowseCategory = async ({ category }) => {
    const { data } = await GogoClient.get(`/api/category/${category}`);
    return data;
  };
  const { data: browseCategory, isLoading } = useQuery(
    ["browseCategory", category],
    () => getBrowseCategory({ category })
  );

  return { browseCategory, isLoading };
};

export default useBrowse;
