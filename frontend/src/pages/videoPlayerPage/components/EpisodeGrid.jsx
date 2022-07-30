import React from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const EpisodeGrid = ({ episodeList }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return (
    <div class="scrollable py-4 w-full max-h-40 overflow-y-auto flex flex-wrap  items-start">
      {episodeList?.map(episode => {
        return (
          <div
            class="w-12 h-[40px] p-1 bg-[#201e1f] m-1 text-[#747474] text-sm rounded cursor-pointer"
            onClick={() => {
              navigate(`/watch/${episode.episodeId}`, { replace: true });
              queryClient.invalidateQueries("videoSrcList");
            }}
          >
            {episode.episodeNum}
          </div>
        );
      })}
    </div>
  );
};

export default EpisodeGrid;
