const PlayerHeaderFragment = ({ title, episodeNumber }) => {
  return (
    <div className="text-left w-full p-2 rounded-t-sm text-lg text-bold flex items-center bg-[#232323]">
      <span className="flex items-center">
        EP {episodeNumber} | Internal Player{" "}
      </span>
    </div>
  );
};

export default PlayerHeaderFragment;
