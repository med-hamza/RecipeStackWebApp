import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Menu from '../components/Menu';

const Header = () => {

  return (
    <div className=' w-full  shadow-md fixed z-20 top-0 left-0 bg-white'>
      <div className='w-full max-w-7xl mx-auto'>
        <nav className="flex items-center mt-2 mb-1 px-2 pl-2 pr-2  bg-transparent justify-between">
          <div>
            <Link to="/">
              <img src={process.env.PUBLIC_URL + '/hamlicious.png'} alt="logo" />
            </Link>
          </div>

          <div className=' block md:block lg:hidden sm:hidden '>
            <Menu />
          </div>
          <div
            className='fixed inset-y-0 right-0  w-2/4 bg-gradient-to-tl transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 lg:flex lg:flex-row lg:items-center lg:w-auto'
          >


            <div className="lg:flex lg:flex-row lg:items-center">
              <div className="hidden lg:flex lg:flex-row">
                <NavLink className={({ isActive }) => isActive ? "text-[#AD343E] bottom-link mr-8 font-semibold text-lg" : " bottom-link mr-8 font-semibold text-lg text-black"} to="/recipes"
                >
                  Browse Recipes
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? "text-[#AD343E] bottom-link mr-8 font-semibold text-lg" : "bottom-link mr-8 font-semibold text-lg text-black"} to="/wishlist"
                >
                  My Recipes
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? "text-[#AD343E] bottom-link mr-8 font-semibold text-lg" : "bottom-link mr-8 font-semibold text-lg text-black"} to="/planner"
                >
                  My Planner
                </NavLink>
              </div>


            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
