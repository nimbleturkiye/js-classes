const mongoose = require('mongoose')

const PassengerSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 2 },
  location: String,
  bookings: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Booking',
    autopopulate: { maxDepth: 2 }
  }]
})

PassengerSchema.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model('Passenger', PassengerSchema)
