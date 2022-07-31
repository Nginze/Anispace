import AnimePreviewCard from "pages/homePage/components/AnimePreviewCard";

const Index = ({animeList}) => {
  return <div className="w-full h-full flex flex-wrap">
    {
        animeList?.map(anime => <AnimePreviewCard/>)
    }
  </div>;
};

export default Index;
