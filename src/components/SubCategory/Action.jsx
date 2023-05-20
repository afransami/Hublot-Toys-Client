import React, { useState } from "react";
import { Link } from "react-router-dom";

const Action = () => {
  const [actionToys, setActionToys] = useState([]);

  const handleToySearch = () => {
    fetch("http://localhost:5000/category?subCategory=action")
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
              onClick={handleToySearch}
              className="btn btn-outline btn-info"
            >
              Action
            </button>
          </Link>
          <Link>
            <button className="btn btn-outline btn-success">Scientists</button>
          </Link>
          <Link>
            <button className="btn btn-outline btn-warning">Warriors</button>
          </Link>
        </div>

        {actionToys?.map((actionToy) => (
          <div className="card card-side w-2/3 mt-20 bg-base-100 shadow-2xl">
            <figure>
              <img src={actionToy.picture} alt="picture" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                <strong>Toy Name:</strong>
                {actionToy.name}
              </h2>
              <p className="card-title">
                <strong>Seller Name:</strong>
                {actionToy.sellerName}
              </p>
              <p className="card-title">
                <strong>Seller Email:</strong>
                {actionToy.sellerEmail}
              </p>
              <p>
                <strong>Details:</strong> {actionToy.description}
              </p>
              <div className="flex justify-between">
                <h2 className="card-title">
                  <strong>Price:</strong>${actionToy.price}
                </h2>

                <h2 className="card-title">
                  <span>Available Quantity</span>
                  {actionToy.availableQuantity}
                </h2>
              </div>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Action;
