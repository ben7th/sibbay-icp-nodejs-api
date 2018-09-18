const icpAPI = require('./index')

const getYearEI = async ({ year }) => {
  let periods = [...Array(12).keys()].map(x => {
    let m = x + 1
    m = m >= 10 ? `${m}` : `0${m}`
    return `${year}_${m}_15`
  })

  let re = {}
  for (let period of periods) {
    let data = await icpAPI.getMonthEI({ period })
    re[period] = data
  }

  return re
}

const getMonthsEI = async ({ year, fromMonth, toMonth }) => {
  let periods = []
  for (let m = fromMonth; m <= toMonth; m++) {
    let m1 = m >= 10 ? `${m}` : `0${m}`
    periods.push(`${year}_${m1}_15`)
  }

  let re = {}
  for (let period of periods) {
    let data = await icpAPI.getMonthEI({ period })
    re[period] = data
  }

  return re
}

const test = async () => {  
  // let data = await getYearEI({ year: 2018 })
  let data = await getMonthsEI({ year: 2018, fromMonth: 5, toMonth: 8})
  console.log(data)
}

test()