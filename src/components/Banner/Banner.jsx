import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full rounded-xl relative">
        <div className="my-10 text-center flex justify-center">
          <div
            className="search-box p-2 text-center flex justify-center"
            style={{
              position: "absolute",
              left: "50%",
              top: "90%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <input
              type="text"
              placeholder="Search Transformer"
              className="input input-bordered input-info w-full max-w-xs "
            />{" "}
            <button className="btn btn-outline btn-info relative">
              Search
            </button>
          </div>
        </div>

        <div id="item1" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/rmg74hj/transformers-thumbnail-1654818516621.jpg"
            className="w-full"
            style={{ width: "100%", height: "600px", objectFit: "cover" }}
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/Px0Y653/mo-jiaming-e-Wll-D4-Htb0w-unsplash.jpg"
            className="w-full"
            style={{ width: "100%", height: "600px", objectFit: "cover" }}
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/TWmDvxS/autobots-2.webp"
            className="w-full"
            style={{ width: "100%", height: "600px", objectFit: "cover" }}
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/vxbJG9d/Autobots-tfp.webp"
            className="w-full"
            style={{ width: "100%", height: "600px", objectFit: "cover" }}
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
