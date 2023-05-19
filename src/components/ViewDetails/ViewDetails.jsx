import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const ViewDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    fetch(`https://assignment-11-server-chi-steel.vercel.app/toy/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
      });
  }, []);

  return (
    <div>
      <div className="card card-side w-2/3 mt-20 bg-base-100 shadow-2xl">
        <figure>
          <img src={details.picture} alt="picture" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            <strong>Toy Name:</strong>
            {details.name}
          </h2>
          <p className="card-title">
            <strong>Seller Name:</strong>
            {details.sellerName}
          </p>
          <p className="card-title">
            <strong>Seller Email:</strong>
            {details.sellerEmail}
          </p>
          <p>
            <strong>Details:</strong> {details.description}
          </p>
          <div className="flex justify-between">
            <h2 className="card-title">
              <strong>Price:</strong>${details.price}
            </h2>
            <h2 className="card-title">
              <span>Rating:</span>
              <Rating
                style={{ maxWidth: 100 }}
                value={details.rating}
                readOnly
              />
              <span className="me-4"> {details.rating}</span>
            </h2>
            <h2 className="card-title">
              <span>Available Quantity</span>
              {details.availableQuantity}
            </h2>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
