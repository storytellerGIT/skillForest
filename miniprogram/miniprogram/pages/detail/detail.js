// miniprogram/pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    interestMessage:{
      messageid : "",
      receiver : "",
      sender : "",
      title : "",
      sendTime : "",
      content : "",
      isLike: false,
      state: false,
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.getStorage({
      key: 'homeToDetail',
      success: function(res) {
        var util = require('../../utils/util.js')
        console.log(util.formatTime(new Date(res.data.createTime)))
        res.data.createTime = util.formatTime(new Date(res.data.createTime))
        that.setData(res.data)
      },
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

  },

  ontap:function() {
    wx.navigateTo({
      url: '/pages/publisherInfo/publisherInfo',
    })
  },

  interest: function () {
    var that = this
    var temp = 'interestMessage.sender'
    var orderD = wx.getStorageSync('homeToDetail').orderId
    var userD = wx.getStorageSync('id')
    that.setData({
      state: true,
      [temp]: wx.getStorageSync("id")
    })
    var temp = 'interestMessage.receiver'
    var object = wx.getStorageSync('homeToDetail')

    that.setData({
      [temp]: object.openid
    })
    wx.request({
      url: 'https://www.skillexchange.cn/se/message/addMessage',
      data: that.data.interestMessage,
      method: 'POST',
      success(res){
        if (res.data.success == true)
        {
          wx.request({
            url: 'https://www.skillexchange.cn/se/order/interestOrder',
            data: {
              orderid: orderD,
              userid: userD
            },
            method: 'GET',
            success: function (res){
              console.log(orderD);
              console.log(userD);
            }
          });
          wx.showToast({
            title: '发送成功',
            icon: 'success',
            duration: 2000
          });
        }
        else
        {
          wx.showToast({
            title: '发送失败，请重试',
            icon: 'none',
            duration: 2000
          });
        }
      }
    })
  }
})