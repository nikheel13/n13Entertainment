const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken');
const passport = require('passport'); 
const key = require('../../config/keys').secret;
const User = require('../../model/User');





//The functtion that will allow registration

router.post('/register', (req, res) => {
    let { 
        name, 
        username, 
        email, 
        password, 
        confirm_password 
    } = req.body
    if(password !== confirm_password) {
        return res.status(400).json({
            msg: "Password do not match."
        });
    }

    //Validation for unique username
    User.findOne({
        username: username
    }).then(user => {
        if(user) {
            return res.status(400).json({
                msg: "Username exists."
            }); 
        }
    })
    //Validation for unique email
    User.findOne({
        email: email
    }).then(user => {
        if(user) {
            return res.status(400).json({
                msg: "Email already registered. Have you forgotten the password?"
            }); 
        }
    });
    //New data validation function
    let newUser = new User({
        name,
        username,
        password,
        email
    });
    //Hash password
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) throw err;
            newUser.password = hash;
            newUser.save().then(user => {
                return res.status(201).json ({
                    success: true,
                    msg: "User is now registered!"
                });
            });
        });
    });
});



//The login function with authentications

 router.post('/login', (req, res) => {
     User.findOne({ 
         username: req.body.username 
    }).then(user => {
         if(!user){
             return res.status(404).json ({
                 msg: "Username not found.",
                 success: false
             });
         }
         //This function will compare the passwords if the user is found
        bcrypt.compare(req.body.password, user.password).then(isMatch => {
            if (isMatch) {
                //password is correct then send json token for that user
            const payload = {
                _id: user._id,
                username: user.username,
                name: user.name,
                email: user.email
            }

            jwt.sign(payload, key, { 
                expiresIn: 604800 
            }, (err, token) => {
                res.status(200).json({
                    success: true,
                    user: user,
                    token: `Bearer ${token}`,
                    msg: "You are now logged in!"
                });
            })
            } else {
                return res.status(404).json({
                    msg: "Incorrect password",
                    success: false
                });
            }
        })     
    });
 });


 // Route to the user profile upon successful login
 
router.get('/profile', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    return res.json({
        user: req.user
    });
});
module.exports = router;