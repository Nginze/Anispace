import HomePage from "pages/homePage";
import VideoPlayerPage from "pages/videoPlayerPage"
import AnimeInfoPage from "pages/animeInfoPage"
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/watch/:epId" element={< VideoPlayerPage/>} />
        <Route path="/anime/" element={<AnimeInfoPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
