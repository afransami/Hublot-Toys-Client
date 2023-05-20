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
    <div className="flex justify-center my-20">
      <div className="card card-side lg:w-2/4 mt-20 bg-base-100 shadow-2xl">
        <figure>
          <img className="lg:w-3/4" src={details.picture} alt="picture" />
        </figure>
        <div className="card-body">
          <div>
            <p>
              <strong>Toy Name: </strong>
              {details.name}
            </p>
            <p>
              <strong>Seller Name: </strong>
              {details.sellerName}
            </p>
            <p>
              <strong>Seller Email: </strong>
              {details.sellerEmail}
            </p>
            <p>
              <strong>Details: </strong> {details.description}
            </p>
            <p>
              <strong>Price: </strong> {details.price}
            </p>
          </div>

          <div className="flex justify-between">
            <p className="flex gap-4">
              <strong>Rating: </strong>
              <Rating
                style={{ maxWidth: 100 }}
                value={details.rating}
                readOnly
              />
              <span className="me-4"> {details.rating}</span>
            </p>            
          </div>
          <p>
              <strong>Available Quantity: </strong>
              {details.availableQuantity}
            </p>
          <div className="card-actions justify-end">
            <button className="btn btn-info btn-outline">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
