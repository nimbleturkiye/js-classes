const mongoose = require('mongoose')

const BookingSchema = new mongoose.Schema({
  driver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Driver',
    autopopulate: { maxDepth: 1 }
  },
  passenger: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Passenger',
    autopopulate: { maxDepth: 1 }
  },
  origin: String,
  destination: String
})

BookingSchema.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model('Booking', BookingSchema)
