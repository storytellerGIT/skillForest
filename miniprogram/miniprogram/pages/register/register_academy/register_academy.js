// miniprogram/pages/operation/operation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newuser: {
      academy: "",
      academyHide: true
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
  },

  input_academy_hide: function (e) {
    var temp = 'newuser.academyHide'
    this.setData({
      [temp]: e.detail.value
    })
  },

  input_academy: function (e) {
    var temp = 'newuser.academy'
    this.setData({
      [temp]: e.detail.value
    })
  },

  formSubmit: function (e) {
    var that = this;
    wx.setStorageSync('academy', that.data.newuser),
      console.log('同步保存成功'),
      wx.navigateTo({
        url: '../register_grade/register_grade'
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