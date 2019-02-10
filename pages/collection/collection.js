// pages/collection/collection.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    /* 初始化选择拍卖option数据 */
    options: [
      {
        id: 'option_left',
        name: '商城收藏',
        style: 'switch-left',
        slelected: false
      },
      {
        id: 'option_right',
        name: '团购收藏',
        style: 'switch-right',
        slelected: false
      }
    ],

    /* 初始化商品展示数据 */
    auctions: [
      {
        id: 'index1',
        price: 300,
        hot: 169,
        auctiontype: '捡漏1'
      },
      {
        id: 'index2',
        price: 300,
        hot: 169,
        auctiontype: '捡漏2'
      },
      {
        id: 'index1',
        price: 300,
        hot: 169,
        auctiontype: '捡漏1'
      },
      {
        id: 'index2',
        price: 300,
        hot: 169,
        auctiontype: '捡漏2'
      },
      {
        id: 'index1',
        price: 300,
        hot: 169,
        auctiontype: '捡漏1'
      },
      {
        id: 'index2',
        price: 300,
        hot: 169,
        auctiontype: '捡漏2'
      },
      {
        id: 'index1',
        price: 300,
        hot: 169,
        auctiontype: '捡漏1'
      },
      {
        id: 'index2',
        price: 300,
        hot: 169,
        auctiontype: '捡漏2'
      },
      {
        id: 'index1',
        price: 300,
        hot: 169,
        auctiontype: '捡漏1'
      },
      {
        id: 'index2',
        price: 300,
        hot: 169,
        auctiontype: '捡漏2'
      },
      {
        id: 'index1',
        price: 300,
        hot: 169,
        auctiontype: '捡漏1'
      },
      {
        id: 'index2',
        price: 300,
        hot: 169,
        auctiontype: '捡漏2'
      },
      {
        id: 'index1',
        price: 300,
        hot: 169,
        auctiontype: '捡漏1'
      },
      {
        id: 'index2',
        price: 300,
        hot: 169,
        auctiontype: '捡漏2'
      },
      {
        id: 'index1',
        price: 300,
        hot: 169,
        auctiontype: '捡漏1'
      },
      {
        id: 'index2',
        price: 300,
        hot: 169,
        auctiontype: '捡漏2'
      },
      {
        id: 'index1',
        price: 300,
        hot: 169,
        auctiontype: '捡漏1'
      },
      {
        id: 'index2',
        price: 300,
        hot: 169,
        auctiontype: '捡漏2'
      },
      {
        id: 'index1',
        price: 300,
        hot: 169,
        auctiontype: '捡漏1'
      },
      {
        id: 'index2',
        price: 300,
        hot: 169,
        auctiontype: '捡漏2'
      }
    ],
    collection:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var openid = wx.getStorageSync('user').openid;
    wx.request({
      url: 'http://www.yucuifu.com/tomcat/supered/qryCollection',
      data: {
        openid: openid,
        option: 'shop'
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'post',
      dataType: 'text',
      success: function (res) {
        var collection = JSON.parse(res.data);
        that.setData({
          collection:collection
        });
      },
      fail: function (res) {},
      complete: function (res) {}
    });
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
  
  /* 用户点击顶选择顶部选项 */
  selectOPt: function (event) {
    var that = this
    /* 样式·切换 */
    const selecteds = that.data.options;
    var selected = event.currentTarget.dataset.option;
    if (selected == 'option_left') {
      selecteds[1].selected = false;
      selecteds[0].selected = true;
    } else {
      selecteds[0].selected = false;
      selecteds[1].selected = true;
    }
    that.setData({
      options: selecteds
    });
    
    /* 数据渲染 */
    var openid = wx.getStorageSync('user').openid;
    if (selected == 'option_left') {
      wx.request({
        url: 'http://www.yucuifu.com/tomcat/supered/qryCollection',
        data: {
          openid: openid,
          option: 'shop'
        },
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: 'post',
        dataType: 'text',
        success: function (res) {
          var collection = JSON.parse(res.data);
          that.setData({
            collection: collection
          });
        },
        fail: function (res) { },
        complete: function (res) { }
      });
    } else if(selected == 'option_right') {
      wx.request({
        url: 'http://www.yucuifu.com/tomcat/supered/qryCollection',
        data: {
          openid: openid,
          option: 'auction'
        },
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: 'post',
        dataType: 'text',
        success: function (res) {
          var collection = JSON.parse(res.data);
          that.setData({
            collection: collection
          });
        },
        fail: function (res) {},
        complete: function (res) {}
      });
    }
  },
  /* 用户点击跳转到商品详情页面 */
  toAuDtl: function(event) {
     var prdid = event.currentTarget.dataset.id;
     var collectiontype = event.currentTarget.dataset.type;
    if (collectiontype == 'shop') {
      wx.navigateTo({
        url: '/pages/shopdtl/shopdtl?id=' + prdid,
        success:function() {},
        fail:function() {},
        complete: function() {}
      })
    } else if(collectiontype == 'auction') {
      wx.navigateTo({
        url: '/pages/auctionDtl/auctionDtl?auid=' + prdid,
        success: function () { },
        fail: function () { },
        complete: function () {}
      })
    }
  }
})