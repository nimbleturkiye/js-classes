const mongoose = require('mongoose')

const DriverSchema = new mongoose.Schema({
  name: String,
  location: String,
  age: { type: Number, required: true, min: 18 },
})

module.exports = mongoose.model('Driver', DriverSchema)
