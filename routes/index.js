const express = require('express');
const router = express.Router();
const mongo = require('mongodb');
const assert = require('assert');

var url = 'mongodb://localhost:27017/myd';

router.get('/', (req, res) => res.send('Welcome!')
	); 

// get home page
router.get('/', function(req, res, next){
  
});

router.get('/get-data', function(req, res, next){
	var resultArray = [];

  mongo.connect(url, function(err, db){
  assert.equal(null, err);
  const cursor = db.collection('user-data').find();
  cursor.forEach(function(doc, err){
  	assert.equal(null, err);
   resultArray.push(doc);
  }, function(){
  	db.close();
  	res.render('index', {items: resultArray });
  });
  });
});

router.post('/insert', function(req, res, next){
  var item = {
  	title: req.body.title,
  	content: req.body.content;
  	author: req.body.author;
  };

  mongo.connect(url, function(err, db){
  assert.equal(null, err);
  db.collection('user-data').insertOne(item, function(err, result){
   assert.equal(null, err);
   console.log('item inserted');
   db.close();

  });
  });
 
 res.redirect('/');

});

router.post('/update', function(req, res, next){
  
});

router.post('/delete', function(req, res, next){
  
});



router.getElementsByTagName('')

module.exports = router;
