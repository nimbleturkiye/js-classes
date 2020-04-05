const { passengerDatabase, driverDatabase } = require('./database')
const printBookingHistory = require('./lib/print-booking-history')

async function main() {
  const stefan = await driverDatabase.findBy('name', 'Stefan')
  const armagan = await passengerDatabase.findByName('Armagan')

  armagan.book(stefan, 'Kreuzberg', 'Wannsee')
  passengerDatabase.update(armagan)

  printBookingHistory(armagan)

  console.log(await passengerDatabase.findBy('location', 'Mitte'))
}

main()
