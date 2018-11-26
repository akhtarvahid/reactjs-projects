const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const password = require('passport');

// Load input Validation
const ValidationRegisterInput = require('../../validation/register');
const ValidationLoginInput = require('../../validation/login');
// Load User model
const User = require('../../models/User');

// @route GET api/users/test
// @desc  Tests users route
// @access Public 
router.get('/test', (req, res) => res.json({ msg: 'Users Works'})
);

// @route GET api/users/register
// @desc  Register user
// @access Public 

router.post('/register', (req, res) => {
    const { errors, isValid } = ValidationRegisterInput(req.body);
    // check validation
    if(!isValid){
     return res.status(400).json(errors);
    }

    User.findOne({ email: req.body.email })
    .then(user => {
        if(user){
            return res.status(400).json({email: 'Email already exists'});
        } else{
            const avatar = gravatar.url(req.body.email, {
                s: '200', //size
                r: 'pg',  //Rating
                d: 'mm'   //Default
            })
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                avatar,
                password: req.body.password
            });

            bcrypt.genSalt(10, (err, salt) => {
              bcrypt.hash(newUser.password, salt, (err, hash) => {
               if(err) throw err;
               newUser.password = hash;
               newUser.save()
                .then(user => res.json(user))
                .catch(err => console.log(err))
              })
            })
        }
    })
});

// @route GET api/users/login
// @desc  Login user
// @access Public 
router.post('/login', (req, res) => {
    
    const { errors, isValid } = ValidationLoginInput(req.body);
    // check validation
    if(!isValid){
     return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    // Find user by email
    User.findOne({email}).then(user => {
        if(!user){
            errors.email = 'User not found'
            return res.status(404).json(errors);
        }
        // check password
        bcrypt.compare(password, user.password).then(isMatch => {
            if(isMatch){
                // User matched
                 const payload = {id:user.id, name:user.name, avatar:user.avatar} // create jwt payload
                // sign token
                jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, 
                (err, token) => {
                  res.json({
                      success: true,
                      token: 'Bearer ' + token
                  });
                });
            } else {
                errors.password = 'Password incorrect';
                return res.status(400).json(errors)
            }
        });
    });
})

// @route GET api/users/current
// @desc  Return curent user
// @access Private
router.get('/current', password.authenticate('jwt', { session: false}), 
(req, res) => {
    res.json({
        if: req.user.id,
        name: req.user.name,
        email: req.user.email
    });
});

module.exports = router;
