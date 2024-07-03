// // userController.js
// const User = require('../models/User');
// const session = require('express-session');
// const flash = require('connect-flash');

// exports.create = (req, res, next) => {
//     let user = new User(req.body);
//     user.save().then(() => {
//         req.flash('success', 'Registration successful');
//         res.redirect('/users/login');
//     }).catch(err => {
//         if (err.name === 'ValidationError' || err.code === 11000) {
//             req.flash('error', err.message);
//             return res.redirect('/users/new');
//         }
//         next(err);
//     });
// };

// exports.postLogin = (req, res, next) => {
//     let email = req.body.email;
//     let password = req.body.password;

//     User.findOne({ email: email }).then(user => {
//         if (user) {
//             user.comparePassword(password).then(result => {
//                 if (result) {
//                     req.session.userId = user._id;
//                     req.flash('success', 'You are now logged in.');
//                     res.redirect('/users/profile');
//                 } else {
//                     req.flash('error', 'Invalid password.');
//                     res.redirect('/users/login');
//                 }
//             });
//         } else {
//             req.flash('error', 'Invalid email address.');
//             res.redirect('/users/login');
//         }
//     }).catch(err => next(err));
// };

// exports.logout = (req, res) => {
//     req.session.destroy(() => {
//         res.redirect('/'); // Redirect to homepage after logout
//     });
// };
