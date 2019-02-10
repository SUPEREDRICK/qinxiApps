//app.js
App({

  onLaunch: function () {
    var that = this
    var user = wx.getStorageSync('user') || {};
    var userInfo = wx.getStorageSync('userInfo') || {};
    if ((!user.openid || (user.expires_in || Date.now()) < (Date.now() + 600)) && (!userInfo.nickName)) {
      wx.login({
        success: function (res) {
          if (res.code) {
            console.log('---------->' + res.code);
            wx.getUserInfo({
              success: function (res) {
                var objz = {};
                objz.avatarUrl = res.userInfo.avatarUrl;
                objz.nickName = res.userInfo.nickName;
                console.log(objz);
                wx.setStorageSync('userInfo', objz);//存储userInfo
              }
            });
            var d = that.globalData;//这里存储了appid、secret、token串  
            console.log('******** appid' + d.appid);
            console.log('******** 随机code' + res.code);
            var l = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + d.appid + '&secret=' + d.secret + '&js_code=' + res.code + '&grant_type=authorization_code';
            wx.request({
              url: l,
              dataType:'text',
              data: {},
              method: 'get', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT  
              header: {
                "Content-Type": "application/x-www-form-urlencoded"
              }, // 设置请求的 header  
              success: function (res) {
                console.log('index.....1');
                var obj = {};
                // var iii = JSON.stringify(res.data);
                // var jjj = res.data;
                console.log(res.data);
                var openid = JSON.parse(res.data).openid;
                // console.log('>>>>>>>>' + jjj);
                obj.openid = openid;
                // console.log(res.data.expires_in);
                // obj.expires_in = Date.now() + res.data.expires_in;
                //console.log(obj);
                wx.setStorageSync('user', obj);//存储openid
              }
            });
          } else {
            console.log('获取用户登录态失败！' + res.errMsg)
          }
        }
      });

     
    }
    // 展示本地存储能力
    // var logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    // // 登录
    // wx.login({
    //   success: res => {
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //   }
    // })
    // // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           // 可以将 res 发送给后台解码出 unionId
    //           this.globalData.userInfo = res.userInfo

    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res)
    //           }
    //         }
    //       })
    //     }
    //   }
    // })

    /* openid，用户名, 头像入库 */
    
  },
  globalData: {
    userInfo: null,
    appid: 'wxba3b9f70be5dfecd',
    secret: 'd752f5a13d10f27cee18b13e46ca5878'
  }
})