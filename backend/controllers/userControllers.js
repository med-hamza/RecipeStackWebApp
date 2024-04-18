const asyncHandler = require('express-async-handler')
const User = require('../models/userModal');
const gernerateToken = require('../utils/generateToken')

// @desc Auth user / set token 
// route POST /users/auth

const authUser = asyncHandler(async (req, res) => {

    const { email, password } = req.body;

    const user = await User.findOne({ email })
    if (user && (await user.matchPassowrd(password))) {
        gernerateToken(res, user._id)
        res.status(201).json({
            _id: user._id,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email
        });

    }
    else {
        res.status(401);
        throw new Error('Invalide email or password')
    }

});



// @desc Register a new user 
// route POST /users


const registerUser = asyncHandler(async (req, res) => {


    const { firstname, lastname, email, password } = req.body;

    const userExists = await User.findOne({ email })
    if (userExists) {
        res.status(400);
        throw new Error('User already exists')
    }
    const user = await User.create({
        firstname, lastname, email, password
    });

    if (user) {
        gernerateToken(res, user._id)
        res.status(201).json({
            _id: user._id,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email
        });

    }
    else {
        res.status(400);
        throw new Error('Invalide User Data')
    }
});


// @desc  Logout  user 
// route POST /users/logout


const logoutUser = asyncHandler(async (req, res) => {

    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0)
    })

    res.status(200).json({ message: 'User Logged Out ' })
});

// @desc  Get user Profile 
// route GET /users/profile


const getUserProfile = asyncHandler(async (req, res) => {

    const user = {
        _id: req.user._id,
        firstname: req.user.firstname,
        lastname: req.user.lastname,
        email: req.user.email
    }

    res.status(200).json(user)
});

// @desc  Update user Profile 
// route PUT /users/profile


const updtaeUserProfile = asyncHandler(async (req, res) => {

    const user = await User.findById(req.user._id);
    if (user) {
        user.firstname = req.body.firstname || user.firstname;
        user.lastname = req.body.lastname || user.lastname;
        user.email = req.body.email || user.email;

        if (req.body.password) {
            user.password = req.body.password;
        }
        const updatedUser = await user.save();
        res.status(200).json({
            _id: updatedUser._id,
            firstname: updatedUser.firstname,
            lastname: updatedUser.lastname,
            email: updatedUser.email

        });
    } else {
        res.status(404);
        throw new Error('User not found')
    }
});

module.exports = {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updtaeUserProfile
};