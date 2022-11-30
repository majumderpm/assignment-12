import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

    const menuitem = <React.Fragment>
              <li className="mx-4"><Link to="/" className="uppercase text-sm tracking-wide text-primary">Home</Link></li>
              <li className="mx-4"><Link to="/categories" className="uppercase text-sm tracking-wide text-primary">Categories </Link></li>
              <li className="mx-4"><Link to="/admin" className="uppercase text-sm tracking-wide text-primary">Admin</Link></li>
              {/* <li><Link to="/reviews">Reviews</Link></li> */}
              {/* <li><Link to="/contact">Contact Us</Link></li> */}
              <li className="mx-4"><Link to="/login" className="uppercase text-sm tracking-wide text-primary">Login</Link></li>

    </React.Fragment>


  return (
    <>
    
      <div className="navbar bg-base-100 flex justify-between container mx-auto px-8 border-y border-slate-200">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {menuitem}
            </ul>
          </div>
          <Link className="text-3xl uppercase font-semibold font-serif tracking-wide text-primary" to="/">tixly</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {menuitem}
          </ul>
        </div>
            <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" alt="" />
            </div>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
            <Link className="justify-between" to="/adminuser">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/logout">Logout</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
