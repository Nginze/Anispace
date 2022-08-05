import { RiLoginBoxLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import Search from "./components/Search";
const Index = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between w-4/5 m-auto mb-5 mt-3">
      <div className="flex items-center justify-evenly">
        <div
          onClick={() => navigate("/")}
          className="w-12 h-12 mr-5 flex items-center cursor-pointer"
        >
          <img className="w-full h-full" src="/logo.png" alt="logo" />
        </div>
        <div className="dropdown flex flex-col relative" to="/browse">
          <span className="mr-5 cursor-pointer">Browse</span>
          <div className="dropdown-content flex flex-col text-left absolute z-50 rounded-md bg-[#331e93] top-6  w-28 px-5 py-2">
            <Link
              className="mb-3 font-semibold cursor-pointer"
              to="/browse/popular"
            >
              <span>Popular</span>
            </Link>
            <Link
              className="mb-3 font-semibold cursor-pointer"
              to="/browse/recent-release"
            >
              <span>Recent</span>
            </Link>
            <Link
              className="mb-3 font-semibold cursor-pointer"
              to="/browse/top-airing"
            >
              <span>Trending</span>
            </Link>
            <Link
              className="mb-3 font-semibold cursor-pointer"
              to="/browse/movies"
            >
              <span>Movies</span>
            </Link>
          </div>
        </div>
        <Link to="/genre">
          <span className="mr-5">Genre</span>
        </Link>
        <Link to="/random">
          <span>Random</span>
        </Link>
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
