const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB:', process.env.MONGO_URI);
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

module.exports.Place = require('./places');


// This is the Canvas Code.
// const mongoose = require('mongoose')

// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true, 
//   useUnifiedTopology: true
// })

// module.exports.Place = require('./places')