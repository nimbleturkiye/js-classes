const app = require('../..')
const request = require('supertest')(app)

test('creates a new booking', async (done) => {
  const passengerToCreate = {
    name: 'Test passenger',
    location: 'Moda'
  }

  const driverToCreate = {
    name: 'Test driver',
    location: 'Moda',
    age: 18
  }

  const origin = 'Moda'
  const destination = 'Bostanci'

  const passengerResponse = await request
    .post('/passengers')
    .send(passengerToCreate)
    .expect(200)

  const driverResponse = await request
    .post('/drivers')
    .send(driverToCreate)
    .expect(200)

  const bookingResponse = await request
    .post(`/passengers/${passengerResponse.body._id}/bookings`)
    .send({
      driverId: driverResponse.body._id,
      origin,
      destination
    })
    .expect(200)

  const bookingCreated = bookingResponse.body

  expect(bookingCreated).toMatchObject({
    driver: driverResponse.body,
    passenger: passengerResponse.body,
    origin,
    destination
  })

  done()
})
