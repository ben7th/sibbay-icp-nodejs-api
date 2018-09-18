const icpAPI = require('./index')

const test = () => {
  console.log('发起请求')
  
  icpAPI.getMonthEI({ period: '2018_08_15' })
    .then(data => {
      console.log(data)
    })
}

test()