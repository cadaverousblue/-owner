//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  test: function (cb){
    console.log(cb)
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
    fetch("http://192.168.1.6:8000/api/owner/index.jthml").then(function(response){
 response.json().then(function(data){
// console.log(data)
cb(data)
})
      
    })

    
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
// setTimeout(function(){
// wx.navigateTo({
// url: '../main/mian'

// })
// },3000)
    

    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }

  
})
