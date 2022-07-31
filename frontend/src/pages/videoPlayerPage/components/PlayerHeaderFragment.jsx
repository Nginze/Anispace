import { TiFolderOpen } from "react-icons/ti";
const PlayerHeaderFragment = ({ title, episodeNumber }) => {
  return (
    <div className="text-left w-full p-2 my-2 text-lg text-bold flex items-center">
      <span className="flex items-center"><TiFolderOpen className="text-2xl mr-2"/> Episode {episodeNumber} | </span>
      <span className="ml-2"> {title}</span>
    </div>
  );
};

export default PlayerHeaderFragment;
