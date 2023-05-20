import React from "react";
import { Form, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToy = () => {
  const { id } = useParams();

  const handleUpdateToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const availableQuantity = form.availableQuantity.value;
    const description = form.description.value;

    const updateToy = {
      price,
      availableQuantity,
      description,
    };
    console.log(updateToy);

    fetch(`https://assignment-11-server-chi-steel.vercel.app/toy/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        // Display success toast using SweetAlert
        Swal.fire({
          icon: "success",
          title: "Update Successful",
          text: "The toy has been successfully updated.",
        });
      });
  };
  return (
    <div className="card-body">
      <h1 className="text-5xl text-center font-bold"> Update A Toy: </h1>

      <Form onSubmit={handleUpdateToy}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              name="price"
              placeholder="Price"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Available quantity</span>
            </label>
            <input
              type="text"
              name="availableQuantity"
              placeholder="Available quantity"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              type="text"
              name="description"
              placeholder="Description"
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-block btn-outline btn-info"
            type="submit"
            value="Update confirm"
          />
        </div>
      </Form>
    </div>
  );
};

export default UpdateToy;
