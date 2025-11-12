const express = require('express');
const { getAllUsers, getUserById, updateUser } = require('../controllers/userController');
const { protect } = require('../middleware/auth');

const router = express.Router();

// All user routes are protected
router.get('/', protect, getAllUsers);
router.get('/:id', protect, getUserById);
router.put('/:id', protect, updateUser);

module.exports = router;
