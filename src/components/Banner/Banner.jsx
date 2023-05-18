import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full h-[700px] rounded-xl">
        <div id="item1" className="carousel-item w-full ">
          <img
            src="https://i.ibb.co/2SrZ6Tz/bumblebee.jpg"
            className="w-full"
          />
          <div className="absolute h-[700px] flex items-center bg-gradient-to-r from-blue-700 to-transparent rounded-xl">
            <div className="text-white space-y-5 w-2/3 pl-10 hidden lg:block">
              <h2 className="text-5xl text-teal-200 font-bold">
                A toy is a friend that never leaves your side, <br /> always
                ready for an adventure
              </h2>
              <p className="text-xl">
                A toy is a bridge between reality and imagination, inviting us
                to explore new realms
              </p>
              <div>
                <button className="btn btn-outline btn-info">
                  Explore More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/TWmDvxS/autobots-2.webp"
            className="w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/rmg74hj/transformers-thumbnail-1654818516621.jpg"
            className="w-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/vxbJG9d/Autobots-tfp.webp"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>

    //   <div className="relative w-full">
    //     <img
    //       src="https://i.ibb.co/2SrZ6Tz/bumblebee.jpg"
    //       className="w-full h-600 object-cover rounded-xl"
    //     />
    //     <div className="absolute left-0 top-0 bottom-5 h-full flex items-center rounded-xl bg-gradient-to-r from-blue-600 to-transparent">
    //       <div className="text-white space-y-7 w-1/3 pl-12">
    //         <h2 className="text-6xl font-bold">
    //           A toy is a friend that never leaves your side, always ready for an
    //           adventure.
    //         </h2>
    //         <p>
    //           A toy is a bridge between reality and imagination, inviting us to
    //           explore new realms
    //         </p>
    //         <div className="">
    //           <button className="btn btn-outline btn-info">Explore More</button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
  );
};

export default Banner;
