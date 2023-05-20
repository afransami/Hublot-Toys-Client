import React from "react";
import "react-tabs/style/react-tabs.css";
import Action from "./Action";
import Scientists from "./Scientists";
import Warriors from "./Warriors";

const SubCategory = () => {
  return (
    <div>
      <div>
        <h1 className="text-4xl text-center font-bold">Shop by Category</h1>
      </div>
      <Action></Action>
      <Scientists></Scientists>
      <Warriors></Warriors>
    </div>
  );
};

export default SubCategory;
