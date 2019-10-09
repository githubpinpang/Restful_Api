 const express = require('express');
 const router = express.Router();

 const Joi = require('joi');
 const passport = require('passport');
 const randomstring = require('randomstring');

 
 const secretToken = randomstring.generate();
 ///???????
 result.value.secretToken = secretToken;
 result.value.active = false; 