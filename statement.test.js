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

  it('puts a debit transaction in a another column', () => {
    const transaction1 = {value: -100, date: '24/10/2022'};
    const account = {transactions: [transaction1]}
    const statement = new Statement(account);
    expect(statement.printTransactions()).toEqual('24/10/2022 || || 100.00 || -100.00')
  })

  it('formats multiple transactions', () => {
    const transaction1 = {value: 400, date: '23/10/2022'};
    const transaction2 = {value: -100, date: '24/10/2022'};
    const account = {transactions: [transaction1, transaction2]}
    const statement = new Statement(account);
    expect(statement.printTransactions()).toEqual('24/10/2022 || || 100.00 || 300.00\n23/10/2022 || 400.00 || || 400.00')
  })

})