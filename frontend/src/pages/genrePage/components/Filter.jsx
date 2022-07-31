import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Filter = () => {
  const availableGenres = [
    "action",
    "adventure",
    "cars",
    "comedy",
    "crime",
    "dementia",
    "demons",
    "drama",
    "dub",
    "ecchi",
    "family",
    "fantasy",
    "game",
    "gourmet",
    "harem",
    "hentai",
    "historical",
    "horror",
    "josei",
    "kids",
    "magic",
    "martial-arts",
    "mecha",
    "military",
    "Mmusic",
    "mystery",
    "parody",
    "police",
    "psychological",
    "romance",
    "samurai",
    "school",
    "sci-fi",
    "seinen",
    "shoujo",
    "shoujo-ai",
    "shounen",
    "shounen-ai",
    "slice-of-Life",
    "space",
    "sports",
    "super-power",
    "supernatural",
    "suspense",
    "thriller",
    "vampire",
    "yaoi",
    "yuri",
  ];
  const navigate = useNavigate();
  const handleSelection = e => {
    navigate(`/genre/${e.target.value}`);
  };
  return (
    <div className="w-full flex flex-col items-start">
      <span className="text-left mb-3">Genres</span>
      <div className="flex flex-wrap" >
        {availableGenres.map(genre => (
          <div key={genre} className=" text-[12px] flex items-center mr-2 border border-[rgb(67,68,69)] rounded-[10px] bg-[#29292b] px-[8px] py-[4px] my-[4px]">
            <button onClick={handleSelection} value={genre}>
             {genre.charAt(0).toUpperCase() + genre.slice(1)} 
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
