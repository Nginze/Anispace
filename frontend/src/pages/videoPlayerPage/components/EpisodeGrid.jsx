import React from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const EpisodeGrid = ({ episodeList }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return (
    <div class="w-full flex flex-wrap">
      {episodeList?.map(episode => {
        return (
          <div
            class="w-12 h-8 p-1 cursor-pointer"
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
