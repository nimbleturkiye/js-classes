const Passenger = require('./models/passenger')
const Driver = require('./models/driver')
const passengerDatabase = require('./database/passenger-database')
const driverDatabase = require('./database/driver-database')

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
    await passengerDatabase.save([armagan, mert])

    await driverDatabase.save([stefan])

    const betul = Passenger.create({ name: 'Betul', location: 'Tegel' })

    await passengerDatabase.insert(betul)
    const passengers = await passengerDatabase.load()
    passengers.forEach(printBookingHistory)
  } catch (e) {
    return console.log(e)
  }
}

main()
