import { Hls, Player, Video } from "@vime/react";
import VideoPlayerControls from "./VideoPlayerControls";

const AnimePlayer = ({ episodeSrc, episodePoster }) => {
  console.log(episodeSrc)
  return (
    <Player>
      {episodeSrc && episodeSrc.includes("m3u8") ? (
        <Hls version="latest" poster={episodePoster} key={episodeSrc}>
          <source src={episodeSrc} type="application/x-mpegURL" />
        </Hls>
      ) : (
        <Video poster={episodePoster} key={episodeSrc}>
          <source src={episodeSrc} type="video/mp4" />
        </Video>
      )}
      <VideoPlayerControls />
    </Player>
  );
};

export default AnimePlayer;
