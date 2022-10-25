// Import all required classes:
const Transaction = require('./transaction')
const Account = require('./account')
const Statement = require('./statement')

// Input the transactions:
const transaction1 = new Transaction(1000, '10/01/2022');
const transaction2 = new Transaction(2000, '13/01/2022'); 

// Is no date has been given, transaction will be saved with today's date:
const transaction3 = new Transaction(500); 

// To set a withdrawal indicate that this is a debit transaction:
transaction3.isDebit();

// Create a new instance of the account and add all transactions to it:
const account = new Account();
account.addTransaction(transaction1);
account.addTransaction(transaction2);
account.addTransaction(transaction3);

// To print a statement first initiate a new instance of the Statement class
const statement = new Statement(account);

// Print a statement:
statement.printStatement()

// Example output:
// date || credit || debit || balance
// 25/10/2022 || || 500.00 || 2500.00 
// 13/01/2022 || 2000.00 || || 3000.00 
// 10/01/2022 || 1000.00 || || 1000.00