const BaseService = require('./base-service')
const Booking = require('../models/booking')
const driverService = require('./driver-service')
const passengerService = require('./passenger-service')

class BookingService extends BaseService {
  async findByPassengerId(passengerId) {
    return this.findBy('passenger', passengerId)
  }

  async findByDriverId(driverId) {
    return this.findBy('driver', driverId)
  }

  async book(driverId, passengerId, origin, destination) {
    const passenger = await passengerService.find(passengerId)
    const driver = await driverService.find(driverId)

    const booking = await this.insert({ driver, passenger, origin, destination })
    passenger.bookings.push(booking)

    await passenger.save()

    return booking
  }
}

module.exports = new BookingService(Booking)
