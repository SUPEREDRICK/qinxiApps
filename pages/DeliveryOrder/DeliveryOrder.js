// pages/DeliveryOrder/DeliveryOrder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    simbills:[
      {
        id:'111',
        prdname:'产品名称1',
        prdstatue:'订单送达',
        createtime:'2019-02-02'
      },
      {
        id: '2',
        prdname: '产品名称2',
        prdstatue: '待发货',
        createtime: '2019-02-02'
      },
      {
        id: '3',
        prdname: '产品名称1',
        prdstatue: '订单送达',
        createtime: '2019-02-02'
      },
      {
        id: '4',
        prdname: '产品名称2',
        prdstatue: '待发货',
        createtime: '2019-02-02'
      }
    ],
    briefOrder:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var openid = 'test1';
    wx.request({
      method: 'post',
      dataType: 'text',
      url: 'http://www.yucuifu.com/tomcat/supered/brieforder',
      data: {
        openid: JSON.stringify(openid)
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        console.log('返回成功，请检视数据');
        var data = JSON.parse(res.data);
        console.log(data);
        var index = 0;
        data.forEach(function() {
          if (data[index].orderState == 0) {
            data[index].orderState = '待付款';
          } else if(data[index].orderState == 1) {
            data[index].orderState = '未发货';
          } else if(data[index].orderState == 2) {
            data[index].orderState = '已发货';
          } else if (data[index].orderState == 3) {
            data[index].orderState = '订单送达';
          } else if (data[index].orderState == 4) {
            data[index].orderState = '退货中';
          } else if (data[index].orderState == 5) {
            data[index].orderState = '退货成功';
          } else if (data[index].orderState == 6) {
            data[index].orderState = '订单取消';
          }
          index++;
        });
        that.setData({
          briefOrder: data
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

  },

  /* 跳转到详情页面 */
  todetail:function(event) {
    var id = JSON.stringify(event.currentTarget.dataset.id);
    wx.navigateTo({
      url: '/pages/transactionDetails/transactionDetails?prdid=' + id,
      success: function () { },    
      faile: function () { },          
      complete: function () { }
    })
  }
})