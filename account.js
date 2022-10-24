class Account {
  constructor() {
    this.transactions = []
  }

  addTransaction(transaction) {
    this.transactions.push(transaction)
  }

  showTransactions() {
    return this.transactions
  }
}

module.exports = Account;