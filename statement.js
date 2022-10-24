class Statement {
  constructor(account) {
    this.account = account
  }

  printTransactions() {
    let balance = 0
    let formattedTransactions = []
    this.account.transactions.forEach(transaction => {
      let singleTransactionString = ''
      balance += transaction.value
      if (transaction.value > 0) {
        singleTransactionString = `${transaction.date} || ${transaction.value.toFixed(2)} || || ${balance.toFixed(2)}`
      }
      else {
        singleTransactionString = `${transaction.date} || || ${(transaction.value * -1).toFixed(2)} || ${balance.toFixed(2)}`
      }
      formattedTransactions.unshift(singleTransactionString)
    })
    
    return formattedTransactions.join('\n')
  }

  printHeader() {
    return 'date || credit || debit || balance'
  }

  printStatement() {
    return `${this.printHeader()}\n${this.printTransactions()}`
  }
}

module.exports = Statement