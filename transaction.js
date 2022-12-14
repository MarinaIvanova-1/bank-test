class Transaction {
  constructor(value, date) {
    this.value = value
    this.date = date
    // If no date is given, today's date wil be saved by default
    if (date === undefined) {
      const today = new Date();
      const todayDay = today.getDate();
      const todayMonth = today.getMonth() + 1;
      const todayYear = today.getFullYear()
      const formattedTodayDate = `${(todayDay<10 ? '0' : '')}${todayDay}/${(todayMonth<10 ? '0' : '')}${todayMonth}/${todayYear}`
      this.date = formattedTodayDate
    }
  }

  // This method allows to change the transaction to a debit one
  isDebit() {
    this.value = Math.abs(this.value) * (-1)
  }
}

module.exports = Transaction