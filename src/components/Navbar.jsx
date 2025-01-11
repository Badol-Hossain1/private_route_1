import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../context/AuthProvider';

const Navbar = () => {
  const { user, signOutFrom } = useContext(AuthContext);
  console.log('🚀 ~ Navbar ~ user:', user);
  const navBar = (
    <>
      <li className="flex gap-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
        {user && <NavLink to="/privateRoute">Private Route</NavLink>}
      </li>
    </>
  );
  const handleSignOut = () => {
    signOutFrom()
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navBar}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center m-4 hidden lg:flex">
          <ul className="">{navBar}</ul>
        </div>
        <div className="navbar-end">
          {user?.email ? <span>{user.email}</span> : <p></p>}
          <a onClick={handleSignOut} className="btn btn-sm">
            Sign Out
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
