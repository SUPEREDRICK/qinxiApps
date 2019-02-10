// pages/MyCoupon/MyCoupon.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    coupon:[
      // {
      //   couponid:'c1',
      //   pridid:'prd201901190952',
      //   coupontype:'discount',
      //   couponname:'全场代金券',
      //   cost:'200'
      // }
    ]
  },

  /**
   * 生命周期函数--监听页面加载-加载优惠券
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'http://www.yucuifu.com/tomcat/supered/qryCoupon',
      // data:{

      // },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'get',
      dataType: 'text',
      success:function(res) {
        var coupon = JSON.parse(res.data);
        that.setData({
          coupon:coupon
        });
      },
      fail:function(res) {},
      complete:function(res) {}
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

  /* 优惠券列表页面 */
  toCouponDtl:function() {
    wx.navigateTo({
      url: '/pages/coupondtl/coupondtl',
    })
  }
})