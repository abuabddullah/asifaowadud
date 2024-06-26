import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import NavMenues from "./NavMenues";

const Navbar = () => {
  return (
    <section
      // data-aos="fade-down"
      // data-aos-duration="1000"
      className="sticky top-0  bg-[#1a2c41f3] text-white z-50"
    >
      <div className="container mx-auto">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
                tabIndex="0"
                className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-[#1A2C41]"
              >
                <NavMenues />
              </ul>
            </div>
            <HashLink
              smooth
              to="home#openingBanner"
              className="btn btn-ghost normal-case text-xl font-bold"
            >
              a<span className="mx-[-7.5px] text-yellow-400">O</span>wadud
            </HashLink>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              <NavMenues />
            </ul>
          </div>
          <div className="navbar-end">
            <Link
              target="_blank"
              to="https://github.com/abuabddullah"
            >
              <FaGithub />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
