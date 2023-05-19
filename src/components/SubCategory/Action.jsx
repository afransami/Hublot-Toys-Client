import React, { useEffect, useState } from "react";
import SubCategory from "./SubCategory";

const Action = () => {
  const [actionToys, setActionToys] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/category?subCategory=${subCategory}`)
      .then((res) => res.json())
      .then((data) => setActionToys(data));
  }, []);
  console.log(actionToys);

  return (
    <div>
      {
        (actionToys.map = (actionToy) => (
          <div key={actionToy._id} className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={actionToy.name} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))
      }

      <h1>This is action page</h1>
    </div>
  );
};

export default Action;
