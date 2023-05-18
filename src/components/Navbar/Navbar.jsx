import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const [showUsername, setShowUsername] = useState(false);

  const handleMouseEnter = () => {
    setShowUsername(true);
  };

  const handleMouseLeave = () => {
    setShowUsername(false);
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
              <Link to="/allToys">All Toys</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>

            <ul className="flex space-x-4">
              {user ? (
                <li>
                  <div
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <img
                      src={user.profilePicture}
                      alt="Profile Picture"
                      className="w-8 h-8 rounded-full"
                    />
                    {showUsername && (
                      <span className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white py-1 px-2 rounded shadow">
                        {user?user.displayName:user.email}
                      </span>
                    )}
                  </div>
                </li>
              ) : (
                <li>
                  <a href="/login">Login</a>
                </li>
              )}
              {user ? (
                <>
                  <li>
                    <a href="/myToys">My Toys</a>
                  </li>
                  <li>
                    <a href="/addAToy">Add A Toy</a>
                  </li>
                  <li>
                    <button onClick={handleLogOut}>Log Out</button>
                  </li>
                </>
              ) : (
                ""
              )}
            </ul>
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
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>

          <ul className="flex space-x-4">
            {user ? (
              <li>
                <div
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <img
                    src={user.profilePicture}
                    alt="Profile Picture"
                    className="w-8 h-8 rounded-full"
                  />
                  {showUsername && (
                    <span className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white py-1 px-2 rounded shadow">
                      {user?user.displayName:user.email}
                    </span>
                  )}
                </div>
              </li>
            ) : (
              <li>
                <a href="/login">Login</a>
              </li>
            )}
            {user ? (
              <>
                <li>
                  <a href="/myToys">My Toys</a>
                </li>
                <li>
                  <a href="/addAToy">Add A Toy</a>
                </li>
                <li>
                  <button onClick={handleLogOut}>Log Out</button>
                </li>
              </>
            ) : (
              ""
            )}
          </ul>

          {/* {user?.email ? (
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
          )} */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
