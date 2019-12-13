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
      academy: options.academy,
      openid: options.openid
    })
  },

  input_academy_hide: function (e) {
    this.setData({
      academyHide: e.detail.value
    })
  },

  formSubmit: function (e) {
    var that = this;
    var temp = e.detail.value;
    this.setData({
      academy: temp.academy
    })
    wx.setStorageSync('academyHide', that.data.academyHide)
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

    var temp = wx.getStorageSync('academyHide')
    this.setData({
      hide: temp
    })
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