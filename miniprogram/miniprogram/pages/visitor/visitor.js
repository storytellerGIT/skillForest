// miniprogram/pages/tabHomeRecommend/homeRecommend.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    post_key: [

    ],
    imgUrls: [
      '/images/lunbo1.jpg',
      '/images/lunbo2.jpg',
      '/images/lunbo3.jpg'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 800,
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
    wx.request({
      url: 'https://www.skillexchange.cn/se/order/getOrderListVisitor',
      data: {},
      success: function (res) {
        console.log(res)
        that.setData({ post_key: res.data.orderList })
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

  onTap: function (e) {
    wx.showToast({
      title: '如想查看更多信息请注册哦',
      icon: 'none',
      duration: 2000
    })
  }
})