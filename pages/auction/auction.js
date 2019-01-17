// pages/auction/auction.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    /* 初始化选择拍卖option数据 */
    options: [
      {
        id:'option_left',
        name:'捡漏项目1',
        style:'switch-left',
        slelected: false
      },
      {
        id: 'option_right',
        name: '捡漏项目2',
        style: 'switch-right',
        slelected: false
      }
    ],

    /* 初始化商品展示数据 */
    auctions:[
      {
        id:'index1',
        price:300,
        hot:169,
        auctiontype:'捡漏1'
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

  },

  /* 用户点击顶选择顶部选项 */
  selectOPt:function(event) {
    var that = this
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
      options:selecteds
    })
  },

  /* 点击跳转到拍卖详情页面 */
  toAuDtl:function(event) {
    wx.navigateTo({
      url: '/pages/auctionDtl/auctionDtl',
    })
  }
})