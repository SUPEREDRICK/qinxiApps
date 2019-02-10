// pages/myAuction/myAuction.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    specialChar:'>',
    items:[
      {
        id:'1',
        prdname:'冰种云南飘翠手镯'
      },
      {
        id: '2',
        prdname: '糯种和田玉无事牌'
      }
    ],
    deposit:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var openid = wx.getStorageSync("user").openid;
    wx.request({
      url: 'http://www.yucuifu.com/tomcat/supered/qryDeposit',
      data: {
        openid:openid
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'post',
      dataType: 'text',
      success:function(res) {
        var deposit = JSON.parse(res.data)[0].deposit;
        that.setData({
          deposit: deposit
        });
      },
      fail: function (res) {},
      complete:function() {}
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
  /* 点击跳转到支付页面 */
  toPayDeposit:function() {
    wx.navigateTo({
      url: '/pages/payDeposit/payDeposit'
    });
  }
})