class Transaction {
  constructor(value, date) {
    this.value = value
    this.date = date
  }

  isDebit() {
    this.value = this.value * (-1)
  }
}

module.exports = Transaction