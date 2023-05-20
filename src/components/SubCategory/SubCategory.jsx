import React from "react";
import "react-tabs/style/react-tabs.css";
import Action from "./Action";

const SubCategory = () => {
  return (
    <div>
      <div>
        <h1 className="text-4xl text-center font-bold bg-gradient-to-r from-indigo-200 from-10% via-sky-500 via-30% to-emerald-200 to-90% py-4 rounded-2xl">Shop by Category</h1>
      </div>
      <Action></Action>
    </div>
  );
};

export default SubCategory;
