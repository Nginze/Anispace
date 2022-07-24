import HomePage from "pages/homePage";
import VideoPlayerPage from "pages/videoPlayerPage"
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/watch/:epId" element={< VideoPlayerPage/>} />
      </Routes>
    </div>
  );
}

export default App;
