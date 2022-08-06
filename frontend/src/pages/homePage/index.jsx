import useRefreshVideoSrc from "hooks/useRefreshVideoSrc";
import React from "react";
import SectionSlider from "./components/SectionSlider";
import useHomepage from "./hooks/useHomepage";

const Index = () => {
  useRefreshVideoSrc()
  const { recentEpisodesList, trendingAnimeList, favouriteAnimeList } =
    useHomepage();
  return (
    <div>
      <SectionSlider
        dataList={recentEpisodesList}
        headerText={"Recent Episodes"}
        type={"RECENT"}
      />
      <SectionSlider
        dataList={trendingAnimeList}
        headerText={"Trending Anime"}
        type={"TRENDING"}
      />
      <SectionSlider
        dataList={favouriteAnimeList}
        headerText={"All Time Favorites"}
        type={"FAVOURITE"}
      />
    </div>
  );
};

export default Index;
