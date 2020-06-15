const app = require('../..')
const request = require('supertest')(app)

test('creates a new passenger', async (done) => {
  const passengerToCreate = {
    name: 'Test passenger',
    location: 'Moda'
  }

  const response = await request
    .post('/passengers')
    .send(passengerToCreate)
    .expect(200)

  const passengerCreated = response.body

  expect(passengerCreated).toMatchObject(passengerToCreate)
  expect(passengerCreated.bookings).toEqual([])

  done()
})
