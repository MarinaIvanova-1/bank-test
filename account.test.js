const Account = require('./account')

describe('Account', () => {
  it('stores an empty list of no transactions have been made yet', () => {
    const account = new Account();
    expect(account.showTransactions()).toEqual([]);
  })

  it('stores all transactions in the array', () => {
    const transaction1 = {};
    const transaction2 = {};
    const account = new Account();
    account.addTransaction(transaction1);
    account.addTransaction(transaction2);
    expect(account.showTransactions()).toEqual([transaction1, transaction2])
  })

  it('calculates balance when the transaction is made', () => {
    const transaction1 = {value: 1000};
    const transaction2 = {value: 2000};
    const transaction3 = {value: -500};
    const account = new Account();
    account.addTransaction(transaction1);
    account.addTransaction(transaction2);
    account.addTransaction(transaction3);
    expect(account.calculateBalance()).toEqual(2500)
  })
})