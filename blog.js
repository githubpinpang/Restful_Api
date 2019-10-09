const express = require('express');
const model = require('/model');
const router = require('/router');

const events = require('events');


const app = express();

app.use('./', model);
app.use('./', router);
app.use(express.json());

const emitter = events.EventEmitter();



.post('/');
.get();






//