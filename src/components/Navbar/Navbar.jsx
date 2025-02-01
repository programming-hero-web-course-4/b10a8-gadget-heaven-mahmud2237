import { Link, NavLink } from "react-router-dom";
import { PiShoppingCart } from "react-icons/pi";
import { MdOutlineShoppingBasket } from "react-icons/md";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">HOME</NavLink>
      </li>
      <li>
        <NavLink to="statistics">STATISTICS</NavLink>
      </li>
      <li>
        <NavLink to="dashboard">DASHBOARD</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost text-xl">
            Gadget Heaven Pro
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-3">
          <button className="btn btn-ghost rounded-3xl">
            <PiShoppingCart />
          </button>
          <button className="btn btn-ghost rounded-3xl">
            <MdOutlineShoppingBasket />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
