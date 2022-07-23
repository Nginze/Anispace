import AnimePreviewCard from 'pages/homePage/components/AnimePreviewCard';
import './App.css';
import useGetRecentEpisodes from './pages/homePage/hooks/useGetRecentEpisodes';

function App() {
  const {recentEpisodesList}  = useGetRecentEpisodes();
  return (
    <div className="App">
      {
        recentEpisodesList.map(episode => (<AnimePreviewCard key={episode.animeId} imgUrl={episode.animeImg} title = {episode.animeTitle} />))
      }
    </div>
  );
}

export default App;
