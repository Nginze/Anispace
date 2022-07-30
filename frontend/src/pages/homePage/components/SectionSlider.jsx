import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import AnimePreviewCard from "./AnimePreviewCard";

const SectionSlider = ({ dataList, headerText, type }) => {
  return (
    <div className="flex-col text-left w-3/4 m-auto mb-5">
      <span>{headerText}</span>
      <div className="">
        {!dataList && <h1>loading...</h1>}
        <Swiper spaceBetween={40} slidesPerView={7}>
          {type == "RECENT" && dataList
            ? dataList.map(episode => (
                <SwiperSlide>
                  <AnimePreviewCard
                    key={episode.animeId}
                    imgUrl={episode.animeImg}
                    title={episode.animeTitle}
                    episodeId={episode.episodeId}
                    episodeNum = {episode.episodeNum}
                  />
                </SwiperSlide>
              ))
            : null}
          {type == "TRENDING" && dataList
            ? dataList.map(anime => (
                <SwiperSlide>
                  <AnimePreviewCard
                    key={anime.title.userPreferred}
                    imgUrl={anime.coverImage.large}
                    title={anime.title.userPreferred}
                  />
                </SwiperSlide>
              ))
            : null}
          {type == "FAVOURITE" && dataList
            ? dataList.map(anime => (
                <SwiperSlide>
                  <AnimePreviewCard
                    key={anime.title.userPreferred}
                    imgUrl={anime.coverImage.large}
                    title={anime.title.userPreferred}
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
