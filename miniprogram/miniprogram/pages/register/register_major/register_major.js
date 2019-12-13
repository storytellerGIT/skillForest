// miniprogram/pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newuser: {
      openid: "",
      iconUrl: "",
      nickName: "",
      school: "",
      schoolHide: true,
      academy: "",
      academyHide: true,
      grade: "",
      gradeHide: true,
      major: "",
      majorHide: true,
      registerTime: null,
      credits: 100
    },
    grades: ['大一', '大二', '大三', '大四']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var temp = 'newuser.openid'
    var schoolL = 'newuser.school'
    var schoolHideL = 'newuser.schoolHide'
    var academyL = 'newuser.academy'
    var academyHideL = 'newuser.academyHide'
    var gradeL = 'newuser.grade'
    var gradeHideL = 'newuser.gradeHide'
    that.setData({
      [temp]: wx.getStorageSync('id'),
      [schoolL]: wx.getStorageSync('school').school,
      [schoolHideL]: wx.getStorageSync('school').schoolHide,
      [academyL]: wx.getStorageSync('academy').academy,
      [academyHideL]: wx.getStorageSync('academy').academyHide,
      [gradeL]: wx.getStorageSync('grade').grade,
      [gradeHideL]: wx.getStorageSync('grade').gradeHide,
    })
    var name = 'newuser.nickName'
    var url = 'newuser.iconUrl'
    wx.getUserInfo({
      success: function (res) {
        console.log(that.data.newuser)
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

  onTap: function () {
    var that = this
    wx.request({
      url: 'https://www.skillexchange.cn/se/user/register',
      data: that.data.newuser,
      method: 'POST',
      success: function () {
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

  input_major: function (e) {
    var temp = 'newuser.major'
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
})