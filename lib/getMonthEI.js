const rp = require('request-promise')

// period: String
// 统计周期，以每月 15 号为分界，例如 2018_08_15
module.exports = async ({ period }) => {
  let res = await rp.post({
    uri: 'http://icp-stat-apis.xiaowhite.com/icp',
    body: {
      uri: 'event.app.func.ei_stat.period_show.ei_user_stat_list',
      data: { period }
    },
    json: true
  })

  return res.data
}