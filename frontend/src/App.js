import useGetVideoSrc from "hooks/useGetVideoSrc";
import AnimePreviewCard from "pages/homePage/components/AnimePreviewCard";
import SectionSlider from "pages/homePage/components/SectionSlider";
import AnimePlayer from "pages/videoPlayerPage/components/AnimePlayer";
import { useState } from "react";
import "./App.css";
import useGetRecentEpisodes from "./pages/homePage/hooks/useGetRecentEpisodes";

function App() {
  const { recentEpisodesList } = useGetRecentEpisodes();
  const [currentEpisode, setCurrentEpisode] = useState(
    "https://manifest.prod.boltdns.net/manifest/v1/hls/v4/clear/6310593120001/9a128db3-eb8c-4be7-9528-752d4f3fa587/6s/master.m3u8?fastly_token=NjJkYzdkODZfMzBhN2EyMDNlZDA2ZWM4YmMwOTcxZjViMTdhYTIwMmIzYThjMGQ5Y2QyMzY2ZGM2MTQzM2EyYTliNTg4NGM4NA%3D%3D"
  );
  const [currentPoster, setCurrentPoster] = useState(
    ""
  );
  return (
    <div className="App">
      {/* <div className="w-1/2">
        <AnimePlayer
          episodeSrc={currentEpisode}
          episodePoster={currentPoster}
        />
      </div> */}
      <SectionSlider episodesList = {recentEpisodesList}/>

      
    </div>
  );
}

export default App;
