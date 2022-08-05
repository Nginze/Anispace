import { useState } from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";
const NextPrevControls = ({ aId, episodeNumber, totalEpisodes }) => {
  const navigate = useNavigate();
  const loadNextEpisode = () => {
    if (episodeNumber < totalEpisodes) {
      navigate(`/watch/${aId}-episode-${episodeNumber + 1}`);
    }
  };
  const loadPrevEpisode = () => {
    if (episodeNumber >= 2) {
      navigate(`/watch/${aId}-episode-${episodeNumber - 1}`);
    }
  };
  return (
    <div className="w-full h-5 my-6 flex justify-between">
      <div></div>
      <div className="flex items-center">
        <button
          onClick={loadPrevEpisode}
          className= {`mr-9 font-light flex items-center ${episodeNumber >= 2 ? 'text-[#ffffff]' : 'text-[#ffffff63]'}`}
        >
          <GoChevronLeft />
          Prev
        </button>
        <button
          onClick={loadNextEpisode}
          className={`mr-9 font-light flex items-center ${episodeNumber < totalEpisodes ? 'text-[#ffffff]' : 'text-[#ffffff63]'}`}
        >
          Next
          <GoChevronRight />
        </button>
      </div>
    </div>
  );
};

export default NextPrevControls;
