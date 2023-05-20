import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const UpcomingToys = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="px-5 bg-gradient-to-r from-indigo-200 from-10% via-sky-500 via-30% to-emerald-200 to-90% mb-10 rounded-2xl">
        <h1 className="text-center text-2xl lg:text-3xl font-bold underline bg-gradient-to-r from-indigo-200 from-10% via-sky-500 via-30% to-emerald-200 to-90% py-4 rounded-2xl">Upcoming Transformer</h1>        
      <div>
      
      <div className="grid lg:grid-cols-3 gap-4 py-10">
      <div className="card glass" data-aos="fade-up" data-aos-anchor-placement="ease-in-cubic" data-aos-duration="600">
        <figure>
          <img className="bg-cover rounded-lg"
            src="https://i.ibb.co/jbgVQq6/Sideswipe.png"
            alt="car!"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Robo Car</h2>
          <p>Robo-cars are the future of transportation, bringing safer and more efficient roads. With advanced technology and artificial intelligence, they revolutionize commuting and redefine mobility.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Book now!</button>
          </div>
        </div>
      </div>

      <div className="card glass" data-aos="flip-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
        <figure>
          <img className="bg-cover rounded-lg"
            src="https://i.ibb.co/hscsFJN/megatron.jpg"
            alt="car!"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Robo Car</h2>
          <p>Robo-cars are the future of transportation, bringing safer and more efficient roads. With advanced technology and artificial intelligence, they revolutionize commuting and redefine mobility.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Book now!</button>
          </div>
        </div>
      </div>


      <div className="card glass" data-aos="zoom-in-right" data-aos-anchor-placement="ease-in-cubic" data-aos-duration="600">
        <figure>
          <img className="bg-cover rounded-lg"
            src="https://i.ibb.co/NW0CqsZ/decepticons-2.jpg"
            alt="car!"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Robo Car</h2>
          <p>Robo-cars are the future of transportation, bringing safer and more efficient roads. With advanced technology and artificial intelligence, they revolutionize commuting and redefine mobility.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Book now!</button>
          </div>
        </div>
      </div>
      </div>

      </div>
    </div>
  );
};

export default UpcomingToys;
