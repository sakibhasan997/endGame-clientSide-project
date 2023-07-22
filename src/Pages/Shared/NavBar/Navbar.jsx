import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLink = (
    <>
      <li className="text-white">
        <NavLink title="Home" to="/">
          Home
        </NavLink>
      </li>
      <li className="text-white">
        <NavLink title="Colleges" to="/colleges">
          Colleges
        </NavLink>
      </li>
      <li className="text-white">
        <NavLink title="Admission" to="/admission">
          Admission
        </NavLink>
      </li>
      <li className="text-white">
        <NavLink title="My College" to="/myCollege">
          My College
        </NavLink>
      </li>

      {/* {user ?
            <>
                <li><NavLink title='Cart' to='dashboard/myclasses'>
                    <button className="flex gap-1 items-center">
                        <FaShoppingCart></FaShoppingCart>
                        <div className="badge badge-secondary">+{cart?.length || 0}</div>
                    </button>
                </NavLink></li>
                <li><NavLink title='Dashboard' to='/dashboard'>Dashboard</NavLink></li>

            </>
            :
            ' '
        } */}
    </>
  );

  return (
    <>
      <div className="navbar bg-gradient-to-r from-violet-500 to-fuchsia-500 px-20 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navLink}
            </ul>
          </div>
          <Link to="/">
            <img src="/src/assets/white-logo.png" className="w-full" alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <div className="navbar-end">
          <p className="mx-4 text-white">Sakib Hasan</p>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/279312602_734737191043200_3706230763934917786_n.jpg?_nc_cat=106&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeF0VlUf7SUo0L93l42p5c43LJlARVmc2HcsmUBFWZzYd-HNi0TY6X19i--yzckcDg1jPQ0zjVf5HNKCR9CkEZAq&_nc_ohc=qqSWsrrvXf4AX9c3vsZ&_nc_oc=AQm8WXMa5U1gs_DgzbIpJlVULyEUv5M6eN-p0F-_qaZmhBn7C3iyLM8UMjU2HZT92X0&_nc_ht=scontent.fjsr8-1.fna&oh=00_AfCTNEZ2u7bAddUSgYtpqQnuWMkAwgn5wGKGG8O4ieTNgg&oe=64C0604A" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <Link className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link>Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
