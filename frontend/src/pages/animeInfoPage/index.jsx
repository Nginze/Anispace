import React from "react";

const Index = () => {
  return (
    <div className="w-full flex-col">
      <div className=" h-80 bg-[url(https://4anime.gg/images/detail-bg.jpg)] "></div>
      <div className="w-3/4 m-auto mt-[-100px] flex items-start justify-center">
        <div className="w-56 ">
          <div className="w-full h-80">
            <img
              className="w-full h-full object-cover"
              src="https://gogocdn.net/cover/bonobono-1995.png"
            />
          </div>
          <div className="text-left px-3">
            <span>
              <span>Type</span>
              <span>TV Series</span>
            </span>
            <span>
              <span>Studio</span>
              <span>Shaft</span>
            </span>
            <span>
              <span>Release Date</span>
              <span>Currently Airing</span>
            </span>
            <span>
              <span>Language</span>
              <span>Subbed</span>
            </span>
          </div>
        </div>
        <div className="w-3/4 ml-7 mt-[103px] text-left">
          <div>
            <button>Watch Now</button>
          </div>
          <div>
            <span>Naruto Shippuden</span>
          </div>
          <div>
            <span>Action</span>
            <span>Adventure</span>
            <span>shounen</span>
          </div>
          <div>
            In the world of Remnant, humans and Faunus—human-animal
            hybrids—carry on their everyday lives despite the omnipresent threat
            of the monstrous Grimm. Dedicated Huntsmen and Huntresses battle
            Grimm with both customized weapons
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
