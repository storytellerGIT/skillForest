// miniprogram/pages/operation/operation.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.login({
      success(res) {
        if (res.code) {
          wx.request({
            url: 'https://www.skillexchange.cn/se/user/login',
            data: {
              code: res.code
            },
            header: {
              'content-type': 'application/json'
            },
            method: 'GET',
            dataType: 'json',
            responseType: 'text',
            success: function (res) {
              wx.setStorage({
                key: "id",
                data: res.data.id
              })

              wx.request({
                url: 'https://www.skillexchange.cn/se/user/checkUser',
                data: {
                  userid: res.data.id
                },
                header: {
                  'content-type': 'application/json'
                },
                method: 'GET',
                dataType: 'json',
                responseType: 'text',
                success: function (res) {
                  console.log(res.data.checkUser)
                  if (res.data.checkUser == true) {
                    wx.switchTab({
                      url: '/pages/tabHomeRecommend/homeRecommend',
                    })
                  }
                }
              })


            },
            fail: function (res) {
              console.log("fail")
            },
            complete: function (res) {
              console.log()
            },
          })
        }
        else {

        }
      }
    })
  },

  formSubmit: function (e) {
    wx.getUserInfo({
      success:function() {
        var that = this
        wx.login({
          success(res) {
            if (res.code) {
              wx.request({
                url: 'https://www.skillexchange.cn/se/user/login',
                data: {
                  code: res.code
                },
                header: {
                  'content-type': 'application/json'
                },
                method: 'GET',
                dataType: 'json',
                responseType: 'text',
                success: function (res) {
                  wx.setStorage({
                    key: "id",
                    data: res.data.id
                  })

                  wx.request({
                    url: 'https://www.skillexchange.cn/se/user/checkUser',
                    data: {
                      userid: res.data.id
                    },
                    header: {
                      'content-type': 'application/json'
                    },
                    method: 'GET',
                    dataType: 'json',
                    responseType: 'text',
                    success: function (res) {
                      console.log(res.data.checkUser)
                      if (res.data.checkUser == true) {
                        wx.switchTab({
                          url: '/pages/tabHomeRecommend/homeRecommend',
                        })
                      }
                      else
                      {
                        wx.navigateTo({
                          url: '/pages/register/register_tips/register_tips',
                        })
                      }
                    }
                  })


                },
                fail: function (res) {
                  console.log("fail")
                },
                complete: function (res) {
                  console.log()
                },
              })
            }
            else {

            }
          }
        })

        
      }
    })
  },

  visitor: function() {
    wx.navigateTo({
      url: '/pages/visitor/visitor',
    })
  },

  rule: function (e) {
    wx.navigateTo({
      url: '/pages/rule/rule',
    })
  },

  introduction: function() {
    wx.navigateTo({
      url: '/pages/introduction/introduction',
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