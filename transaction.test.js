const Transaction = require('./transaction')

describe('Transaction', () => {
  it('saves a transaction and can return it', () => {
    const transaction1 = new Transaction(300);
    expect(transaction1.value).toEqual(300)
  })
})