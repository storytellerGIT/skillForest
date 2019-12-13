let app = getApp();

Page({
  data: {
    neworder:{
      orderId:"",
      userOpenId:"",
      want:"",
      my:"",
      description:"",
      createTime:"",
      contactQQ:"",
      contactWeChat:"",
      contactPhone:"",
      completeWith:"",
      status:1,
      hot: 0
    },

    arrayContact: ['微信', 'QQ', '手机号'],
    objectArray: [
      {
        id: 0,
        name: '微信'
      },
      {
        id: 1,
        name: 'QQ'
      },
      {
        id: 2,
        name: '手机号'
      }
    ],
    indexContact: 0,

    isSubmit: false,
    warn: "",
    wants:[""],
    array1:[0],
    wantString:"",
    array: [0],//默认显示一个
    gives: [""],//所有input的内容
    giveString:"",
    descriptions:"",
    contact:"",
    flagGive:0,
    flagWant:0
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      indexContact: e.detail.value
    })
  },
  
  //获取input的值
  getInputVal: function (e) {
    var nowIdx = e.currentTarget.dataset.idx;//获取当前索引
    var val = e.detail.value;//获取输入的值
    console.log(JSON.stringify(val))
    if(val!=""){
      this.data.flagGive = 1
    }
    if (val == "") {
      this.data.flagGive = 0
    }

    var oldVal = this.data.gives;
    oldVal[nowIdx] = val;//修改对应索引值的内容
    this.setData({
      gives: oldVal
    })
  },
  //添加input
  addInput: function () {
    var old = this.data.array;
    old.push("");//这里不管push什么，只要数组长度增加1就行
    this.data.flagGive = 0
    this.setData({
      array: old
    })
  },
  //删除input
  delInput: function (e) {
    var nowidx = e.currentTarget.dataset.idx;//当前索引
    var oldInputVal = this.data.gives;//所有的input值
    var oldarr = this.data.array;//循环内容
    if (oldarr.length > 1){
      oldarr.splice(nowidx, 1);    //删除当前索引的内容，这样就能删除view了
      oldInputVal.splice(nowidx, 1);//view删除了对应的input值也要删掉
    }
    if (oldarr.length < 1) {
      oldarr = [0]  //如果循环内容长度为0即删完了，必须要留一个默认的。这里oldarr只要是数组并且长度为1，里面的值随便是什么
    }
    this.setData({
      array: oldarr,
      gives: oldInputVal
    })
  },


  //获取input的值
  getInputVal1: function (e) {
    var nowIdx = e.currentTarget.dataset.idx;//获取当前索引
    var val = e.detail.value;//获取输入的值
    if (val != "") {
      this.data.flagWant = 1
    }
    if (val == "") {
      this.data.flagWant = 0
    }
    var oldVal = this.data.wants;
    oldVal[nowIdx] = val;//修改对应索引值的内容
    this.setData({
      wants: oldVal
    })
  },
  //添加input
  addInput1: function () {
    var old = this.data.array1;
    old.push("");//这里不管push什么，只要数组长度增加1就行
    this.data.flagWant = 0
    this.setData({
      array1: old
    })
  },
  //删除input
  delInput1: function (e) {
    var nowidx = e.currentTarget.dataset.idx;//当前索引
    var oldInputVal = this.data.wants;//所有的input值
    var oldarr = this.data.array1;//循环内容
    if (oldarr.length > 1) {
      oldarr.splice(nowidx, 1);    //删除当前索引的内容，这样就能删除view了
      oldInputVal.splice(nowidx, 1);//view删除了对应的input值也要删掉
    }
    if (oldarr.length < 1) {
      oldarr = [0]  //如果循环内容长度为0即删完了，必须要留一个默认的。这里oldarr只要是数组并且长度为1，里面的值随便是什么
    }
    this.setData({
      array1: oldarr,
      wants: oldInputVal
    })
  },



  formSubmit: function (e) {
    var that = this
    
    that.data.wantString = that.data.wants.join("_")
    that.data.neworder.want=that.data.wantString

    that.data.giveString = that.data.gives.join("_")
    that.data.neworder.my=that.data.giveString

    that.data.neworder.description=e.detail.value.descriptions
    
    if (that.data.indexContact == 0) {
        that.data.neworder.contactWeChat=e.detail.value.contact
    }
    if (that.data.indexContact == 1) {
      that.data.neworder.contactQQ=e.detail.value.contact
    }
    if (that.data.indexContact == 2) {
      that.data.neworder.contactPhone= e.detail.value.contact
    }

    
    for(var index in that.data.gives){
      console.log(JSON.stringify(index))
      if (that.data.gives[index].length==0){
        that.data.flagGive=0
        break
      }
    }

    for (var index in that.data.wants) {
      if (that.data.wants[index].length==0) {
        that.data.flagWant = 0
        break
      }
    }
    
    if(that.data.flagGive==0){
      that.data.flagGive =1
      wx.showToast({
        title: '可提供帮助类别不能有空类别',
        icon: 'none',
        duration: 2000
      })
    }
    else if (that.data.flagWant == 0) {
      that.data.flagWant =1
      wx.showToast({
        title: '想要得到的帮助类别不能有空类别',
        icon: 'none',
        duration: 2000
      })
    }
    else if (e.detail.value.descriptions==""){
      wx.showToast({
        title: '请输入互助的详细内容',
        icon: 'none',
        duration: 2000
      })
    }
    else if (e.detail.value.contact == "") {
      wx.showToast({
        title: '请输入您的联系方式',
        icon: 'none',
        duration: 2000
      })
    }
    else{
      wx.request({
        url: 'https://www.skillexchange.cn/se/order/addOrder',
        data: JSON.stringify(that.data.neworder),
        method: 'POST',
        header: {
          "Content-Type": "application/json"
        },
      })


      wx.showToast({
        title: '发布成功',
        icon: 'success',
        duration: 2000
      });
      setTimeout(function () {
        wx.switchTab({
          url: '/pages/tabHomeRecommend/homeRecommend',
        })
      }, 3000)

    }
    
  },
  formReset: function () {
    this.data.flagGive= 0,
    this.data.flagWant= 0
    console.log('form发生了reset事件')
  },

  onLoad: function (options) {
    var temp = 'neworder.userOpenId'
    var that = this
    wx.getStorage({
      key: 'id',
      success(res) {
        that.setData({
          [temp] : res.data
        })
      }
    })
  },
})
