import { useState } from "react";
import Logo from "../assets/logo.png"; // Add your logo image to assets folder
import { Link } from "react-router-dom";

const Navbar = () => {

    
    
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" fixed w-full z-50 top-1 left-0">
      <div className="  ml-10  sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-10 w-9" src={Logo} alt="Logo" />
            </div>
            <div className="ml-3 text-white font-semibold">
              <h1 className="text-[15.4px] leading-[20.02px] font-normal text-[rgb(233,233,233)]">
                Sheryians <br /> coding school
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-30 flex mr-18 items-center space-x-12 text-[14px] leading-normal font-normal">
              <Link to="/" className="text-white ">
                Home
              </Link>
              <Link to="/courses" className="text-white ">
                Courses
              </Link>
              <Link
                to="/cohort"
                className="text-[rgb(190,82,75)] text-[16.8px] font-semibold leading-normal "
              >
                Cohort 2.0
              </Link>
              <Link to="/callback" className="text-white ">
                Request Callback
              </Link>
            <Link to="/signin" style={{ fontFamily: "Helvetica Now Display, sans-serif" }} className="bg-[#24CFA6] text-[rgb(0,0,0)] text-[15px] font-medium rounded px-6 tracking-wide cursor-pointer py-2   ">
                Sign In
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white "
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-white block px-3 py-2 hover:bg-gray-800 rounded-md"
            >
              Home
            </Link>
            <Link
              to="/courses"
              className="text-white block px-3 py-2 hover:bg-gray-800 rounded-md"
            >
              Courses
            </Link>
            <Link
              to="/cohort"
              className="text-red-400 block px-3 py-2 hover:bg-gray-800 rounded-md"
            >
              Cohort 2.0
            </Link>
            <Link
              to="/callback"
              className="text-white block px-3 py-2 hover:bg-gray-800 rounded-md"
            >
              Request Callback
            </Link>
            <Link to='' className="w-full text-left bg-emerald-400 text-black px-3 py-2 rounded-md hover:bg-emerald-500 transition-colors">
              Sign In
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
