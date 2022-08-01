import AnimePreviewCard from "pages/homePage/components/AnimePreviewCard";
import { Ring } from "@uiball/loaders";

const Index = ({ animeList, loading }) => {
  return (
    <>
      {loading && <div className="w-full h-[60vh] flex items-center justify-center">
        <Ring size={40} lineWeight={5} speed={2} color="white" />
      </div>}
      <div className="w-full h-full flex flex-wrap my-6">
        {animeList?.map(anime => (
          <div className="w-[160px] mr-3 mb-5">
            <AnimePreviewCard
              imgUrl={anime.animeImg}
              title={anime.animeTitle}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Index;
