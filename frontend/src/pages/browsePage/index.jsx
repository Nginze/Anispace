import React from "react";
import AnimeBox from "containers/AnimeBox";
import { useParams } from "react-router-dom";
import useBrowse from "./hooks/useBrowse";

const Index = () => {
  const { category } = useParams();
  const { browseCategory, isLoading } = useBrowse(category);
  return (
    <div className="w-4/5 m-auto">
      <AnimeBox animeList={browseCategory} loading={isLoading} />
    </div>
  );
};

export default Index;
