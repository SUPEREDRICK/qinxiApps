// pages/shopdtl/shopdtl.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      "http://i1.fuimg.com/650899/1bbbc93070dc7b9e.png"
    ],
    indicatorDots: true,  //是否显示面板指示点
    autoplay: true,      //是否自动切换
    interval: 2000,       //自动切换时间间隔
    duration: 1000,       //滑动动画时长
    inputShowed: false,
    inputVal: "",

    prdid:'',
    prdname:'',
    size:0,
    prddes:'',
    price:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var prdid = options.id;
    // var prdid = JSON.parse(options.id);
    wx.request({
      method: 'post',
      dataType: 'text',
      url: 'http://www.yucuifu.com/tomcat/supered/qryPrdDtl',
      data: {
        prdid: prdid
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        var data = JSON.parse(res.data)[0];
        console.log('我在这里:' + data);
        that.setData({
          prdid: data.prdid,
          prdname: data.prdname,
          size: data.size,
          prddes: data.prddes,
          price: data.price
        });
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