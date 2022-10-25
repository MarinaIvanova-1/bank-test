class Account {
  constructor() {
    this.transactions = []
    this.balance = 0
  }

  addTransaction(transaction) {
    this.transactions.push(transaction)
  }

  showTransactions() {
    return this.transactions
  }
}

module.exports = Account;