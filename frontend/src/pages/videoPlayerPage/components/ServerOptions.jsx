import { MdClosedCaption } from "react-icons/md";
import {FaMicrophoneAlt} from "react-icons/fa"
const ServerOptions = () => {
  return (
    <div className="my-3 w-full h-28 flex text-left">
      <div className="w-1/3 px-5 py-5 bg-[#2c2c2d] text-[#6d6d6d] text-sm flex items-center justify-center">
        If the current server doesn't work please try other streaming options
      </div>
      <div className="w-full max-h-full px-8 py-6  bg-[#232323] flex flex-col items-start justify-center">
        <div className="flex items-center mb-6">
          <span className="mr-10 flex items-center text-[16px]">
            <MdClosedCaption className="mr-2" />
            <span>Sub :</span>
          </span>
          <div className="text-[#ccc]">
            <button className="font-semibold text-sm px-3 py-2 mr-2 bg-[#343434] rounded-[3px]">
              Vidcloud
            </button>
            <button className="font-semibold text-sm px-3 py-2 mr-2 bg-[#343434] rounded-[3px]">
              StreamSB
            </button>
          </div>
        </div>
        <div className="flex items-center">
          <span className="mr-10 flex items-center text-[16px]">
            <FaMicrophoneAlt className="mr-2" />
            <span>Dub :</span>
          </span>
          <div className="text-[#ccc]">
            <button className="font-semibold px-3 text-sm py-2 mr-2 bg-[#343434] rounded-[3px]">
              Vidcloud
            </button>
            <button className="font-semibold px-3 text-sm py-2 mr-2 bg-[#343434] rounded-[3px]">
              StreamSB
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServerOptions;
