const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const book = require('./book');

const db = 'mongodb://localhost/example';
mongoose.connect(db); 





module.exports = router;