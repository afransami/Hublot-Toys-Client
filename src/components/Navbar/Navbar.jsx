import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  //     const {user, logOut}= useContext(AuthContext)

  //     const handleLogOut = ()=>{
  //       logOut()
  //       .then (()=>{

  //       })
  //       .catch (error => console.log(error));
  //     }

//   const navItems = (
//       <>
//         <li>
//           <Link to='/'>Home</Link>
//         </li>
//         <li>
//           <Link to='/about'>About</Link>
//         </li>
//         <li>
//           <Link to= '/sevices'>Services</Link>
//         </li>
//         <li>
//           <Link to='/blog'>Blog</Link>
//         </li>
//         <li>
//           <Link to= '/contact'>Contact</Link>
//         </li>
//         {user?.email ?
//         <>
//         <li><Link to= '/bookingCard'>My Booking</Link></li>
//         <li><button onClick={handleLogOut}>Log Out</button></li>
//         </> :
//         <button><li>
//         <Link to= '/login'>Login</Link>
//       </li></button>
//         }
//       </>
//     );

  return (
    <div className="rounded-xl navbar bg-gradient-to-r from-indigo-200 from-10% via-sky-200 via-30% to-emerald-200 to-90%">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to='/'>Home</Link></li>
        <li tabIndex={0}>
          <Link className="justify-between">
            All Toys
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </Link>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        {/* {user?.email ?
      <>
      <li><Link to= '/'>My Toys</Link></li>
      <li><Link to= '/'>Add A Toy</Link></li>
      <li><button>Log Out</button></li>
      </> :
      <button><li>
      <Link to= '/login'>Login</Link>
    </li></button>
      }     */}
      </ul>
    </div>
    <Link to='/'><div className="px-5 text-center flex justify-center items-center">
        <img className="w-12 h-12 rounded-lg" src="https://i.ibb.co/TbfssYY/Outstanding-Illustrations-by-UK-Artist-Petros-Afshar-Inspirationfeed.png" alt="" />
        <div><a className="btn btn-ghost normal-case text-3xl font-bold">Hublot Toys</a> <br /> <small>Entertaining kids since 1886</small></div></div></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><Link to='/'>Home</Link></li>
      <li tabIndex={0}>
        
        <Link>
        All Toys
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg></Link>
       
        <ul className="p-2 z-10 ">
          <li><a>Submenu 1</a></li>
          <li><a>Submenu 2</a></li>
        </ul>
      </li>      
      {/* {user?.email ?
      <>
      <li><Link to= '/'>My Toys</Link></li>
      <li><Link to= '/'>Add A Toy</Link></li>
      <li><button>Log Out</button></li>
      </> :
      <button><li>
      <Link to= '/login'>Login</Link>
    </li></button>
      } */}
    </ul>
  </div>  
</div>

    //     <div className="navbar bg-base-100">
    //   <div className="navbar-start">
    //     <div className="dropdown">
    //       <label tabIndex={0} className="btn btn-ghost lg:hidden">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="h-5 w-5"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M4 6h16M4 12h8m-8 6h16"
    //           />
    //         </svg>
    //       </label>
    //       <ul
    //         tabIndex={0}
    //         className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
    //       >
    //         {}
    //       </ul>
    //     </div>
    //     <Link to="/">
    //       <img className='w-24 h-24 rounded-lg' src="https://i.ibb.co/TbfssYY/Outstanding-Illustrations-by-UK-Artist-Petros-Afshar-Inspirationfeed.png" alt="" />
    //     </Link>
    //   </div>
    //   <div className="navbar-center hidden lg:flex">
    //     <ul className="menu menu-horizontal px-1">
    //      {}
    //     </ul>
    //   </div>
    //   <div className="navbar-end">
    //     <a className="btn btn-outline btn-warning font-bold">Get a appointment</a>
    //   </div>
    // </div>
  );
};

export default Navbar;
