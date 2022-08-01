import { RiLoginBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Search from "./components/Search";
const Index = () => {
  return (
    <div className="flex items-center justify-between w-3/4 m-auto mb-5 mt-3">
      <div className="flex items-center justify-evenly">
        <div className="w-14 h-14 mr-5 flex items-center">
          <img className="w-full h-full" src="/logo.png" />
        </div>
        <Link><span className="mr-5">Browse</span></Link>
        <Link><span className="mr-5">Random</span></Link>
        <span>Genre</span>
      </div>
      <div className="flex items-center">
        <div>
          <Search />
        </div>
        <div className="flex items-center">
          <RiLoginBoxLine />
          Login
        </div>
      </div>
    </div>
  );
};

export default Index;
