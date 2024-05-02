import React, { useEffect, useRef, useState } from 'react';
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../reducers/slices/usersApiSlice';
import { LuPower } from "react-icons/lu";
import { logout } from '../reducers/authReducer';

const Menu = () => {
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);
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

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return (
        <>
            <button
                onClick={() => setOpen(!open)}
                className={`  ${open ? "" : ""}  right-3 lg:right-11 top-11 absolute  z-30 flex flex-col justify-around w-8 h-8 bg-transparent border-none cursor-pointer p-0 focus:outline-none`}
            >
                {open ? <IoMdClose className='text-black text-3xl' /> : <IoMdMenu className='text-black  text-3xl' />}
            </button>

            <nav
                onClick={() => setOpen(!open)}
                ref={menuRef}
                className={`flex flex-col space-y-4 shadow-md z-20  bg-white px-6  lg:px-12  py-24 fixed top-0 right-0 h-full transform transition-transform duration-500 ease-in-out  ${open ? 'translate-x-0' : 'translate-x-full'} w-3/4 md:w-1/2 lg:w-1/5`}
            >
                <Link to="/recipes" className="text-end text-[#727272] text-md font-semibold  border-b  border-[#cdcdcd] pb-2 uppercase">   Browse Recipes</Link>
                <Link to="/wishlist" className="text-end text-[#727272] text-md font-semibold  border-b border-[#cdcdcd]  pb-2 uppercase">My Recipes</Link>
                <Link to="/planner" className=" text-end text-[#727272] text-md font-semibold  border-b border-[#cdcdcd]  pb-2 uppercase">My Planner</Link>
                {userInfo ? (
                    <div>
                        <p className='flex items-center gap-3 cursor-pointer' onClick={logouHandler} ><LuPower className='text-black hover:text-[#AD343E] text-2xl' />Logout </p>
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

            </nav >
        </>
    );
};

export default Menu;
