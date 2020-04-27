const Passenger = require('./models/passenger')
const Driver = require('./models/driver')
const passengerService = require('./services/passenger-services')
const driverService = require('./services/driver-services')

const printBookingHistory = require('./lib/print-booking-history')

const armagan = Passenger.create({name: 'Armagan', location: 'Kreuzberg'})
const mert = Passenger.create({name: 'Mert', location: 'Mitte'})
const stefan = Driver.create({ name: 'Stefan', location: 'Treptower Park' })

armagan.book(stefan, 'Kreuzberg', 'Neukolln')
armagan.book(stefan, 'Neukolln', 'Mitte')
armagan.book(stefan, 'Mitte', 'Kreuzberg')
armagan.book(stefan, 'Kreuzberg', 'SXF')
mert.book(stefan, 'Mitte', 'Kreuzberg')

async function main() {
  try {
    await passengerService.save([armagan, mert])

    await driverService.save([stefan])

    const betul = Passenger.create({ name: 'Betul', location: 'Tegel' })

    await passengerService.insert(betul)
    const passengers = await passengerService.load()
    passengers.forEach(printBookingHistory)
  } catch (e) {
    return console.log(e)
  }
}

main()
