import React from "react";

const Gallery = () => {
  return (
    <div className="py-10">
      <div className="px-5"><p className="text-5xl font-bold text-center underline py-10">Gallery</p>
      <p className="text-center text-xl py-10">Transformer toys are action figures inspired by the Transformers franchise. They can transform between different forms like robots, vehicles, or animals. They come in various sizes and complexities, with popular characters and intricate transformation mechanisms. Transformer toys are loved by collectors and offer a mix of playability and display value.</p></div>
      <div className="lg:flex justify-between gap-4">
        <div className="mockup-phone">
                <p className="font-bold text-orange-600 text-center text-xl">Albatron</p>
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
            <p className="font-bold text-orange-600 text-center text-xl">Decepticons</p>
          <div className="camera"></div>
          <div className="display">
            <div className="artboard artboard-demo phone-1">
              <img src="https://i.ibb.co/jks502X/prime-Megatron.webp" alt="Burger" />
            </div>
          </div>
        </div>

        <div className="mockup-phone">
            <p className="font-bold text-orange-600 text-center text-xl">Shockwave</p>
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
        <p className="font-bold text-orange-600 text-center text-xl">Bumblebee</p>
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
    </div>
  );
};

export default Gallery;
