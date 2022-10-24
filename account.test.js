const Account = require('./account')

describe('Account', () => {
  it('stores an empty list of no transactions have been made yet', () => {
    const account = new Account();
    expect(account.showTransactions()).toEqual([]);
  })

})