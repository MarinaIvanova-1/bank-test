const Transaction = require("./transaction")
const Account = require('./account')

class Bank {
  constructor() {
    this.account = new Account();
  }

  withdraw(value) {
    const transaction = new Transaction(value);
    transaction.isDebit();
    this.account.addTransaction();
  }

}

module.exports = Bank