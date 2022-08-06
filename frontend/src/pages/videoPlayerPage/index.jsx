
import AnimePlayer from "./components/AnimePlayer";
import { useParams } from "react-router-dom";
import useGetVideoSrc from "hooks/useGetVideoSrc";
import EpisodeGrid from "./components/EpisodeGrid";
import useGetVideoMeta from "./hooks/useGetVideoMeta";
import ServerOptions from "./components/ServerOptions";
import PlayerHeaderFragment from "./components/PlayerHeaderFragment";
import NextPrevControls from "./components/NextPrevControls";
import { Ring } from "@uiball/loaders";
import { reduceEpisodeId } from "./utils";
import useVideoStore from "store/useVideoStore";
import { useEffect } from "react";
const Index = () => {
  const { epId } = useParams();
  const currentSrc = useVideoStore(state => state.currentSrc);
  const setSrc = useVideoStore(state => state.setSrc);
  const {
    vidSrcListVidcdn,
    vidSrcListFembed,
    vidSrcListStreamSb,
    defaultSrcIsLoading,
  } = useGetVideoSrc(epId);
  const animeId = epId.replace("-episode-", "").replace(/\d+$/, "");
  const { animeId: aId, episodeNumber } = reduceEpisodeId(epId);
  const { videoMeta } = useGetVideoMeta(animeId);
  useEffect(() => {
  setSrc(vidSrcListVidcdn?.data?.sources[0]?.file);
  }, [defaultSrcIsLoading]);
  // if (!defaultSrcIsLoading) {
    
  //   // return (
  //   //   <>
  //   //     <div className="flex flex-col items-center mt-52">
  //   //       <span className="flex items-center"><Ring color="white" size={15}/><span className="ml-2">Fetching Streaming Links ...</span></span>
  //   //     </div>
  //   //   </>
  //   // );
  // } 
  return (
    <div>
      <div className="w-3/4 m-auto">
        <div className="w-full m-auto">
          <PlayerHeaderFragment
            title={videoMeta?.animeTitle}
            episodeNumber={episodeNumber}
          />
          <AnimePlayer episodeSrc={currentSrc} />
          <NextPrevControls
            aId={aId}
            episodeNumber={episodeNumber}
            totalEpisodes={videoMeta?.totalEpisodes}
          />
          <ServerOptions
            subLinks={{
              vidcdn: vidSrcListVidcdn?.data?.error
                ? undefined
                : vidSrcListVidcdn?.data?.sources[0]?.file,
              streamsb: vidSrcListStreamSb?.data?.error
                ? undefined
                : vidSrcListStreamSb?.data?.data[0]?.file,
              fembed: vidSrcListFembed?.data?.error
                ? undefined
                : vidSrcListFembed?.data?.data[0]?.file,
            }}
            dubLinks={{
              vidcdn: vidSrcListVidcdn?.dataDub?.sources[0]?.file,
              streamsb: vidSrcListStreamSb?.dataDub?.data[0]?.file,
              fembed: vidSrcListFembed?.dataDub?.data[0]?.file,
            }}
          />
          <EpisodeGrid
            episodeList={videoMeta?.episodesList}
            videoMeta={videoMeta}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
