'use strict'

function afiur () {
  //const origin = Date.UTC(1994,10,3)
  const current = new Date().getTime()
  const trueDays = ((current - origin) / 8.64e7).toFixed(0)

  const decimalStandard = (trueDays / 400).toFixed(4)

  const y = parseInt(decimalStandard.substr(0, 2))
  const m = parseInt(decimalStandard.substr(3, 1)) + 1
  const d = parseInt(decimalStandard.substr(4) / 25 + 1)
  const date = `${y}-${`${m}`.padStart(2, '0')}-${`${d}`.padStart(2, '0')}`

  console.log(origin)
  console.log(current)
  console.log(date)
  console.log(decimalStandard)
  console.log(trueDays)

  return date
}
