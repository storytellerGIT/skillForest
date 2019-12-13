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
    var that = this
    wx.request  //将搜索结果发送给服务器
      ({
        url: 'https://www.skillexchange.cn/se/order/searchOrder',
        data:
        {
          label: options.data
        },
        method: 'GET',
        success: function (res) {
          console.log(res.data)
          that.setData({ post_key: res.data.orderList })
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
    var that = this
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
    var that = this
    wx.setStorage({
      key: 'homeToDetail',
      data: that.data.post_key[e.currentTarget.dataset.id],
      success: function () {
        wx.navigateTo({
          url: '/pages/detail/detail',
        })
      }
    })
  }
})