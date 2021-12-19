const mongoose = require('mongoose')

// database name: url-shortener
mongoose.connect('mongodb://localhost/url-shortener', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection

db.on('error', () => {
  console.log('mongoDB error !')
})

db.once('open', () => {
  console.log('mongoDB connected !')
})

module.exports = db