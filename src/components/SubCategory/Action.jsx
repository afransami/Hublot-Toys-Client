import { Rating } from "@smastrom/react-rating";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Action = () => {
  const [actionToys, setActionToys] = useState([]);

  const handleToySearch = (subCategory) => {
    fetch(`http://localhost:5000/category?subCategory=${subCategory}`)
      .then((res) => res.json())
      .then((data) => {
        setActionToys(data);
        console.log(data);
      });
  };


  return (
    <div>
      <div>
        <div className="flex flex-row justify-center gap-8 my-10">
          <Link>
            <button
              onClick={() => handleToySearch('action')}
              className="btn btn-outline btn-info"
            >
              Action
            </button>
          </Link>
          <Link>
            <button onClick={() => handleToySearch('scientists')} className="btn btn-outline btn-success">Scientists</button>
          </Link>
          <Link>
            <button className="btn btn-outline btn-warning" onClick={() => handleToySearch('warriors')}>Warriors</button>
          </Link>
        </div>

        {actionToys?.map((actionToy) => (
          <div className="my-20 flex justify-center" >
            <div className="card w-2/4 bg-base-100 shadow-2xl flex justify-center flex-row">
            <figure>
              <img className="w-1/2" src={actionToy.picture} alt="toy" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Toy Name: {actionToy.name}</h2>
              <h2 className="card-title">Toy Price: {actionToy.price}</h2>
              <p className="card-title">
                Toy rating:
                <Rating
                  style={{ maxWidth: 100 }}
                  value={actionToy.rating}
                  readOnly
                />
                <span className="me-4"> {actionToy.rating}</span>
              </p>              
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View Details</button>
              </div>
            </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Action;
