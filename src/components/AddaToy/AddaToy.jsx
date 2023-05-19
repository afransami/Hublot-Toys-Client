import React, { useContext } from "react";
import { Form } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const AddaToy = () => {
  const { user } = useContext(AuthContext);

  const handleUpload = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const picture = form.picture.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const availableQuantity = form.availableQuantity.value;
    const description = form.description.value;
    const subCategory = form.subCategory.value;

    const singleToy = {
      name,
      sellerName,
      sellerEmail,
      picture,
      price,
      rating,
      availableQuantity,
      description,
      subCategory,
    };
    console.log(singleToy);

    fetch("http://localhost:5000/uploadToy", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(singleToy),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="card-body">
      <h1 className="text-5xl text-center font-bold"> Upload A Toy: </h1>

      <Form onSubmit={handleUpload}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Toy Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Toy Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller Name</span>
            </label>
            <input
              type="text"
              name="sellerName"
              defaultValue={user?.displayName}
              placeholder="Seller Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller Email</span>
            </label>
            <input
              type="text"
              name="sellerEmail"
              placeholder="Seller Email"
              defaultValue={user?.email}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <input
              type="url"
              name="picture"
              placeholder="Photo Url"
              className="input input-bordered"
            />
          </div>
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
              <span className="label-text">Rating</span>
            </label>
            <input
              type="text"
              name="rating"
              placeholder="Rating"
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
          <div className="form-control w-full max-w-xs">
            <select
              className="select select-bordered"
              type="text"
              name="subCategory"
              placeholder="Sub Category"
            >
              <option disabled selected>
                Pick one
              </option>
              <option>Action</option>
              <option>Scientists</option>
              <option>Warriors</option>
            </select>
          </div>
        </div>

        <div className="form-control mt-6">
          <input
            className="btn btn-block btn-primary"
            type="submit"
            value="Update confirm"
          />
        </div>
      </Form>
    </div>
  );
};

export default AddaToy;
