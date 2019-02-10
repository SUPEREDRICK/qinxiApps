// pages/auctionDtl/auctionDtl.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      "http://i2.tiimg.com/650899/092deafe2e513bc3.png",
      "http://i2.tiimg.com/650899/387e02e04fba24d2.png",
      "http://i2.tiimg.com/650899/1cabe4c0157f8e1a.png",
      "http://i2.tiimg.com/650899/9e6c74124756e35b.png"
    ],
    indicatorDots: true,  //是否显示面板指示点
    autoplay: true,      //是否自动切换
    interval: 2000,       //自动切换时间间隔
    duration: 1000,       //滑动动画时长
    inputShowed: false,
    inputVal: "",
    willAuctions:['1', '2', '3', '4'],
    autionInfo:[],
    onAuctionInfo:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var auid = options.auid;
    wx.request({
      method:'post',
      dataType:'text',
      data:{
        auid: auid
      },
      url: 'http://www.yucuifu.com/tomcat/supered/qryAuctionDtl',
      header:{
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success:function(res) {
        console.log('--------->----->' + res.data);
        var data = JSON.parse(res.data)[0];
        that.setData({
          autionInfo:data
        });
      },
      fail: function (res) {

      },
      complete: function (res) {

      }
    });

    auid = 'au201901192114';
    wx.request({
      method: 'post',
      dataType: 'text',
      data: {
        auid: auid
      },
      url: 'http://www.yucuifu.com/tomcat/supered/qryUserOnAuction',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        var onAuctionInfo = JSON.parse(res.data);
        that.setData({
          onAuctionInfo: onAuctionInfo
        });
      },
      fail: function (res) {

      },
      complete: function (res) {

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

  }
})