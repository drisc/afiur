'use strict'

function afiur () {
  const origin = new Date('1994-11-03')
  const current = new Date
  const trueDays = Math.round(Math.abs(origin - current) / 8.64e7);
  
  const decimalStandard = (trueDays / 400).toFixed(4)

  const y = parseInt(decimalStandard.substr(0, 2))
  const m = parseInt(decimalStandard.substr(3, 1)) + 1
  const d = parseInt(decimalStandard.substr(4) / 25 + 1)
  const date = `${y}-${`${m}`.padStart(2, '0')}-${`${d}`.padStart(2, '0')}`

  console.log(date)
  console.log(decimalStandard)

  return date
}