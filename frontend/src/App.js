import HomePage from "pages/homePage";
import VideoPlayerPage from "pages/videoPlayerPage"
import AnimeInfoPage from "pages/animeInfoPage"
import Navbar from "containers/Navbar"
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/watch/:epId" element={< VideoPlayerPage/>} />
        <Route path="/anime/:anId" element={<AnimeInfoPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
