const jwt = require("jsonwebtoken")

const gernerateToken = (res, userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '1d'
    });

    // let domain = '';

    // if (process.env.NODE_ENV === 'development') {
    //     domain = 'localhost';
    // }
    // else {
    //     domain = 'recipewebapp-mu6p.onrender.com';
    // }

    res.cookie('jwt', token, {
        httpOnly: true,
        secure: true,
        sameSite: 'None',
        maxAge: 30 * 24 * 60 * 1000,

    });
};
module.exports = gernerateToken