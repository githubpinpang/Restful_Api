const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
 const bcrypt = require('bcrypt');

const User = require('../models/user');
//login page
router.get('/login', (req, res) => res.send('Login!')); 

//register page 
router.get('/register', (req, res) => res.send('Register!')); 

 //to create a new user
 router.post('/signup', (req, res, next) => {
  const user = new User({

  	-id: new mongoose.Types.ObjectId(),
  	email: require.body.email,
  	password: bcrypt.hash(req.body.email, 10, (err, hash) => {
  		if (err) {
  			return res.status(500).json({
  				error: err
  			});
  		} else
  		{
  			
  		}
  	})
  });
  
 });


module.exports = router;
