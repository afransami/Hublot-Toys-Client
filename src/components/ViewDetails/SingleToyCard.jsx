import React from "react";
import { useParams } from "react-router-dom";

const SingleToyCard = ({toy}) => {
    // const { id } = useParams();
    // picture, toy name, seller name, seller email, price, rating, available quantity, and detail description
    const {
        picture,
        name,
        price,
        rating,
        subCategory,
        availableQuantity,
        description,
        sellerName,
        sellerEmail
      } = toy;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={picture}
          alt="picture"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <h2 className="card-title">{sellerName}</h2>
        <h2 className="card-title">{sellerEmail}</h2>
        <h2 className="card-title">{price}</h2>
        <h2 className="card-title">{rating}</h2>
        <h2 className="card-title">{availableQuantity}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default SingleToyCard;
