const express = require('express');
const { authUser, registerUser,
    logoutUser,
    getUserProfile,
    updtaeUserProfile } = require('../controllers/userControllers');
const router = express.Router();

const { protect } = require('../middleware/authMiddleware')

router.post('/', registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
router.route('/profile').get(protect, getUserProfile).put(protect, updtaeUserProfile)


module.exports = router; 