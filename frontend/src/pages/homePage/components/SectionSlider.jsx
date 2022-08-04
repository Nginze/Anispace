import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import AnimePreviewCard from "./AnimePreviewCard";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Ring } from "@uiball/loaders";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

const SectionSlider = ({ dataList, headerText, type }) => {
  const slideNext = () => {};
  return (
    <div className="flex-col text-left w-3/4 m-auto mb-5">
      <div className="flex items-center justify-between">
        <span>{headerText}</span>
        <div className="flex items-center">
          <span className="text-2xl cursor-pointer">
            <GoChevronLeft />
          </span>
          <button onClick={slideNext} className="text-2xl cursor-pointer">
            <GoChevronRight />
          </button>
        </div>
      </div>

      <div className="w-full flex justify-center ">
        {!dataList && (
          <div className="w-full m-auto flex justify-center">
            <Ring size={40} lineWeight={5} speed={2} color="white" />
          </div>
        )}
        <Swiper className="mt-4" spaceBetween={40} slidesPerView={7}>
          {type === "RECENT" && dataList
            ? dataList.map(episode => (
                <SwiperSlide>
                  <AnimePreviewCard
                    key={episode.animeId}
                    imgUrl={episode.animeImg}
                    title={episode.animeTitle}
                    episodeId={episode.episodeId}
                    episodeNum={episode.episodeNum}
                  />
                </SwiperSlide>
              ))
            : null}
          {type === "TRENDING" && dataList
            ? dataList.map(anime => (
                <SwiperSlide>
                  <AnimePreviewCard
                    key={anime.animeId}
                    imgUrl={anime.animeImg}
                    title={anime.animeTitle}
                    latestEpisode={anime.latestEp}
                  />
                </SwiperSlide>
              ))
            : null}
          {type === "FAVOURITE" && dataList
            ? dataList.map(anime => (
                <SwiperSlide>
                <AnimePreviewCard
                    key={anime.animeId}
                    imgUrl={anime.animeImg}
                    title={anime.animeTitle}
                    status={anime.releasedDate}
                  />
                </SwiperSlide>
              ))
            : null}
        </Swiper>
      </div>
    </div>
  );
};

export default SectionSlider;
