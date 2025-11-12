const User = require('../models/User');

// @desc    Get all users (Protected route example)
// @route   GET /api/users
// @access  Private
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.status(200).json({
      success: true,
      count: users.length,
      users
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Get user by ID (Protected route example)
// @route   GET /api/users/:id
// @access  Private
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    res.status(200).json({
      success: true,
      user
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Update user profile (Protected route example)
// @route   PUT /api/users/:id
// @access  Private
exports.updateUser = async (req, res) => {
  try {
    // Only allow users to update their own profile
    if (req.params.id !== req.userId) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to update this user'
      });
    }

    const { name, email, mobileNumber } = req.body;

    let user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    // Update only allowed fields
    if (name) user.name = name;
    if (email) user.email = email;
    if (mobileNumber) user.mobileNumber = mobileNumber;

    await user.save();

    user.password = undefined;

    res.status(200).json({
      success: true,
      message: 'User updated successfully',
      user
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
