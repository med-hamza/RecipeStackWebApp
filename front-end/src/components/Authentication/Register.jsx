import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useRegisterMutation } from '../../reducers/slices/usersApiSlice';
import { setCredentials } from '../../reducers/authReducer';
import Spinner from '../Loading/Spinner';


const Register = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [register, { isLoading }] = useRegisterMutation();

    const { userInfo } = useSelector((state) => state.auth);
    const [email, setEmail] = useState('');
    const [firstname, setFname] = useState('');
    const [lastname, setLname] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')



    useEffect(() => {
        if (userInfo) {
            navigate('/')
        }
    }, [navigate, userInfo])


    const submitHandler = async (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            toast.error('password do not match')
        }
        else {
            try {
                const res = await register({ firstname, lastname, email, password, }).unwrap();
                dispatch(setCredentials({ ...res }))
                navigate('/')
            }
            catch (err) {
                toast.error(err?.data?.message || err.error)
            }
        }
    }

    return (
        <div className=" mt-28">
            <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
                <div className="relative py-3 max-w-4xl   sm:mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#c1777d] to-[#AD343E] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                    </div>
                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                        <form onSubmit={submitHandler}>
                            <div className="max-w-md mx-auto">
                                <div>
                                    <h1 className="text-2xl mb-4 font-semibold">Sign Up</h1>
                                </div>
                                <div className="divide-y divide-gray-200">
                                    <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                        <div className="flex items-center justify-center gap-6">
                                            <div className="relative">
                                                <input autoComplete="off" id="lastname" type='text'
                                                    placeholder='First name'
                                                    onChange={(e) => setFname(e.target.value)}
                                                    value={firstname} className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" />
                                                <label htmlFor="firstname" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">First Name</label>
                                            </div>
                                            <div className="relative">
                                                <input autoComplete="off" id="lastname" type='text'
                                                    placeholder='Last name'
                                                    onChange={(e) => setLname(e.target.value)}
                                                    value={lastname} className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" />
                                                <label htmlFor="lastname" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Last Name</label>
                                            </div>
                                        </div>

                                        <div className="relative">
                                            <input autoComplete="off" id="email" type='email'
                                                placeholder='Enter Email'
                                                onChange={(e) => setEmail(e.target.value)}
                                                value={email} className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" />
                                            <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
                                        </div>
                                        <div className="relative">
                                            <input autoComplete="off" id="password" type="password"
                                                placeholder='Enter Password'
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)} className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" />
                                            <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                                        </div>
                                        <div className="relative">
                                            <input autoComplete="off" id="password" type="password"
                                                placeholder='Confirm Password'
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)} className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" />
                                            <label htmlFor="confirmpassword" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Confirm Password</label>
                                        </div>
                                        {isLoading && <Spinner />}
                                        <div className="relative">
                                            <button className="bg-[#AD343E] mt-4 mb-2 text-white rounded-md px-4 py-1">Submit</button>
                                        </div>
                                        <div> Already have an account  <Link className='text-[#AD343E] font-bold' to="/login"> Login</Link> </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
