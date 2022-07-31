import { useNavigate } from "react-router-dom";
import {animeIdParser} from "../utils"
const AnimePreviewCard = ({
  imgUrl,
  title,
  otherNames,
  episodeId,
  episodeNum,
}) => {
  const navigate = useNavigate();
  const handleCardClick = () => {
    if (episodeId) {
      navigate(`/watch/${episodeId}`);
    }
    else{
      navigate(`/anime/${animeIdParser(title)}`)
    }
  };
  return (
    <div onClick={handleCardClick} className="cursor-pointer ">
      <div className="w-full ">
        <div className="w-40 h-56 mb-2 bg-[#666]">
          <img className="w-full h-full object-cover" src={imgUrl} />
        </div>
        <div className="max-w-full text-[13px] text-center font-medium">
          <span className="block max-w-full whitespace-nowrap overflow-hidden text-ellipsis text-sm leading-5">
            {title}
          </span>
          {episodeNum && <span className="leading-6 font-normal text-[#888]">Episode {episodeNum}</span>}
        </div>
      </div>
    </div>
  );
};

export default AnimePreviewCard;
