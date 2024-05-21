require('dotenv').config()
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB:', process.env.MONGO_URI);
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

module.exports.Place = require('./places');
module.exports.Comment = require('./comment')

