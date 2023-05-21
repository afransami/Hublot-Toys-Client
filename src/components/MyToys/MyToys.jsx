import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [allToys, setAllToys] = useState([]);

  const handleDelete = (id) => {
    fetch(`https://assignment-11-server-chi-steel.vercel.app/toy/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
        }
        const remaining = allToys.filter((toy) => toy._id !== id);
        setAllToys(remaining);
      });
  };

  useEffect(() => {
    fetch(
      `https://assignment-11-server-chi-steel.vercel.app/myToys/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  }, [user]);
  console.log(allToys);

  return (
    <div className="overflow-x-auto w-full mx-auto container">
      <h1 className="text-3xl">Your Toy List: {allToys.length} </h1>
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
                  to={`/updateToy/${toy._id}`}
                  className="btn btn-info btn-outline"
                >
                  Update
                </Link>
                <button
                  onClick={() => handleDelete(toy._id)}
                  className="btn btn-info btn-outline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;
