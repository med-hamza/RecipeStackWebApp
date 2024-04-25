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
                toast.error(err?.data?.message || err.error)
            }
        }
    }

    return (
        <div className=" mt-28">
            <h1>Update Profile</h1>
            <form onSubmit={submitHandler}>
                <label >Email</label>
                <input type='email'
                    placeholder='Enter Email'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email} />
                <label >First Name</label>
                <input type='text'
                    placeholder='First name'
                    onChange={(e) => setFname(e.target.value)}
                    value={firstname} />
                <label >Last Name</label>
                <input type='text'
                    placeholder='Last name'
                    onChange={(e) => setLname(e.target.value)}
                    value={lastname} />
                <label > Password</label>
                <input type="password"
                    placeholder='Enter Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label >Confirm Password</label>
                <input type="password"
                    placeholder='Confirm Password'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {isLoading && <Spinner />}
                <button type='submit'>Update</button>

            </form>
        </div>
    )
}

export default Profile
