import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllToys = () => {
  const [allToys, setAllToys] = useState([]);
  const [search, setSearch] = useState("");
 
  useEffect(() => {
    fetch('https://assignment-11-server-chi-steel.vercel.app/allToys')
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  }, []);
  console.log(allToys);

  const handleToySearch = () => {
    fetch(`https://assignment-11-server-chi-steel.vercel.app/searchToy/${search}`)
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
        console.log(data);
      });
  };

  return (
    <div className="overflow-x-auto w-full mx-auto container">
      <div className="my-10 text-center flex justify-center">
        <div className="search-box p-2 text-center flex justify-center">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search Transformer"
            className="input input-bordered input-info w-full max-w-xs "
          />{" "}
          <button
            className="btn btn-outline  relative btn-info"
            onClick={handleToySearch}
          >
            Search
          </button>
        </div>
      </div>
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>SL</th>
            <th>Seller Name</th>
            <th>Toy Name</th>
            <th>Sub-Category</th>
            <th>Price</th>
            <th>Available Quantity</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {allToys.map((toy, i) => (
            <tr key={toy._id}>
              <th>{i + 1}</th>
              <th>{toy.sellerName}</th>
              <td>{toy.name}</td>
              <td>{toy.subCategory}</td>
              <td>{toy.price}</td>
              <td>{toy.availableQuantity}</td>
              <td className="gap-4 flex">
                <Link
                  to={`/viewDetails/${toy._id}`}
                  className="btn btn-info btn-outline"
                >
                  View Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;
