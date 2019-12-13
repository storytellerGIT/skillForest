// miniprogram/pages/operation/operation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newuser: {
      school: "",
      schoolHide: true
    },
    arrayContact: ['北京邮电大学', '北京航空航天大学', '外交学院', '北京师范大学', '中国矿业大学', '中央财经大学'],
    objectArray: [
      {
        id: 0,
        name: '北京邮电大学'
      },
      {
        id: 1,
        name: '北京航空航天大学'
      },
      {
        id: 2,
        name: '外交学院'
      },
      {
        id: 3,
        name: '北京师范大学'
      },
      {
        id: 4,
        name: '中国矿业大学'
      },
      {
        id: 5,
        name: '中央财经大学'
      }
    ],
    indexContact: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
  },

  input_school_hide: function (e) {
    var temp = 'newuser.schoolHide'
    this.setData({
      [temp]: e.detail.value
    })
  },
  
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      indexContact: e.detail.value
    })
  },

  formSubmit: function (e) {
    var that = this;
    that.data.newuser.school = that.data.arrayContact[that.data.indexContact]
    wx.setStorageSync('school', that.data.newuser),
    console.log('同步保存成功'),
    wx.navigateTo({
      url: '../register_academy/register_academy'
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