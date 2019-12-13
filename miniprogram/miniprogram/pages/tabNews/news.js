// miniprogram/pages/tabNews/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    post_key: [

    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    var that = this
    var userid = wx.getStorageSync("id")
    wx.request({
      url: 'https://www.skillexchange.cn/se/message/messageList',
      data: {"userid": userid},
      header: {
        'content-type': 'application/json'
      },
      method: 'GET',
      success: function (res) {
        that.setData({
          post_key: res.data.MessageList
        })
      }
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

  },

  ontap: function(e) {
    var that = this
    wx.setStorage({
      key: 'messageToDetail',
      data: that.data.post_key[e.currentTarget.dataset.id],
    })

    wx.navigateTo({
      url: '/pages/messageDetail/messageDetail',
    })
  }
})