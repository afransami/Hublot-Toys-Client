import React from "react";
import { Form, Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2">
        <img src="https://i.ibb.co/4MbgKjJ/lf20-xlmz9xwm.png" alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ml-20 bg-gradient-to-r from-indigo-200 from-10% via-sky-200 via-30% to-emerald-200 to-90%">
          <h1 className="text-4xl p-5 font-bold">Register!</h1>
          <Form>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-gradient-to-r from-indigo-200 from-10% via-sky-500 via-30% to-emerald-200 to-90%"
                  type="submit"
                  value="Sign Up"
                />
                <p className="text-center mt-5 font-semibold">
                  Already have an account? Please{" "}
                  <Link className="text-green-600 font-bold" to="/login">
                    login
                  </Link>
                </p>
              </div>
              {/* <SocialLogin></SocialLogin> */}
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
