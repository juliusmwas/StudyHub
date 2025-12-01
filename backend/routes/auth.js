
// backend/routes/auth.js

const express = require('express');
const router = express.Router();
const { signup, login } = require('../controllers/authController');

// Define the two routes using the controller functions
router.post('/signup', signup);
router.post('/login', login);

module.exports = router;