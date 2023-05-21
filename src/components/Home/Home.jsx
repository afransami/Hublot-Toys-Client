import React from "react";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import SubCategory from "../SubCategory/SubCategory";
import UpcomingToys from "../UpcomingToys/UpcomingToys";
import TrendingToys from "../TrendingToys/TrendingToys";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <Gallery></Gallery>
      <SubCategory></SubCategory>
      <UpcomingToys></UpcomingToys>
      <TrendingToys></TrendingToys>
    </div>
  );
};

export default Home;
