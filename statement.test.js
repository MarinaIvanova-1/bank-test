const Statement = require('./statement')

describe('Statement', () => {
  it('prints a header', () => {
    const account = {}
    const statement = new Statement(account);
    expect(statement.printHeader()).toEqual('date || credit || debit || balance')
  })

  it('formats the transaction', () => {
    const transaction1 = {value: 100, date: '24/10/2022'};
    const account = {transactions: [transaction1]}
    const statement = new Statement(account);
    expect(statement.printTransactions()).toEqual('24/10/2022 || 100.00 || || 100.00')
  })

})