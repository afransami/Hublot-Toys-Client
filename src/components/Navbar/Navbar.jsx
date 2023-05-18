import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <div className="rounded-xl navbar bg-gradient-to-r from-indigo-200 from-10% via-sky-200 via-30% to-emerald-200 to-90%">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">All Toys</Link>
            </li>
            {user?.email ? (
              <>
                <li>
                  <Link to="/">My Toys</Link>
                </li>
                <li>
                  <Link to="/">Add A Toy</Link>
                </li>
                {/* <div className="avatar">
                  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={user?.email} />
                  </div>
                </div> */}

                <div>
                  <small>
                    <span>Welcome</span>{" "}
                    {user ? (
                      <div>
                        <div
                          className="tooltip tooltip-open tooltip-primary"
                          data-tip={user?.email}
                        >
                          <button className="btn btn-primary">primary</button>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </small>
                </div>

                <li>
                  <button onClick={handleLogOut}>Log Out</button>
                </li>
              </>
            ) : (
              <button>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </button>
            )}
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
          </ul>
        </div>
        <Link to="/">
          <div className="px-5 text-center flex justify-center items-center">
            <img
              className="w-12 h-12 rounded-lg"
              src="https://i.ibb.co/TbfssYY/Outstanding-Illustrations-by-UK-Artist-Petros-Afshar-Inspirationfeed.png"
              alt=""
            />
            <div>
              <a className="btn btn-ghost normal-case text-3xl font-bold">
                Hublot Toys
              </a>{" "}
              <br /> <small>Entertaining kids since 1886</small>
            </div>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">All Toys</Link>
          </li>
          {user?.email ? (
            <>
              <li>
                <Link to="/">My Toys</Link>
              </li>
              <li>
                <Link to="/">Add A Toy</Link>
              </li>
              <li>
                <button onClick={handleLogOut}>Log Out</button>
              </li>
            </>
          ) : (
            <button>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </button>
          )}
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
