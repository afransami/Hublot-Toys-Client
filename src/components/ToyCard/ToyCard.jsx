import React from "react";
import { useParams } from "react-router-dom";

const ToyCard = ({ toy }) => {
  const { id } = useParams();
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
    <div className="mt-10 card w-96 bg-base-100 shadow-xl ">
      <figure>
        <img className="w-full h-64 object-cover" src={picture} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <span className="font-bold">Book Name:</span>
          {name}
        </h2>
        <p>
          <span className="font-bold">Author Name:</span> {authorName}
        </p>
        <p>
          <span className="font-bold">Category Name:</span> {categoryName}
        </p>
        <p>
          <span className="font-bold">Description:</span> {metaTextDescription}
        </p>
        <div className="card-actions justify-end">
          <Link className="btn btn-primary">Update Data</Link>
          <Link to={`/uploadBook/${id}`} className="btn btn-primary">
            Edit Data
          </Link>
          <Link
            to={`/bookDetails/${book._id}`}
            className="btn btn-info btn-outline"
          >
            See details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
