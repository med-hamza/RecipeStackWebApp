import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { setCredentials } from '../../reducers/authReducer';
import { useUpdateUserMutation } from '../../reducers/slices/usersApiSlice';
import Spinner from '../Loading/Spinner';

const Profile = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { userInfo } = useSelector((state) => state.auth);

    const [updateProfile, { isLoading }] = useUpdateUserMutation();

    const [email, setEmail] = useState('');
    const [firstname, setFname] = useState('');
    const [lastname, setLname] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')



    useEffect(() => {
        setFname(userInfo.firstname)
        setLname(userInfo.lastname)
        setEmail(userInfo.email)
    }, [userInfo.setEmail, userInfo.setFname, userInfo.setLname])


    const submitHandler = async (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            toast.error('password do not match')
        }
        else {
            try {
                const res = await updateProfile({
                    _id: userInfo._id,
                    firstname,
                    lastname,
                    email,
                    password
                }).unwrap()
                dispatch(setCredentials({ ...res }))
                toast.success('profile updated')
            }
            catch (err) {
            }
        }
    }

    return (
        <div className=" mt-36">
            <div className="bg-white p-5 md:p-16 lg:p-16 rounded shadow-2xl w-11/12 md:w-2/3 lg:w-2/3 m-auto mt-30 mb-10">
                <h2 className="text-3xl font-bold mb-10 text-gray-800">Update Profile</h2>
                <form onSubmit={submitHandler}>
                    <div className=' mt-3 mb-3'>
                        <label className="block mb-1 font-bold text-gray-500">Email</label>
                        <input type='email' className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-[#AD343E]"
                            placeholder='Enter Email'
                            onChange={(e) => setEmail(e.target.value)}
                            value={email} />
                    </div>
                    <div className=' mt-3 mb-3'>
                        <label className="block mb-1 font-bold text-gray-500">First Name</label>
                        <input type='text' className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-[#AD343E]"
                            placeholder='First name'
                            onChange={(e) => setFname(e.target.value)}
                            value={firstname} />
                    </div>
                    <div className=' mt-3 mb-3'>
                        <label className="block mb-1 font-bold text-gray-500">Last Name</label>
                        <input type='text' className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-[#AD343E]"
                            placeholder='Last name'
                            onChange={(e) => setLname(e.target.value)}
                            value={lastname} />
                    </div>
                    <div className=' mt-3 mb-3'>
                        <label className="block mb-1 font-bold text-gray-500"> Password</label>
                        <input type="password" className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-[#AD343E]"
                            placeholder='Enter Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className=' mt-3 mb-3'>
                        <label className="block mb-1 font-bold text-gray-500">Confirm Password</label>
                        <input type="password" className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-[#AD343E]"
                            placeholder='Confirm Password'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    {isLoading && <Spinner />}
                    <button className="block w-full bg-[#AD343E] hover:bg-[#c8525c] p-4 rounded text-white font-medium transition duration-300">Update</button>

                </form>

            </div>

        </div>
    )
}

export default Profile
