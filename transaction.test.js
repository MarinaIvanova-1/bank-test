const Transaction = require('./transaction')

describe('Transaction', () => {
  it('saves a transaction and can return its value and date', () => {
    const transaction1 = new Transaction(300, '24/10/2022');
    expect(transaction1.value).toEqual(300)
    expect(transaction1.date).toEqual('24/10/2022')
  })

  it('can be set as a debit transaction', () => {
    const transaction1 = new Transaction(300, '24/10/2022');
    transaction1.isDebit()
    expect(transaction1.value).toEqual(-300)
  })

  it("saves the new transactions with today's default date", () => {
    const transaction = new Transaction(300);
    const today = new Date();
    const todayDay = today.getDate();
    let todayMonth = today.getMonth() + 1;
    const todayYear = today.getFullYear()
    const formattedTodayDate = `${(todayDay<10 ? '0' : '')}${todayDay}/${(todayMonth<10 ? '0' : '')}${todayMonth}/${todayYear}`
    expect(transaction.date).toEqual(formattedTodayDate)
  })
})
