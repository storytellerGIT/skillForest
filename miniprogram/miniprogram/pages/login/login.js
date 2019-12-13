// miniprogram/pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newuser:{
        openid: "",
        iconUrl: "",
        nickName: "",
        school: "",
        schoolHide: false,
        academy: "",
        academyHide: false,
        grade: "",
        gradeHide: false,
        major: "",
        majorHide: false,
        registerTime: null,
        credits: 100
      },
    grades: ['大一','大二','大三','大四']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var temp = 'newuser.openid'
    that.setData({
      [temp] : wx.getStorageSync('id')
    })
    
    var name = 'newuser.nickName'
    var url = 'newuser.iconUrl'
    wx.getUserInfo({
      success: function(res) {
        console.log("dfadfas")
        console.log(res)
        that.setData({
          [name]: JSON.parse(res.rawData).nickName,
          [url]: JSON.parse(res.rawData).avatarUrl
        })
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

  },

  onTap: function() {
    var that = this
    wx.request({
      url: 'https://www.skillexchange.cn/se/user/register',
      data: that.data.newuser,
      method: 'POST',
      success: function() {
        wx.request({
          url: 'https://www.skillexchange.cn/se/message/registerMessage',
          data: {
            receiver: that.data.newuser.openid
          },
          method: 'GET'
        })
      }
    })

    wx.switchTab({
      url: '/pages/tabSend/send',
    })
  },

  input_school: function(e) {
    var temp = 'newuser.school'
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

  input_major: function (e) {
    var temp = 'newuser.major'
    this.setData({
      [temp]: e.detail.value
    })
  },

  input_school_hide: function(e) {
    var temp = 'newuser.schoolHide'
    this.setData({
      [temp]: e.detail.value
    })
  },

  input_academy_hide: function (e) {
    var temp = 'newuser.academyHide'
    this.setData({
      [temp]: e.detail.value
    })
  },

  input_grade_hide: function (e) {
    var temp = 'newuser.gradeHide'
    this.setData({
      [temp]: e.detail.value
    })
  },

  input_major_hide: function (e) {
    var temp = 'newuser.majorHide'
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
  }
})