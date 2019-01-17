// pages/auction/auction.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'尊贵姓名'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
  }
})