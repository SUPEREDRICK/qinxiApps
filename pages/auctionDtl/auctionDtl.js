// pages/auctionDtl/auctionDtl.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      "/pages/images/sw1.png",
      "/pages/images/sw2.png",
      "/pages/images/sw3.png",
      "/pages/images/sw4.png"
    ],
    indicatorDots: true,  //是否显示面板指示点
    autoplay: true,      //是否自动切换
    interval: 2000,       //自动切换时间间隔
    duration: 1000,       //滑动动画时长
    inputShowed: false,
    inputVal: "",

    willAuctions: [
      {
        id:'index1',
        prdtype:'选项'
      },
      {
        id: 'index1',
        prdtype: '选项'
      },
      {
        id: 'index1',
        prdtype: '选项'
      },
      {
        id: 'index1',
        prdtype: '选项'
      },
      {
        id: 'index1',
        prdtype: '选项'
      },
      {
        id: 'index1',
        prdtype: '选项'
      }
    ]
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

  }
})