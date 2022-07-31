import {RiLoginBoxLine} from 'react-icons/ri'
const Index = () => {
  return (
    <div className="flex items-center justify-between w-3/4 m-auto mb-5">
      <div className="flex items-center justify-evenly">
        <div className="w-14 h-14 mr-5 flex items-center">
            <img className="w-full h-full" src="/logo.png"/>
        </div>
        <span className="mr-5">Browse</span>
        <span className="mr-5">Random</span>
        <span>Genre</span>
      </div>
      <div></div>
      <div className='flex items-center'>
        <RiLoginBoxLine/>
        Login
      </div>
    </div>
  );
};

export default Index;
