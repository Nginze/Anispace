import React from "react";
import { useNavigate } from "react-router-dom";

const SearchResult = ({ animeId, animeImg, title, status }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/anime/${animeId}`);
  };
  return (
    <div onClick={handleNavigate} className="bg-[#1d1d1d] p-2 cursor-pointer w-full mb-2">
      <div className="flex items-start">
        <div className="w-8">
          <img src={animeImg} />
        </div>
        <div className="flex flex-col items-start pl-2">
          <span className="mb-1 text-sm leading-[1.3em] font-normal text-white">
            {title}
          </span>
          <span className="flex items-center">
            <span className="leading-[1.4em] text-[#777] text-[12px] mr-3">
              Type: <span className="text-[#d0d0d0]">Series</span>{" "}
            </span>
            <span className="leading-[1.4em] text-[#777] text-[12px]">
              Release: <span className="text-[#d0d0d0]">{status}</span>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
