import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import AnimePreviewCard from "./AnimePreviewCard";

const SectionSlider = ({ episodesList }) => {
  return (
    <div className="flex-col text-left w-3/4 m-auto">
      <span>Header</span>
      <div className="">
        <Swiper
          spaceBetween={10}
          slidesPerView={6}
          onSlideChange={() => console.log("slide change")}
          onSwiper={swiper => console.log(swiper)}
        >
          {episodesList ? (
            episodesList.map(episode => (
              <SwiperSlide>
                <AnimePreviewCard
                  key={episode.animeId}
                  imgUrl={episode.animeImg}
                  title={episode.animeTitle}
                  episodeId={episode.episodeId}
                  episodeImg={episode.animeImg}
                  //   setCurrentEpisode={setCurrentEpisode}
                  //   setCurrentPoster={setCurrentPoster}
                />
              </SwiperSlide>
            ))
          ) : (
            <h1>Loading...</h1>
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default SectionSlider;
