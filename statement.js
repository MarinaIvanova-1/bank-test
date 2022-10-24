class Statement {
  constructor(account) {
    this.account = account
  }

  printTransactions() {
    let transactionString = ''
    let balance = 0
    this.account.transactions.forEach(transaction => {
      balance += transaction.value
      if (transaction.value > 0) {
        transactionString = `${transaction.date} || ${transaction.value.toFixed(2)} || || ${balance.toFixed(2)}`
      }
      else {
        transactionString = `${transaction.date} || || ${(transaction.value * -1).toFixed(2)} || ${balance.toFixed(2)}`
      }
    })
    return transactionString
  }

  printHeader() {
    return 'date || credit || debit || balance'
  }
}

module.exports = Statement