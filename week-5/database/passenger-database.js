const BaseDatabase = require('./base-database')
const Passenger = require('../models/passenger')

class PassengerDatabase extends BaseDatabase {
  async findByName(name) {
    const objects = await this.load()

    return objects.find(o => o.name == name)
  }
}

module.exports = new PassengerDatabase(Passenger)
