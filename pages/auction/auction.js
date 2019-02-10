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
        name:'首饰',
        style:'switch-left',
        slelected: false
      },
      {
        id: 'option_right',
        name: '花杂件',
        style: 'switch-right',
        slelected: false
      }
    ],
    selections:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      method: 'post',
      dataType: 'text',
      url: 'http://www.yucuifu.com/tomcat/supered/qryAuctionList',
      data: {
        autype: 0
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        var data = JSON.parse(res.data);
        console.log(res.data);
        that.setData({
          selections: data
        });
      },
      fail: function (res) {

      },
      complete: function (res) {

      }
    })

    wx.request({
      method: 'get',
      dataType: 'text',
      url: 'http://www.yucuifu.com/tomcat/supered/qryAuctionMenu',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        var menuoptions = JSON.parse(res.data);
        var options = that.data.options;
        if (menuoptions[0].status == '1') {
          options[0].name = menuoptions[0].optionone;
          options[1].name = menuoptions[0].optiontwo;
        }
        
        that.setData({
          options: options
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

  },

  /* 用户点击顶选择顶部选项 */
  selectOPt:function(event) {
    var that = this
    const selecteds = that.data.options;
    var selected = event.currentTarget.dataset.option;
    if (selected == 'option_left') {
      selecteds[1].selected = false;
      selecteds[0].selected = true;
      
      wx.request({
        method:'post',
        dataType:'text',
        url: 'http://www.yucuifu.com/tomcat/supered/qryAuctionList',
        data:{
          autype:0
        },
        header:{
          "Content-Type": "application/x-www-form-urlencoded" 
        },
        success:function(res) {
         var data = JSON.parse(res.data);
         that.setData({
           selections:data
         });
        },
        fail: function (res) {

        },
        complete: function (res) {

        }
      })
    } else {
      selecteds[0].selected = false;
      selecteds[1].selected = true;

      wx.request({
        method: 'post',
        dataType: 'text',
        url: 'http://www.yucuifu.com/tomcat/supered/qryAuctionList',
        data: {
          autype: 1
        },
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        success: function (res) {
          var data = JSON.parse(res.data);
          that.setData({
            selections: data
          });
        },
        fail: function (res) {

        },
        complete: function (res) {

        }
      })
    }
    that.setData({
      options:selecteds
    })
  },

  /* 点击跳转到拍卖详情页面 */
  toAuDtl:function(event) {
    var auid = event.currentTarget.dataset.id;
    console.log('auid可以获取吗' + auid);
    wx.navigateTo({
      url: '/pages/auctionDtl/auctionDtl?auid=' + auid,
      success:function(){},
      fail:function(){},
      complete:function(){}
    })
  }
})