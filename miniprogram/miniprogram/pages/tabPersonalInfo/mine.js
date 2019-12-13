//logs.js
var util = require('../../utils/util.js')
var app = getApp()
Page({
  data: {
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: ''
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    wx.request({
      url: 'https://www.skillexchange.cn/se/user/getMyDetail',
      data: { userid: wx.getStorageSync("id") },
      header: {
        'content-type': 'application/json'
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        console.log(res)
        that.setData({
          userInfo: res.data.UserInfo
        })
        wx.setStorageSync('userInfo', res.data.UserInfo)
      }
    })
  },
  tap1: function (e) {
    wx.navigateTo({
      url: '../mydata/mydata'
    })
  },
  tap2: function (e) {
    wx.navigateTo({
      url: '../records/records'
    })
  },
  tap3: function (e) {
    wx.navigateTo({
      url: '../integral/integral'
    })
  },

  rule: function(e) {
    wx.navigateTo({
      url: '/pages/rule/rule',
    })
  }
})