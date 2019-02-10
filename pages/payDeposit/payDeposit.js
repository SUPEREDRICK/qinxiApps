// pages/payDeposit/payDeposit.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    deposit:[
      {
        price:'1',
        body:'支付保证金'
      }
    ],
    payOrNot: 1
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

  /* 点击支付拍卖保证金 */
  topay:function(event) {
    var that = this
    var openid = wx.getStorageSync('user').openid;
  //   wx.request({
  //     url: 'http://localhost:8080/supered/qryDepositOrNot',
  //     data: {
  //       openid: openid
  //     },
  //     header: {
  //       "Content-Type": "application/x-www-form-urlencoded"
  //     },
  //     method: 'post',
  //     dataType: 'text',
  //     success:function(res) {
  //       console.log('保证金状态:' + res.data);
  //       var payOrNot = res.data;
  //       console.log('********' + payOrNot);
  //       that.setData({
  //         payOrNot: payOrNot
  //       });
  //     },
  //     fail:function(res) {

  //     }, 
  //     complete:function(res) {

  //     }
  //   });

  //  console.log('------->' + that.data.payOrNot);
  //  if(that.data.payOrNot == '1') {
  //    wx.showToast({
  //      title: '您已支付!',
  //      icon: 'success',
  //      duration: 2000
  //    });
  //    return;
  //  }

  //   console.log('保证金页面openid: ' + openid);

    wx.request({
      url: 'http://www.yucuifu.com/tomcat/supered/wechatPayServlet',
      data: {
        openid: openid,
        price: that.data.deposit[0].price,
        body: that.data.deposit[0].body
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'post',
      dataType: 'text',
      // responseType: 'text',
      success: function(res) {
        console.log('-----' + res.data);
        console.log(JSON.parse(res.data)[0].response);
        var param = JSON.parse(res.data)[0].response;
        // console.log(param);
        that.doWxPay(param);
      },
      fail: function(res) {},
      complete: function(res) {}
    })
  },
  doWxPay: function (param) {
    var that = this
    wx.requestPayment({
      timeStamp: param.timeStamp,
      nonceStr: param.nonceStr,
      package: param.package,
      signType: 'MD5',
      paySign: param.paySign,
      success: function(event) {
        /* 支付成功后修改数据库保证金金额 */
        var openid = wx.getStorageSync('user').openid;
        console.log('TEST.....' + that.data.deposit[0].price);
        wx.request({
          url: 'http://www.yucuifu.com/tomcat/supered/udtAuctionDeposit',
          data: {
            openid: openid,
            deposit: that.data.deposit[0].price
          },
          header: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          method: 'post',
          dataType: 'text',
          success:function(res) {
            console.log('修改表数据成功...');
          },
          fail:function(res) {
            console.log('修改表数据失败...');
          }, 
          complete:function(res) {
            console.log('update complete...');
          }
        })
        /* 提示用户端支付成功 */
        console.log(event);
        wx.showToast({
          title: '支付成功',
          icon: 'success',
          duration: 2000
        });
      },
      fail:function(event) {
        console.log("支付失败");
        console.log(error);
      }, 
      complete:function() {
        console.log('payment completed.');
      }
    })
  }
})