//logs.js
var util = require('../../utils/util.js')
var app = getApp()
Page({
  data: {
    userInfo: {},
    nickName: '',
    school: '',
    academy: '',
    grade: '',
    major: '',
    credits: ''
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this

    that.setData({
      userInfo: wx.getStorageSync('userInfo')
    })

  },

  jumpSchool: function(){
      wx.navigateTo({
        url: '../operation/operation_school/operation_school?school='+this.data.school+'&openid='+this.data.openid,
      })
  },
  jumpAcademy: function(){
    wx.navigateTo({
      url: '../operation/operation_academy/operation_academy?academy=' + this.data.academy + '&openid='+this.data.openid,
    })
  },
  jumpGrade: function () {
    wx.navigateTo({
      url: '../operation/operation_grade/operation_grade?grade=' + this.data.grade + '&openid=' + this.data.openid,
    })
  },
  jumpMajor: function () {
    wx.navigateTo({
      url: '../operation/operation_major/operation_major?major=' + this.data.major + '&openid=' + this.data.openid,
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this
    var id = wx.getStorageSync('id')
    wx.request({
      url: 'https://www.skillexchange.cn/se/user/getInfo',
      data: {
        userid: id
      },
      method: 'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data);
        that.setData({
          school: res.data.school,
          academy: res.data.academy,
          grade: res.data.grade,
          major: res.data.major,
          credits: res.data.credits,
          openid: id
        })
        wx.setStorageSync('schoolHide', res.data.school_hide)
        wx.setStorageSync('academyHide', res.data.academy_hide)
        wx.setStorageSync('gradeHide', res.data.grade_hide)
        wx.setStorageSync('majorHide', res.data.major_hide)
      },
      fail: function (res) {
        console.log("fail");
      }
    })
  },
})