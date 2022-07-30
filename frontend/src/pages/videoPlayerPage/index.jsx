import React from "react";
import AnimePlayer from "./components/AnimePlayer";
import { useParams } from "react-router-dom";
import useGetVideoSrc from "hooks/useGetVideoSrc";
import EpisodeGrid from "./components/EpisodeGrid";
import useGetVideoMeta from "./hooks/useGetVideoMeta";
import ServerOptions from "./components/ServerOptions";
import PlayerHeaderFragment from "./components/PlayerHeaderFragment";
import NextPrevControls from "./components/NextPrevControls";
import { reduceEpisodeId } from "./utils";
const Index = () => {
  const { epId } = useParams();
  const { vidSrcListVidcdn, vidSrcListFembed, vidSrcListStreamSb } =
    useGetVideoSrc(epId);
  const animeId = epId.replace("-episode-", "").replace(/\d+$/, "");
  const { title, episodeNumber } = reduceEpisodeId(epId);
  const { videoMeta } = useGetVideoMeta(animeId);
  return (
    <div>
      <div className="w-3/4 m-auto">
        <div className="w-full m-auto">
          <PlayerHeaderFragment
            title={videoMeta?.animeTitle}
            episodeNumber={episodeNumber}
          />
          <AnimePlayer episodeSrc={vidSrcListVidcdn?.data?.sources[0]?.file} />
          <NextPrevControls />
          <ServerOptions
            subLinks={{
              vidcdn: vidSrcListVidcdn?.data?.sources[0]?.file,
              streamsb: vidSrcListStreamSb?.data.data[0]?.file,
              fembed: vidSrcListFembed?.data.data[0]?.file,
            }}
            dubLinks={{
              vidcdn: vidSrcListVidcdn?.dataDub?.sources[0]?.file,
              streamsb: vidSrcListStreamSb?.dataDub?.data[0]?.file,
              fembed: vidSrcListFembed?.dataDub?.data[0]?.file
            }}
          />
          <EpisodeGrid episodeList={videoMeta?.episodesList} />
        </div>
      </div>
    </div>
  );
};

export default Index;
