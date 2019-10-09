const mongoose = require('mongoose');

const schema = mongoose.schema();

const shelf = new schema({
      title : String;
      name : String;
      publish : Date;
});

module.exports = mongoose.model("shelf", shelf);