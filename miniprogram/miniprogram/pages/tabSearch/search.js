Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputVal: "",//input框内值
    listarr: [],//创建数组
    SearchText: '取消',//按钮变动值
    keydown_number: 0,//检测input框内是否有内容
    input_value: "",//在搜索记录中点击的值
    hostarr: [],//热门搜索接收请求存储数组  
    name_focus: true//获取焦点
  },
  //取值input判断输入框内容修改按钮
  inputvalue: function (e) {
    this.setData({
      inputVal: e.detail.value, //将输入框中的值赋给inputVal
    })
    if (e.detail.cursor != 0) {
      this.setData({
        SearchText: "搜索",
        keydown_number: 1
      })
    } else {
      this.setData({
        SearchText: "取消",
        keydown_number: 0
      })
    }
  },
  //搜索方法
  search: function () {
    if (this.data.keydown_number == 1)  //输入框内有值
    {
      let This = this;
      let arr = this.data.listarr;
      //判断取值是手动输入还是点击赋值
      if (this.data.input_value == "") {  //取值是手动输入
        // 判断数组中是否已存在该输入值
        console.log(this.data.inputVal)
        let arrnum = arr.indexOf(this.data.inputVal);
        if (arrnum != -1) {
          // 如果存在，将该输入值从数组中删除并在首位重新插入
          arr.splice(arrnum, 1)
          arr.unshift(this.data.inputVal);
        }
        else {
          arr.unshift(this.data.inputVal);
        }
        console.log(this.data.inputVal)
        wx.navigateTo({
          url: '../searchResult/searchResult?data=' + this.data.inputVal
        })
      }
      else {  //取值是点击赋值
        let arr_num = arr.indexOf(this.data.input_value);
        if (arr_num != -1) {
          arr.splice(arr_num, 1)
          arr.unshift(this.data.input_value);
        } else {
          arr.unshift(this.data.input_value);
        }
        console.log(this.data.input_value)
        wx.navigateTo({
          url: '../searchResult/searchResult?data=' + this.data.input_value
        })
      }

      //存储搜索记录
      wx.setStorage({
        key: "list_arr",
        data: arr
      })


      //取出搜索记录
      wx.getStorage({
        key: 'list_arr',
        success: function (res) {
          This.setData({
            listarr: res.data
          })
        }
      })

      this.setData
        ({
          input_value: '',
        })


    }
    else //输入框内没有值
    {
      console.log("取消")
    }

  },
  //清除搜索记录
  delete_list: function () {
    //清除当前数据
    this.setData({
      listarr: []
    });
    //清除缓存数据
    wx.removeStorage({
      key: 'list_arr'
    })
  },

  //点击赋值到input框
  this_value: function (e) {
    this.setData({
      name_focus: true
    })
    let value = e.currentTarget.dataset.text;
    this.setData({
      input_value: value,
      SearchText: "搜索",
      keydown_number: 1
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    let This = this;
    //设置当前页标题
    wx.setNavigationBarTitle({
      title: '搜索'
    });
    //读取缓存历史搜索记录
    wx.getStorage({
      key: 'list_arr',
      success: function (res) {
        This.setData({
          listarr: res.data
        });
      }
    })
  },

})