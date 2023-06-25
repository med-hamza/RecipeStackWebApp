import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const wishlistData = useSelector((state) => state.wishlists.wishlistItem);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='w-full max-w-7xl mx-auto'>
      <nav className="flex items-center mt-5 mb-5 px-2 pl-2 pr-2 bg-transparent justify-between">
        <div>
          <Link to="/">
            <img src={process.env.PUBLIC_URL + '/hamlicious.png'} alt="logo" />
          </Link>
        </div>

        <div className="lg:hidden">
          <button
           className={`${isOpen ?  'hidden': 'text-black focus:outline-none' }`}
            onClick={toggleMenu}
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        <div
          className={`${
            isOpen ? ' from-white/70 to-[#F6784C] translate-x-0' : 'translate-x-full'
          } fixed inset-y-0 right-0 z-50 w-2/4 bg-gradient-to-tl transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 lg:flex lg:flex-row lg:items-center lg:w-auto`}
        >
          <button
          className={`${isOpen ?  'className=" absolute top-5 left-40 text-black focus:outline-none': 'hidden' }`}
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="lg:flex lg:flex-row lg:items-center">
            <div className="hidden lg:flex lg:flex-row">
              <Link className="mr-8" to="/explore">
                About
              </Link>
              <Link className="mr-8" to="/Help">
                Help
              </Link>
              <Link className="mr-8" to="/Help">
                Contact
              </Link>
              <Link className="mr-8" to="/wishlist">
                My Recipes 
              </Link>
              <Link className="mr-8" to="/planner">
                My Planner
              </Link>
            </div>

            <div className="lg:hidden grid mt-10 px-4">
              <Link className="text-2xl font-bold mt-2 mb-2" to="/explore">
                About
              </Link>
              <Link className="text-2xl font-bold mt-2 mb-2" to="/Help">
                Help
              </Link>
              <Link className="text-2xl font-bold mt-2 mb-2" to="/Help">
                Contact
              </Link>
              <Link className="text-2xl font-bold mt-2 mb-2" to="/wishlist">
                My Recipes
              </Link>
              <Link className="text-2xl font-bold mt-2 mb-2" to="/planner">
                My Planner
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
