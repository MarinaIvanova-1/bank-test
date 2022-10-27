const Bank = require('./bank')

function date() {
  const today = new Date();
  const todayDay = today.getDate();
  const todayMonth = today.getMonth() + 1;
  const todayYear = today.getFullYear()
  return formattedTodayDate = `${(todayDay<10 ? '0' : '')}${todayDay}/${(todayMonth<10 ? '0' : '')}${todayMonth}/${todayYear}`
}

describe('Bank', () => {
  it('allows the user to interact with the program through the bank claass', () => {
    const bank = new Bank()
    bank.deposit(1000)
    bank.withdraw(500)
    let stringToCompare = `date || credit || debit || balance\n${date()} || || 500.00 || 500.00\n${date()} || 1000.00 || || 1000.00`
    expect(bank.seeStatement()).toEqual(stringToCompare)
  })
})