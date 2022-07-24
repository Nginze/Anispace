import useGetVideoSrc from "hooks/useGetVideoSrc";
import { useState } from "react";

const AnimePreviewCard = ({
  imgUrl,
  rating,
  title,
  episodeId,
  episodeImg,
  setCurrenPoster,
  setCurrentEpisode,
}) => {
  const [isClicked, setIsClicked] = useState(false);
  const { videoSrcList } = useGetVideoSrc(episodeId, isClicked, setIsClicked);
  videoSrcList && setCurrentEpisode(videoSrcList?.sources[0]?.file);
  const handleCardClick = () => {
    setIsClicked(true);
    setCurrenPoster(episodeId);
  };
  return (
    <div onClick={handleCardClick} className="cursor-pointer ">
      <div className="w-full ">
        <div className="h-60">
          <img className="w-full h-full object-cover" src={imgUrl} />
        </div>
        <div className="max-w-full">
          <span className="block max-w-full whitespace-nowrap overflow-hidden text-ellipsis text-sm">
            {title}
          </span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default AnimePreviewCard;
