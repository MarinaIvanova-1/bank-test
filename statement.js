class Statement {
  constructor(account) {
    this.account = account
  }

  // This method prints a header of the statement
  printHeader() {
    return 'date || credit || debit || balance'
  }
  
  // This method prints the transactions
  printAllTransactions() {
    // Starting balance is 0
    let balance = 0
    let formattedTransactions = []
    this.account.transactions.forEach(transaction => {
      // Balance is updated after each transaction
      balance += transaction.value
      // This formats the transaction strings to the desired format
      const formattedTransaction = this.printSingleTransaciton(transaction, balance)
      // This adds individual transactions to the final array
      formattedTransactions.unshift(formattedTransaction)    
    })
    
    // The method returns the string containing all transactions in the desired format
    return formattedTransactions.join('\n')
  }
  
  printSingleTransaciton(transaction, balance) {
    let singleTransactionString = ''
    // This formats the transaction strings to the desired format
    if (transaction.value > 0) {
      singleTransactionString = `${transaction.date} || ${transaction.value.toFixed(2)} || || ${balance.toFixed(2)}`
    }
    else {
      singleTransactionString = `${transaction.date} || || ${(transaction.value * -1).toFixed(2)} || ${balance.toFixed(2)}`
    }
    
    return singleTransactionString
  }
  // This method prints the full statement
  printStatement() {
    return `${this.printHeader()}\n${this.printAllTransactions()}`
  }
}

module.exports = Statement