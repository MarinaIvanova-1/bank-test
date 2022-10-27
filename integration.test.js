const Transaction = require('./transaction')
const Account = require('./account')
const Statement = require('./statement')
const Bank = require('./bank')

function date() {
  const today = new Date();
  const todayDay = today.getDate();
  const todayMonth = today.getMonth() + 1;
  const todayYear = today.getFullYear()
  return formattedTodayDate = `${(todayDay<10 ? '0' : '')}${todayDay}/${(todayMonth<10 ? '0' : '')}${todayMonth}/${todayYear}`
}

describe('integration', () => {
  it('produces the bank statement', () => {
    const transaction1 = new Transaction(1000);
    const transaction2 = new Transaction(2000); 
    const transaction3 = new Transaction(500); 
    transaction3.isDebit();
    const account = new Account();
    account.addTransaction(transaction1);
    account.addTransaction(transaction2);
    account.addTransaction(transaction3);
    const statement = new Statement(account);
    let stringToCompare = `date || credit || debit || balance\n${date()} || || 500.00 || 2500.00\n${date()} || 2000.00 || || 3000.00\n${date()} || 1000.00 || || 1000.00`

    expect(statement.printStatement()).toEqual(stringToCompare)
  })

  it('user can interact with the program through the bank class', () => {
    const bank = new Bank()
    bank.deposit(1000)
    bank.withdraw(500)
    let stringToCompare = `date || credit || debit || balance\n${date()} || || 500.00 || 500.00\n${date()} || 1000.00 || || 1000.00`
    expect(bank.seeStatement()).toEqual(stringToCompare)
  })
})