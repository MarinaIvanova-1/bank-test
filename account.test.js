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
    expect(account.showTransactions()).toEqual([]);
    account.addTransaction(transaction1);
    account.addTransaction(transaction2);
    expect(account.showTransactions()).toEqual([transaction1, transaction2])
  })
})