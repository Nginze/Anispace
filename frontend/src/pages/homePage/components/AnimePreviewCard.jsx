import { useNavigate } from "react-router-dom";

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
      navigate(`/anime/${title}`)
    }
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
          {episodeNum && <span>Episode {episodeNum}</span>}
        </div>
      </div>
    </div>
  );
};

export default AnimePreviewCard;
