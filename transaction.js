class Transaction {
  constructor(value, date) {
    this.value = value
    this.date = date
    if (date === undefined) {
      const today = new Date();
      const todayDay = today.getDate();
      const todayMonth = today.getMonth() + 1;
      const todayYear = today.getFullYear()
      const formattedTodayDate = `${(todayDay<10 ? '0' : '')}${todayDay}/${(todayMonth<10 ? '0' : '')}${todayMonth}/${todayYear}`
      this.date = formattedTodayDate
    }
  }

  isDebit() {
    this.value = this.value * (-1)
  }

  setDate(newDate) {
    this.date = newDate
  }
}

module.exports = Transaction