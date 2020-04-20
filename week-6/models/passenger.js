// const Booking = require('./booking')
// const uuid = require('uuid')

const mongoose = require('mongoose')

const PassengerSchema = new mongoose.Schema({
  name: String,
  location: String,
  bookings: []
})

module.exports = mongoose.model('Passenger', PassengerSchema)


// class Passenger {
//   constructor(id = uuid.v4(), name, location, bookings = []) {
//     this.id = id

//     this.name = name
//     this.location = location
//     this.bookings = bookings
//   }

//   book(driver, origin, destination) {
//     const booking = new Booking(driver, this, origin, destination)

//     this.bookings.push(booking)

//     return booking
//   }

//   static create({id, name, location, bookings}) {
//     return new Passenger(id, name, location, bookings)
//   }
// }

// module.exports = Passenger
