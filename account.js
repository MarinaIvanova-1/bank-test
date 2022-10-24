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

  calculateBalance() {
    this.balance = this.transactions.reduce((sum, transaction) => {
      return sum + transaction.value;
    }, 0)
    return this.balance
  }
}

module.exports = Account;