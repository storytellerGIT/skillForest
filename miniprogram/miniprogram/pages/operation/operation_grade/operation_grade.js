// miniprogram/pages/operation/operation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    academy: '',
    academyHide: '',
    credits: '-1',
    grade: '',
    gradeHide: '',
    iconUrl: '',
    major: '',
    majorHide: '',
    nickName: '',
    openid: '',
    registerTime: '',
    school: '',
    schoolHide: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    this.setData({
      grade: options.grade,
      openid: options.openid
    })
    var temp = wx.getStorageSync('gradeHide')
    this.setData({
      hide: temp
    })
  },

  input_grade_hide: function (e) {
    this.setData({
      gradeHide: e.detail.value
    })
  },

  formSubmit: function (e) {
    var that = this;
    var temp = e.detail.value;
    this.setData({
      grade: temp.grade
    })
    wx.setStorageSync('gradeHide', that.data.gradeHide)
    wx.request({
      url: 'https://www.skillexchange.cn/se/user/updateInfo',
      data: JSON.stringify(that.data),
      method: 'POST',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        var toastText = "操作成功";
        console.log(res.data);
        wx.showToast({
          title: toastText,
          duration: 3000
        })
        wx.navigateBack({
          url: '../../mydata/mydata',
        })
      },
      fail: function (res) {
        console.log("fail");
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})