import {GoChevronLeft, GoChevronRight} from 'react-icons/go'
const NextPrevControls = () => {
  return <div className="w-full h-5 my-6 flex justify-between">
    <div>

    </div>
    <div className='flex items-center'>
        <button className="mr-9 font-light flex items-center"><GoChevronLeft/>Prev</button>
        <button className="mr-9 font-light flex items-center">Next<GoChevronRight/></button>
    </div>
  </div>;
};

export default NextPrevControls;
