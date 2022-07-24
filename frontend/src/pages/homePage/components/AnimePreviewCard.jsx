import {useNavigate} from 'react-router-dom'

const AnimePreviewCard = ({
  imgUrl,
  rating,
  title,
  episodeId,
}) => {
  const navigate = useNavigate()
  const handleCardClick = () => {navigate(`/watch/${episodeId}`)};
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
