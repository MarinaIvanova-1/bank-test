class Account {
  constructor() {
    this.transactions = []
    this.balance = 0
  }

  // To add a transaction run this method
  addTransaction(transaction) {
    this.transactions.push(transaction)
  }

  // To see all transactions run this method
  showTransactions() {
    return this.transactions
  }
}

module.exports = Account;