class User {
  constructor(name, email, phone) {
    this.name = name
    this.email = email
    this.phone = phone
  }

  findPT() {

  }

  bookPT(pt) {
    this.bookings.push(pt)
  }
}

class Athelete extends User {
  constructor(name, email, phone) {
    super(name, email, phone)

    this.measurements = []
  }
}

const user = new Athlete('Armagan', 'armagan@nimble.dev', '+4914132')

const pts = user.findPT()

user.bookPT(pts[0])
