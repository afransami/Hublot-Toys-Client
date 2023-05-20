import React, { useContext, useState } from "react";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result);
        setError("");
        form.reset("");
        Swal.fire({
          icon: 'success',
          title: 'Login Successful',
          text: 'You have successfully signed in with Google.',
        });
      })
      .catch((error) => {
        console.error(error.message);
        setError(error.message);
      });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        form.reset("");
        if (user) {
          Swal.fire({
            title: "success!",
            text: "You have done well",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error.message);
        setError(error.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content grid lg:grid-cols-2">
        <div className="relative">
          <div className="w-full ">
            <img src="https://i.ibb.co/4MbgKjJ/lf20-xlmz9xwm.png" alt="" />
          </div>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gradient-to-r from-indigo-200 from-10% via-sky-200 via-30% to-emerald-200 to-90%">
          <h1 className="text-4xl p-5 font-bold">Login!</h1>
          <Form onSubmit={handleLogin}>
            <div className="card-body">
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
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <p className="font-bold text-red-500 text-xl">{error}</p>
              <div className="form-control mt-6">
                <input
                  className="btn bg-gradient-to-r from-indigo-200 from-10% via-sky-500 via-30% to-emerald-200 to-90%"
                  type="submit"
                  value="Login"
                />

                <p className="text-center mt-5 font-semibold">
                  New to Hublot Toys? Please{" "}
                  <Link className="text-green-600 font-bold" to="/register">
                    register
                  </Link>
                </p>
              </div>
              <div className="divider"></div>
              <div className="text-center">                
                <button
                
                  onClick={handleGoogleSignIn}
                  className="text-2xl btn btn-circle btn-outline text-indigo-600"
                >
                  <FaGoogle className="text-red-600"></FaGoogle>
                </button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
