import { RiLoginBoxLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import Search from "./components/Search";
const Index = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between w-3/4 m-auto mb-5 mt-3">
      <div className="flex items-center justify-evenly">
        <div onClick = {() => navigate('/')} className="w-14 h-14 mr-5 flex items-center cursor-pointer">
          <img className="w-full h-full" src="/logo.png" />
        </div>
        <Link to = '/browse'><span className="mr-5">Browse</span></Link>
        <Link to = '/genre'><span className="mr-5">Genre</span></Link>
        <span>Random</span>
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
