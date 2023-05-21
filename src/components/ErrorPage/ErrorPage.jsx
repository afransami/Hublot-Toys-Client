import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center flex flex-col items-center">
      <img
        src="https://i.ibb.co/TBt35ct/lovepik-404-page-error-png-image-401803270-wh1200.png"
        alt=""
      />

      <Link to="/">
        <button className="btn btn-info">Go To Homepage</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
