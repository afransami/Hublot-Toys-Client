import React from "react";

const Gallery = () => {
  return (
    <div className="my-10">
      <div><p className="text-5xl font-bold text-center underline my-10">Gallery</p>
      <p className="text-center text-xl my-10">Transformer toys are action figures inspired by the Transformers franchise. They can transform between different forms like robots, vehicles, or animals. They come in various sizes and complexities, with popular characters and intricate transformation mechanisms. Transformer toys are loved by collectors and offer a mix of playability and display value.</p></div>
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-4">
        <div className="mockup-phone">
          <div className="camera"></div>
          <div className="display">
            <div className="artboard artboard-demo phone-1">
              <img
                src="https://i.ibb.co/hscsFJN/megatron.jpg"
                alt="Burger"
              />
            </div>
          </div>
        </div>

        <div className="mockup-phone">
          <div className="camera"></div>
          <div className="display">
            <div className="artboard artboard-demo phone-1">
              <img src="https://i.ibb.co/jks502X/prime-Megatron.webp" alt="Burger" />
            </div>
          </div>
        </div>

        <div className="mockup-phone">
          <div className="camera"></div>
          <div className="display">
            <div className="artboard artboard-demo phone-1">
              <img
                src="https://i.ibb.co/0qVS4qd/Transformers-Toys-Studio-Series-54-Voyager-Class-Movie-1-Megatron-Action-Figure-Ages-8-Up-6-5.jpg"
                alt="Burger"
              />
            </div>
          </div>
        </div>

        <div className="mockup-phone">
          <div className="camera"></div>
          <div className="display">
            <div className="artboard artboard-demo phone-1">
              <img
                src="https://i.ibb.co/5BXg6kv/image-2.jpg"
                alt="Burger"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="carousel rounded-box h-[400px] mt-10 border-4 shadow-2xl gap-4">
        <div className="carousel-item">
          <img
            src="https://i.ibb.co/f21CXfX/wu-yi-TXBd-XAL-MKI-unsplash.jpg"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img src="https://i.ibb.co/VC9nR2Y/image-1.png" alt="Burger" />
        </div>
        <div className="carousel-item">
          <img
            src="https://i.ibb.co/Jz92GYf/Transformers-Wheeljack.jpg"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://i.ibb.co/0qVS4qd/Transformers-Toys-Studio-Series-54-Voyager-Class-Movie-1-Megatron-Action-Figure-Ages-8-Up-6-5.jpg"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://i.ibb.co/gw09zHQ/taha-Fdnsiw-BIc-Yc-unsplash.jpg"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img src="https://i.ibb.co/jbgVQq6/Sideswipe.png" alt="Burger" />
        </div>
        <div className="carousel-item">
          <img
            src="https://i.ibb.co/jks502X/prime-Megatron.webp"
            alt="Burger"
          />
        </div>
      </div> */}
    </div>
  );
};

export default Gallery;
