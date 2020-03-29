class Driver {
  constructor(name, location) {
    this.name = name
    this.location = location
  }

  static create({name, location}) {
    return new Driver(name, location)
  }
}

module.exports = Driver
