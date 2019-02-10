// pages/auction/auction.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'授权登陆',
    login:'',
    indexMenu:[
      {
        id:'m1',
        url:'toOrderList',
        picaddr:'http://i1.fuimg.com/650899/124c8815f2359c20.png',
        menuname:'我的交易'
      },
      {
        id: 'm2',
        url: 'toMyAuction',
        // picaddr: 'http://i1.fuimg.com/650899/0035620fd0d31e75.png',
        picaddr: 'http://i2.tiimg.com/650899/e26add91b53a68f9.png',
        menuname: '我的团购'
      },
      {
        id: 'm3',
        url: 'toMyCoupon',
        picaddr: 'http://i1.fuimg.com/650899/1157dd01ba5b6461.png',
        menuname: '我的代金券'
      },
      {
        id: 'm4',
        url: 'toFinance',
        picaddr: 'http://i1.fuimg.com/650899/cc5c7f80b293f660.png',
        menuname: '珠宝活动'
      },
      {
        id: 'm5',
        url: 'toShoppingCart',
        picaddr: 'http://i1.fuimg.com/650899/e293cfe68d8a5bfd.png',
        menuname: '购物车'
      },
      {
        id: 'm6',
        url: 'toMyCollection',
        picaddr: 'http://i1.fuimg.com/650899/47ae96f371038217.png',
        menuname: '我的收藏'
      }
    ],
    userlogined:false,
    userunlogined:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /* 获取全局数据appid */
    var that = this

    var openid = wx.getStorageSync('user').openid;

    wx.request({
      url: 'http://www.yucuifu.com/tomcat/supered/qryLoginInfo',
      data: {
        openid: openid
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'post',
      dataType: 'text',
      success: function (res) {
        var username = JSON.parse(res.data)[0].username;
        if (username != null) {
          that.setData({
            userlogined: true,
            userunlogined:false,
            username: username,
            login:username
          });
        } else {
          that.setData({
            userunlogined:true,
            userunlogined: false,
            username: '授权登陆'
          });
        }
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
  /**
   * 点击跳转到我的交易页面
   */
  toOrderList:function() {
    console.log('测试跳转');
    //switchTab专门跳转到Tab栏的路径
    //navigateTo专门跳转到内部页面的
    wx.navigateTo({
      url: '/pages/DeliveryOrder/DeliveryOrder'
    })
  },

  /**
   * 点击跳转到我的拍卖页面
   */
  toMyAuction:function() {
    wx.navigateTo({
      url: '/pages/myAuction/myAuction',
    })
  },

  /**
   * 点击跳转到我的代金券
   */
  toMyCoupon:function() {
    wx.navigateTo({
      url: '/pages/MyCoupon/MyCoupon',
    })
  },

  /**
   * 点击跳转到我的收藏页面
   */
  toMyCollection:function() {
    // wx.showToast({
    //   title: '敬请期待',
    //   icon: 'success',
    //   duration: 2000
    // });
    // return;
    wx.navigateTo({
      url: '/pages/collection/collection',
    })
  },

  /**
   * 修改个人信息
   */
  editData:function() {
    wx.navigateTo({
      url: '/pages/editInfo/editInfo',
    })
  },

  /* 点击跳转到珠宝金融 -未开放 */
  toFinance:function() {
    wx.showToast({
      title: '敬请期待',
      icon: 'succes',
      duration: 2000,
      mask: true
    })
  },

  /* 点击跳转到购物车 */
  toShoppingCart:function() {
    wx.navigateTo({
      url: '/pages/shopcart/shopcart'
    })
  },
  /* 授权获取登陆信息 */
  onGotUserInfo: function (e) {
    var that = this
    var nickname = e.detail.userInfo.nickName;
    var avatarUrl = e.detail.userInfo.avatarUrl;
    var openid = wx.getStorageSync('user').openid;
    var login = that.data.login;
    if (login != '') {
      return;
    }
    wx.request({
      url: 'http://www.yucuifu.com/tomcat/insertLoginData',
      data:{
        openid: openid,
        nickname:nickname,
        avatarurl:avatarUrl
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'post',
      dataType: 'text',
      success:function(res) {
        console.log(res.data);
      }
    })
  }
})