import { Rating } from "@smastrom/react-rating";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Action = () => {
  const [actionToys, setActionToys] = useState([]);

  const handleSubCategory = (subCategory) => {
    fetch(
      `https://assignment-11-server-chi-steel.vercel.app/category?subCategory=${subCategory}`
    )
      .then((res) => res.json())
      .then((data) => {
        setActionToys(data);
        console.log(data);
      });
  };

  return (
    <div>
      <div className="flex flex-row justify-center gap-8 my-10">
        <Link>
          <button
            onClick={() => handleSubCategory("action")}
            className="btn btn-outline btn-info"
          >
            Action
          </button>
        </Link>
        <Link>
          <button
            onClick={() => handleSubCategory("scientists")}
            className="btn btn-outline btn-success"
          >
            Scientists
          </button>
        </Link>
        <Link>
          <button
            className="btn btn-outline btn-warning"
            onClick={() => handleSubCategory("warriors")}
          >
            Warriors
          </button>
        </Link>
      </div>

      {actionToys?.map((actionToy) => (
        <div className="my-20 flex justify-center">
          <div className="card card-side lg:w-2/4 bg-base-100 shadow-xl ">
            <figure>
              <img
                className="lg:w-3/4 object-cover"
                src={actionToy.picture}
                alt="toy"
              />
            </figure>
            <div className="card-body">
              <div>
                <p>
                  <strong>Toy Name: </strong>
                  {actionToy.name}
                </p>
                <p>
                  <strong>Toy Price: </strong>
                  {actionToy.price}
                </p>
              </div>

              <div className="flex justify-between">
                <p className="flex gap-4">
                  <strong>Rating: </strong>
                  <Rating
                    style={{ maxWidth: 100 }}
                    value={actionToy.rating}
                    readOnly
                  />
                  <span className="me-4"> {actionToy.rating}</span>
                </p>
              </div>
              <div className="card-actions justify-end">
                <Link
                  to={`/viewDetails/${actionToy._id}`}
                  className="btn btn-info btn-outline"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Action;
