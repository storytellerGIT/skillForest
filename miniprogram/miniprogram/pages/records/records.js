//logs.js
var util = require('../../utils/util.js')
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    post_key: [

    ],
    id:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id : wx.getStorageSync('id')
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
    var id = wx.getStorageSync('id')
    wx.request({
      url: 'https://www.skillexchange.cn/se/order/getUserOrder',
      data: {
        userid: id
      },
      header: {
        'content-type': 'application/json'
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        console.log(res);
        that.setData({
          post_key: res.data.orderList,
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

  onTapComplete:function(e) {
    var that = this
    var orderId = e.target.dataset.orderid
    wx.request({
      url: 'https://www.skillexchange.cn/se/order/finishOrder',
      data: {
        orderid: orderId
      },
      header: {
        'content-type': 'application/json'
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        console.log(res);
        that.onShow();
      }
    })
  },

  onTapReject: function (e) {
    var that = this
    var orderId = e.target.dataset.orderid
    wx.request({
      url: 'https://www.skillexchange.cn/se/order/notInterestOrder',
      data: {
        orderid: orderId
      },
      header: {
        'content-type': 'application/json'
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        console.log(res);
        that.onShow();
      }
    })
  },

  onTapReport: function(e) {
    var that = this
    var index = e.target.dataset.id;
    var useropenId = e.target.dataset.useropenid
    var orderId = e.target.dataset.orderid
    wx.navigateTo({
      url: '/pages/operation/operation_report/operation_report?reporterId=' + that.data.id + '&opposite=' + useropenId + '&orderId=' + orderId,
    })
  }
})