class Transaction {
  constructor(value, date) {
    this.value = value
    this.date = date
    this.debit = false
  }

  isDebit() {
    this.value = this.value * (-1)
    this.debit = true
  }
}

module.exports = Transaction