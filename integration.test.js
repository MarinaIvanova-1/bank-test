const Transaction = require('./transaction')
const Account = require('./account')
const Statement = require('./statement')

describe('integration', () => {
  it('produces the bank statement', () => {
    const transaction1 = new Transaction(1000, '10/01/2023');
    const transaction2 = new Transaction(2000, '13/01/2023'); 
    const transaction3 = new Transaction(500, '14/01/2023'); 
    transaction3.isDebit();
    const account = new Account();
    account.addTransaction(transaction1);
    account.addTransaction(transaction2);
    account.addTransaction(transaction3);
    const statement = new Statement(account);
    let stringToCompare = 'date || credit || debit || balance\n14/01/2023 || || 500.00 || 2500.00\n13/01/2023 || 2000.00 || || 3000.00\n10/01/2023 || 1000.00 || || 1000.00'

    expect(statement.printStatement()).toEqual(stringToCompare)
  })
})