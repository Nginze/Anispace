const PlayerHeaderFragment = ({ title, episodeNumber }) => {
  return (
    <div className="text-left p-2 my-2 text-sm opacity-60">
      <span>Episode {episodeNumber} | </span>
      <span>{title}</span>
    </div>
  );
};

export default PlayerHeaderFragment;
