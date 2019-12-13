// miniprogram/pages/operation/operation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newuser: {
      grade: "",
      gradeHide: true
    },
    grades: ['大一', '大二', '大三', '大四']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
  },

  input_grade_hide: function (e) {
    var temp = 'newuser.gradeHide'
    this.setData({
      [temp]: e.detail.value
    })
  },

  input_grade: function (e) {
    var temp = 'newuser.grade'
    this.setData({
      [temp]: e.detail.value
    })
    console.log(temp)
  },

  formSubmit: function (e) {
    var that = this;
    wx.setStorageSync('grade', that.data.newuser),
      console.log('同步保存成功'),
      wx.navigateTo({
        url: '../register_major/register_major'
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