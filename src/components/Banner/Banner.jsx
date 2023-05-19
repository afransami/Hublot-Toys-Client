import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full h-[600px] rounded-xl relative">
        <div
          className=""
          style={{
            position: "absolute",
            left: "50%",
            top: "90%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <input
            type="text"
            placeholder="Search your Transformer"
            className="input input-bordered input-info w-full max-w-xs"
          />
          <button className="btn btn-outline absolute btn-info">Search</button>
        </div>
        <div id="item1" className="carousel-item w-full ">
          <img
            src="https://i.ibb.co/2SrZ6Tz/bumblebee.jpg"
            className="w-full"
          />
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
  );
};

export default Banner;
