const { passengerService, bookingService } = require('../services')

const router = require('express').Router()

router.get('/', async (req, res) => {
  const passengers = await passengerService.load()

  res.render('passengers', { passengers })
})

router.post('/', async (req, res, next) => {
  try {
    const passenger = await passengerService.insert(req.body)
    res.send(passenger)
  } catch(e) {
    next(e)
  }
})

router.delete('/:passengerId', async (req, res) => {
  await passengerService.removeBy('_id', req.params.passengerId)

  res.send('OK')
})

router.get('/:passengerId', async (req, res) => {
  const passenger = await passengerService.find(req.params.passengerId)

  if (!passenger) return res.status(404).send('Cannot find passenger')
  res.render('passenger', { passenger })
})

router.post('/:passengerId/bookings', async (req, res) => {
  const { passengerId } = req.params
  const { driverId, origin, destination } = req.body

  const booking = await bookingService.book(driverId, passengerId, origin, destination)

  res.send(booking)
})

router.patch('/:passengerId', async (req, res) => {
  const { passengerId } = req.params
  const { name } = req.body

  await passengerService.update(passengerId, { name })
})

module.exports = router
