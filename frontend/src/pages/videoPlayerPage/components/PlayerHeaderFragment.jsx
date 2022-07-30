const PlayerHeaderFragment = ({ title }) => {
  return (
    <div className="text-left p-2 my-2 text-sm opacity-60">
      <span>Episode 1 | </span>
      <span>{title}</span>
    </div>
  );
};

export default PlayerHeaderFragment;
