import React from "react";
import AnimePlayer from "./components/AnimePlayer";
import { useParams } from "react-router-dom";
import useGetVideoSrc from "hooks/useGetVideoSrc";
const Index = () => {
  const { epId } = useParams();
  const {videoSrcList} = useGetVideoSrc(epId)
  return (
    <div>
      <div className="w-3/4 m-auto">
        <div className="w-full m-auto">
          <AnimePlayer episodeSrc={videoSrcList?.sources[0].file}/>
        </div>
      </div>
    </div>
  );
};

export default Index;
