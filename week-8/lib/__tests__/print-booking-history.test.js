const printBookingHistory = require('../print-booking-history')

test('prints passenger bookings when a passenger has a booking', () => {
  // initialization
  const passenger = {
    name: 'Armagan',
    bookings: [{
      passenger: { name: 'Armagan' },
      driver: { name: 'Stefan' },
      origin: 'Kreuzberg',
      destination: 'Neukolln'
    }]
  }
  const consoleSpy = jest.spyOn(console, 'log')

  // test
  printBookingHistory(passenger)

  // assertions
  expect(consoleSpy).toHaveBeenCalledWith('Armagan booked Stefan to travel from Kreuzberg to Neukolln')

  // teardown
  consoleSpy.mockRestore()
})

test('prints warning message when a passenger has no bookings', () => {
  // initialization
  const passenger = {
    name: 'Armagan',
    bookings: []
  }
  const consoleSpy = jest.spyOn(console, 'log')

  // test
  printBookingHistory(passenger)

  // assertions
  expect(consoleSpy).toHaveBeenCalledWith('Armagan has no bookings yet.')

  // teardown
  consoleSpy.mockRestore()
})
