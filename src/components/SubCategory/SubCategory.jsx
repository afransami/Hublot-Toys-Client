import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "react-tabs/style/react-tabs.css";
import Action from "./Action";
import Scientists from "./Scientists";
import Warriors from "./Warriors";

const SubCategory = () => {
  const [activeTab, setActiveTab] = useState(1);
  // const [actionToys, setActionToys] = useState([]);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);    
    fetch(`http://localhost:5000/category?subCategory=action`)
      .then((res) => res.json())
      .then((data) => {
        setActiveTab(data);
        console.log(data);
      });
  };

  // useEffect(() => {
  //   fetch(`http://localhost:5000/category?subCategory=${actionToys}`)
  //     .then((res) => res.json())
  //     .then((data) => setActionToys(data));
  // }, [actionToys]);

  return (
    <div className="flex justify-center flex-col items-center">
      <div className="tabs">
        <button
          className={`tab ${activeTab === 1 ? "active" : ""}`}
          onClick={() => handleTabClick(1)}
        >
          Tab 1
        </button>
        <button
          className={`tab ${activeTab === 2 ? "active" : ""}`}
          onClick={() => handleTabClick(2)}
        >
          Tab 2
        </button>
        <button
          className={`tab ${activeTab === 3 ? "active" : ""}`}
          onClick={() => handleTabClick(3)}
        >
          Tab 3
        </button>
      </div>

      <div>
        {/* Render the content based on the active tab */}
        {activeTab === 1 && (
          <div>
            <div className="card card-side w-2/3 mt-20 bg-base-100 shadow-2xl">
        <figure>
          <img src={activeTab.picture} alt="picture" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            <strong>Toy Name:</strong>
            {activeTab.name}
          </h2>
          <p className="card-title">
            <strong>Seller Name:</strong>
            {activeTab.sellerName}
          </p>
          <p className="card-title">
            <strong>Seller Email:</strong>
            {activeTab.sellerEmail}
          </p>
          <p>
            <strong>Details:</strong> {activeTab.description}
          </p>
          <div className="flex justify-between">
            <h2 className="card-title">
              <strong>Price:</strong>${activeTab.price}
            </h2>
           
            <h2 className="card-title">
              <span>Available Quantity</span>
              {activeTab.availableQuantity}
            </h2>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
            <h2>Sub-categories for Tab 1</h2>
            {/* Add your sub-category components here */}
          </div>
        )}
        {activeTab === 2 && (
          <div>
            <h2>Sub-categories for Tab 2</h2>
            {/* Add your sub-category components here */}
          </div>
        )}
        {activeTab === 3 && (
          <div>
            <h2>Sub-categories for Tab 3</h2>
            {/* Add your sub-category components here */}
          </div>
        )}
      </div>
    </div>

    // <div>
    //   <div>
    //     <h1 className="text-4xl text-center font-bold">Shop by Category</h1>
    //   </div>
    //   <div className="flex flex-row justify-center gap-8 my-10">
    //     <Link>
    //       <button className="btn btn-outline btn-info">Action</button>
    //     </Link>
    //     <Link>
    //       <button className="btn btn-outline btn-success">Scientists</button>
    //     </Link>
    //     <Link>
    //       <button className="btn btn-outline btn-warning">Warriors</button>
    //     </Link>
    //   </div>
    //   <Action></Action>
    //   <Scientists></Scientists>
    //   <Warriors></Warriors>
    // </div>
  );
};

export default SubCategory;
