
// backend/controllers/authController.js

const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Helper function to create and sign a JWT token
const createToken = (user) => {
    return jwt.sign(
        { userId: user._id, role: user.role }, 
        process.env.JWT_SECRET, 
        { expiresIn: process.env.JWT_LIFETIME }
    );
};

// --- SIGNUP LOGIC (Step 2) ---
exports.signup = async (req, res) => {
    const { fullName, email, password, role } = req.body;

    // 1. Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ msg: 'Email already registered.' });
    }

    try {
        // 2. Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // 3. Create the new user
        const user = await User.create({
            fullName,
            email,
            password: hashedPassword, // Store the hashed password
            role
        });

        // 4. Generate JWT Token
        const token = createToken(user);

        // 5. Return success response
        res.status(201).json({ 
            user: { fullName: user.fullName, email: user.email, role: user.role },
            token 
        });

    } catch (error) {
        // Handle validation errors (e.g., required fields missing)
        res.status(500).json({ msg: 'Server error during signup', error: error.message });
    }
};


// --- LOGIN LOGIC (Step 3) ---
exports.login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ msg: 'Please provide email and password.' });
    }

    // 1. Find the user in DB
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(401).json({ msg: 'Invalid Credentials.' }); // Use generic message for security
    }

    // 2. Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(401).json({ msg: 'Invalid Credentials.' });
    }

    // 3. If correct, generate token
    const token = createToken(user);

    // 4. Return success response with token and role
    res.status(200).json({ 
        user: { 
            fullName: user.fullName, 
            email: user.email, 
            role: user.role, // Return role for frontend redirection
        },
        token 
    });
};