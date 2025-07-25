import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm px-[150px]">
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-lg"
            >
              <li><a>Fix and Flip</a></li>
              <li><a>Rental Loans</a></li>
              <li><a>Where We Lend</a></li>
              <li><a>About Us</a></li>
              <li><a>Resources</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-[30px] font-black"><span className="text-[#165831]">RIDGE</span><span className="text-[#949293]">STREET</span></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg">
             <li><a>Fix and Flip</a></li>
              <li><a>Rental Loans</a></li>
              <li><a>Where We Lend</a></li>
              <li><a>About Us</a></li>
              <li><a>Resources</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-[#165831] font-bold text-white shadow-md">GET APPROVED ONLINE</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
