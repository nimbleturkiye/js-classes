const { passengerService, driverService } = require('./services')
const printBookingHistory = require('./lib/print-booking-history')

async function main() {
  const stefan = await driverService.findBy('name', 'Stefan')
  const armagan = await passengerService.findByName('Armagan')

  armagan.book(stefan, 'Kreuzberg', 'Wannsee')
  passengerService.update(armagan)

  printBookingHistory(armagan)

  console.log(await passengerService.findBy('location', 'Mitte'))
}

main()
