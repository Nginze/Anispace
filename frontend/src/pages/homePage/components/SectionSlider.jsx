import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import AnimePreviewCard from "./AnimePreviewCard";

const SectionSlider = ({ dataList, headerText, type }) => {
  return (
    <div className="flex-col text-left w-3/4 m-auto mb-5">
      <span>{headerText}</span>
      <div className="">
        {!dataList && <h1>loading...</h1>}
        <Swiper spaceBetween={10} slidesPerView={6}>
          {type == "RECENT" && dataList ? (
            dataList.map(episode => (
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
           null 
          )}
          {type == "TRENDING" && dataList ? (
            dataList.map(anime => (
              <SwiperSlide>
                <AnimePreviewCard
                  key={anime.title.english}
                  imgUrl={anime.coverImage.large}
                  title={anime.title.english}
                />
              </SwiperSlide>
            ))
          ) : (
           null 
          )}
          {type == "FAVOURITE" && dataList ? (
            dataList.map(anime => (
              <SwiperSlide>
                <AnimePreviewCard
                  key={anime.title.english}
                  imgUrl={anime.coverImage.large}
                  title={anime.title.english}
                />
              </SwiperSlide>
            ))
          ) : (
           null 
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default SectionSlider;
