const { passengerDatabase, driverDatabase } = require('./database')
const printBookingHistory = require('./lib/print-booking-history')

const stefan = driverDatabase.findBy('name', 'Stefan')
const armagan = passengerDatabase.findByName('Armagan')

armagan.book(stefan, 'Kreuzberg', 'Wannsee')
passengerDatabase.update(armagan)

printBookingHistory(armagan)

console.log(passengerDatabase.findBy('location', 'Mitte'))
