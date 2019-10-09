const express = require('express');
const routes = require('./routes');
//const user = require('./routes/user');
const http = require('http');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const url = 'mongodb://localhost/test1';

app.use('/', require('./routes/index'));
//app.use('/users', require('./routes/users'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`server started on port ${PORT}`)); 