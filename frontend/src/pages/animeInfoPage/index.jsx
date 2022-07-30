import EpisodeGrid from "pages/videoPlayerPage/components/EpisodeGrid";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAnimeInfo from "./hooks/useAnimeInfo";
import parse from "html-react-parser";
const Index = () => {
  const navigate = useNavigate();
  const { anId } = useParams();
  const { animeInfo } = useAnimeInfo(anId);
  const [showMoreDesc, setShowMoreDesc] = useState(false);
  const loadFirstEpisode = () => {
    const episodeId = animeInfo.epList[0].episodeId;
    navigate(`/watch/${episodeId}`);
  };
  const showMoreDescription = () => {
    setShowMoreDesc(!showMoreDesc);
  };
  return (
    <div className="w-full flex-col ">
      <div className="anime-info-banner h-80 relative bg-[url(https://4anime.gg/images/detail-bg.jpg)] before:left-0 before:right-0 before:bottom-0 before:content-['']  before:absolute before:top-0 before: "></div>
      <div className="w-3/4 m-auto mt-[-200px] flex items-start justify-center">
        <div className="w-56 z-30 text-[#bbb]">
          <div className="w-full h-80">
            <img
              className="w-full h-full object-cover"
              src={animeInfo?.meta?.Media?.coverImage?.large}
            />
          </div>
          <div className="text-left p-3 flex flex-col ">
            <span className="flex flex-col text-sm mb-2">
              <span className="text-[13px] text-[#666]">Type</span>
              <span className="font-semibold text-[#999]">
                {animeInfo?.meta?.Media?.type}
              </span>
            </span>
            <span className="flex flex-col text-sm mb-2">
              <span className="text-[13px] text-[#666]">Episodes</span>
              <span className="font-semibold text-[#999]">
                {animeInfo?.meta?.Media?.episodes}
              </span>
            </span>
            <span className="flex flex-col text-sm mb-2">
              <span className="text-[13px] text-[#666]">Status</span>
              <span className="font-semibold text-[#999]">
                {animeInfo?.meta?.Media?.status}
              </span>
            </span>
            <span className="flex flex-col text-sm mb-2">
              <span className="text-[13px] text-[#666]">Release Date</span>
              <span className="font-semibold text-[#999]">
                {animeInfo?.meta?.Media?.seasonYear}
              </span>
            </span>
            <span className="flex flex-col text-sm mb-2">
              <span className="text-[13px] text-[#666]">Language</span>
              <span className="font-semibold text-[#999]">Subbed</span>
            </span>
          </div>
        </div>
        <div className="w-3/4 ml-7 mt-[103px] text-left text-[#bbb] z-30">
         
          <div className="h-10 w-full mb-3">
            <span className="text-3xl ">
              {animeInfo?.meta?.Media?.title.romaji}
            </span>
          </div>
          <div className="flex mb-4">
            {animeInfo?.meta?.Media?.genres?.map(genre => (
              <span className="mr-10 cursor-pointer">{genre}</span>
            ))}
          </div>
          <div>
            {animeInfo && (
              <div className="pt-5 text-white opacity-50 ">
                {showMoreDesc
                  ? parse(animeInfo?.meta?.Media?.description)
                  : parse(
                      animeInfo?.meta?.Media?.description.substring(0, 300)
                    ) + "..."}
                <button
                  onClick={showMoreDescription}
                  className="ml-1 text-white font-bold opacity-100"
                >
                  {showMoreDesc ? "less" : "more"}
                </button>
              </div>
            )}
            <div className="text-center py-6">
              <EpisodeGrid episodeList={animeInfo?.epLists} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
