const Transaction = require("./transaction")
const Account = require('./account')
const Statement = require('./statement')

class Bank {
  constructor() {
    this.account = new Account();
  }

  withdraw(value) {
    const transaction = new Transaction(value);
    transaction.isDebit();
    this.account.addTransaction(transaction);
  }

  deposit(value) {
    const transaction = new Transaction(value);
    this.account.addTransaction(transaction);
  }

  seeStatement() {
    const statement = new Statement(this.account);
    return statement.printStatement();
  }

}

module.exports = Bank;