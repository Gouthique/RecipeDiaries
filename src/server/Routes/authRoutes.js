// authRoutes.js
const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User, validateSignup, validateLogin } = require("../models/User");
require('dotenv').config();

// const auth =  require('../middleware/auth');
 // Destination folder for uploaded files

 

const jwtSecretKey = 'recipediariesabcd12345'
const auth = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).send('Access denied. No token provided.');
    }
    try {
        const decoded = jwt.verify(token, jwtSecretKey);
        req.user = decoded;  // Previously decoded might have been set incorrectly
        console.log("Decoded JWT:", decoded); // Should show the decoded token structure
        next();
    } catch (ex) {
        return res.status(400).send('Invalid token.');
    }
};



// router.use((req, res, next) => {
//     const token = req.headers.authorization?.split(' ')[1]; // Using optional chaining
//     if (!token) {
//         return res.status(401).send('Access denied. No token provided.');
//     }

//     try {
//         const decoded = jwt.verify(token, jwtSecretKey);
//         req.user = decoded; // Add the user to the request object
//         next();
//     } catch (ex) {
//         return res.status(400).send('Invalid token.');
//     }
// });
// Signup route
router.post("/signup", async (req, res) => {
    const { error } = validateSignup(req.body);
    if (error) {
        return res.status(400).send({ message: error.details[0].message });
    }

    let existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
        return res.status(400).send({ message: "Email already registered. Please use a different email address." });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashedPassword,
    });

    await newUser.save();

    res.status(201).send({ message: "User registered successfully" });
});

// Login route
router.post("/signin", async (req, res) => {
    console.log("Received signin request with body:", req.body);
    const { error } = validateLogin(req.body);
    if (error) {
        console.log("Validation error:", error.details[0].message);
        return res.status(400).send({ message: error.details[0].message });
    }

    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        console.log("User not found for email:", req.body.email);
        return res.status(401).send({ message: "Invalid email or password" });
    }

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
        console.log("Invalid password for email:", req.body.email);
        return res.status(401).send({ message: "Invalid email or password" });
    }

    const token = jwt.sign({ userId: user._id }, jwtSecretKey, { expiresIn: '7d' });
    console.log("Generated token:", token);
    res.status(200).send({ token });
});

// Logout route
router.post('/logout', (req, res) => {
  res.clearCookie('token'); // Example for clearing cookie
  res.status(200).send({ message: 'Logout successful' });
});



router.get('/profile', auth, async (req, res) => {
    console.log("Fetching user profile for ID:", req.user.userId); // Log the user ID being fetched
    try {
        const user = await User.findById(req.user.userId).select('-password');
        if (!user) {
            return res.status(404).send({ message: 'User not found.' });
        }
        res.json(user);
    } catch (error) {
        console.error('Error fetching user profile:', error);
        res.status(500).send({ message: 'Internal server error.' });
    }
});




module.exports = router;




