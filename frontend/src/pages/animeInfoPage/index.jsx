import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import useAnimeInfo from "./hooks/useAnimeInfo";

const Index = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams
    .get("name")
    .replace(":", "")
    .replace("(", "")
    .replace(")", "");
  const { animeInfo } = useAnimeInfo(searchQuery.toLowerCase());
  const loadFirstEpisode = () => {
    const episodeId = animeInfo.epList[0].episodeId;
    navigate(`/watch/${episodeId}`);
  };
  return (
    <div className="w-full flex-col ">
      <div className="anime-info-banner h-80 relative bg-[url(https://4anime.gg/images/detail-bg.jpg)] before:left-0 before:right-0 before:bottom-0 before:content-['']  before:absolute before:top-0 before: "></div>
      <div className="w-3/4 m-auto mt-[-200px] flex items-start justify-center">
        <div className="w-56 z-30 text-[#bbb]">
          <div className="w-full h-80">
            <img
              className="w-full h-full object-cover"
              src="https://gogocdn.net/cover/bonobono-1995.png"
            />
          </div>
          <div className="text-left px-3 flex flex-col ">
            <span className="flex flex-col">
              <span>Type</span>
              <span>TV Series</span>
            </span>
            <span className="flex flex-col">
              <span>Studio</span>
              <span>Shaft</span>
            </span>
            <span className="flex flex-col">
              <span>Release Date</span>
              <span>Currently Airing</span>
            </span>
            <span className="flex flex-col">
              <span>Language</span>
              <span>Subbed</span>
            </span>
            <div>
              <button onClick={loadFirstEpisode}>Watch Now</button>
            </div>
          </div>
        </div>
        <div className="w-3/4 ml-7 mt-[103px] text-left text-[#bbb] z-30">
          <div className="h-10 w-64 mb-3">
            <span className="text-3xl  ">Naruto Shippuden</span>
          </div>
          <div className="flex mb-4">
            <span className="mr-10 cursor-pointer">Action</span>
            <span className="mr-10 cursor-pointer">Adventure</span>
            <span className="mr-10 cursor-pointer">shounen</span>
          </div>
          <div className="pt-3 ">
            In the world of Remnant, humans and Faunus—human-animal
            hybrids—carry on their everyday lives despite the omnipresent threat
            of the monstrous Grimm. Dedicated Huntsmen and Huntresses battle
            Grimm with both customized weapons
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
