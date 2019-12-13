// miniprogram/pages/operation/operation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    reportId: '',
    reporterId: '',
    opposite:'',
    orderId: '',
    reson:'',
    reporterContact:'',
    oppositeContact:'',
    reporterTime:'',
    status:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    this.setData({
      reporterId: options.reporterId,
      opposite: options.opposite,
      orderId: options.orderId
    })
  },

  reporterContact: function (e) {
    this.setData({
      reporterContact: e.detail.value
    })
  },

  oppositeContact: function (e) {
    this.setData({
      oppositeContact: e.detail.value
    })
  },

  reason: function (e) {
    this.setData({
      reason: e.detail.value
    })
  },

  formSubmit: function (e) {
    var that = this;
    wx.request({
      url: 'https://www.skillexchange.cn/demo/report/newReport',
      data: JSON.stringify(that.data),
      method: 'POST',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        var toastText = "举报成功";
        console.log(res.data);
        wx.showToast({
          title: toastText,
          duration: 3000
        })
        wx.navigateBack({
          delta: 1
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