import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Menu from '../components/Menu';
import { LuPower } from "react-icons/lu";
import { useLogoutMutation } from '../reducers/slices/usersApiSlice';
import { logout } from '../reducers/authReducer';



const Header = () => {

  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApiCall] = useLogoutMutation();

  const logouHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/');
    } catch (err) {
      console.log(err)
    }

  }


  return (
    <div className=' w-full  shadow-md fixed z-20 top-0 left-0 bg-white'>
      <div className='w-full max-w-7xl mx-auto'>
        <nav className="flex items-center mt-2 mb-1 px-2 pl-2 pr-2  bg-transparent justify-between">
          <div>
            <Link to="/">
              <img src={'/hamlicious.png'} alt="logo" />
            </Link>
          </div>
          <div className='block md:hidden lg:hidden'>
            {userInfo ? (
              <div className='flex items-center gap-3'>
                <Link className='text-[#AD343E]  font-semibold text-xl' to='/profile'>  {userInfo.firstname} </Link>
              </div>
            ) : ''}
          </div>
          <div className=' flex items-center md:hidden lg:hidden sm:hidden '>
            <Menu />
          </div>
          <div
            className='fixed inset-y-0 right-0  w-2/4 bg-gradient-to-tl transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 lg:flex lg:flex-row lg:items-center lg:w-auto'
          >


            <div className="lg:flex lg:flex-row lg:items-center">
              <div className="hidden md:flex md:items-center lg:flex lg:flex-row items-center">
                <NavLink className={({ isActive }) => isActive ? "text-[#AD343E] bottom-link mr-2 md:mr-2 lg:mr-8 font-semibold text-lg" : " bottom-link mr-2 md:mr-2 lg:mr-8 font-semibold text-lg text-black"} to="/recipes"
                >
                  Browse Recipes
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? "text-[#AD343E] bottom-link mr-2 md:mr-2 lg:mr-8 font-semibold text-lg" : "bottom-link mr-2 md:mr-2 lg:mr-8 font-semibold text-lg text-black"} to="/wishlist"
                >
                  My Recipes
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? "text-[#AD343E] bottom-link mr-2 md:mr-2 lg:mr-8 font-semibold text-lg" : "bottom-link mr-2 md:mr-2 lg:mr-8 font-semibold text-lg text-black"} to="/planner"
                >
                  My Planner
                </NavLink>
                {userInfo ? (
                  <div className='flex items-center gap-3'>
                    <p className=' cursor-pointer' onClick={logouHandler} ><LuPower className='text-black hover:text-[#AD343E] text-2xl' /> </p>
                    <Link className='text-[#AD343E]  font-semibold text-xl' to='/profile'>  {userInfo.firstname} </Link>
                  </div>
                ) : (
                  <div className='lg:flex lg:flex-row items-center'>

                    <NavLink className={({ isActive }) => isActive ? "text-[#AD343E] rounded-md  border-[#AD343E] border-2 py-1 px-5 mr-8 font-semibold text-lg" : "text-white bg-[#AD343E] py-1 px-5  rounded-md mr-8 font-semibold text-lg "} to="/register"
                    >
                      Sign Up
                    </NavLink>
                    <NavLink className={({ isActive }) => isActive ? "text-[#AD343E] bottom-link mr-8 font-semibold text-lg" : "bottom-link mr-8 font-semibold text-lg text-black"} to="/login"
                    >
                      Log In
                    </NavLink>
                  </div>
                )}

              </div>


            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
