import React from "react";
import AnimePlayer from "./components/AnimePlayer";
import { useParams } from "react-router-dom";
import useGetVideoSrc from "hooks/useGetVideoSrc";
import EpisodeGrid from "./components/EpisodeGrid";
import useGetVideoMeta from "./hooks/useGetVideoMeta";
import ServerOptions from "./components/ServerOptions";
import PlayerHeaderFragment from "./components/PlayerHeaderFragment";
import NextPrevControls from "./components/NextPrevControls";
const Index = () => {
  const { epId } = useParams();
  const {videoSrcList} = useGetVideoSrc(epId)
  const animeId = epId.replace("-episode-", "").replace(/\d+$/, "")
  // const {videoMeta} = useGetVideoMeta(animeId)
  return (
    <div>
      <div className="w-3/4 m-auto">
        <div className="w-full m-auto">
          <PlayerHeaderFragment title={"One Piece"}/>
          <AnimePlayer episodeSrc={videoSrcList?.sources[0]?.file}/>
          <NextPrevControls/>
          <ServerOptions/>
          {/* <EpisodeGrid episodeList = {videoMeta?.episodesList}/> */}
        </div>
      </div>
    </div>
  );
};

export default Index;
