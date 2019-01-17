// pages/shop/shop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      "http://i1.fuimg.com/650899/1bbbc93070dc7b9e.png",
      "http://i1.fuimg.com/650899/fc048a986c8358ee.png",
      "http://i1.fuimg.com/650899/be285a3ac5e93f81.png",
      "http://i1.fuimg.com/650899/938f55adb95091ba.png"
    ],
    indicatorDots: true,  //是否显示面板指示点
    autoplay: true,      //是否自动切换
    interval: 2000,       //自动切换时间间隔
    duration: 1000,       //滑动动画时长
    inputShowed: false,
    inputVal: "",

    //设置商城列表测试数据
    types:[
      {
        id:'index1',
        prdname:'我的',
        prdsimdes:'我的数据',
        prdprice:18.8,
        type:false
      },
      {
        id: 'index2',
        prdname: '信息',
        prdsimdes: '我的最爱一生中最爱的你',
        prdprice: 18.9,
        type: false
      },
      {
        id: 'index3',
        prdname: '数据',
        prdsimdes: '我的爱人',
        prdprice: 18.8,
        type: false
      },
      {
        id: 'index4',
        prdname: '丽霞',
        prdsimdes: '我的老婆',
        prdprice: 18.9,
        type: false
      },
      {
        id: 'index5',
        prdname: '丽霞',
        prdsimdes: '我的老婆',
        prdprice: 18.9,
        type: false
      },
      {
        id: 'index6',
        prdname: '丽霞',
        prdsimdes: '我的老婆',
        prdprice: 18.9,
        type: false
      }
    ],
    typelist: [
      {
        prdtype:'name'
      },
      {
        prdtype: 'name'
      },
      {
        prdtype: 'name'
      },
      {
        prdtype: 'name'
      },
      {
        prdtype: 'name'
      }
    ],
    secondTypes: [
      {
        id: 'index1',
        prdname: '我的',
        prdsimdes: '我的数据',
        prdprice: 18.8,
        type: false,
        style:true
      },
      {
        id: 'index2',
        prdname: '信息',
        prdsimdes: '我的最爱一生中最爱的你',
        prdprice: 18.9,
        type: false,
        style: true
      },
      {
        id: 'index3',
        prdname: '数据',
        prdsimdes: '我的爱人',
        prdprice: 18.8,
        type: false,
        style: true
      },
      {
        id: 'index4',
        prdname: '丽霞',
        prdsimdes: '我的老婆',
        prdprice: 18.9,
        type: false,
        style: true
      },
      {
        id: 'index5',
        prdname: '丽霞',
        prdsimdes: '我的老婆',
        prdprice: 18.9,
        type: false,
        style: true
      },
      {
        id: 'index6',
        prdname: '丽霞',
        prdsimdes: '我的老婆',
        prdprice: 18.9,
        type: false,
        style: true
      }
    ],
    count: 0,
    secondMenuStyle: false,
    threeTypes:[
      {
        prdname:'lixia'
      },
      {
        prdname: 'lixia'
      },
      {
        prdname: 'lixia'
      }
    ]
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('在页面加载中执行的,,,,');
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("data...");
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
    console.log('用户点击了分享');
  },

  /* 点击商品列表之后进行切换 只有一级菜单 最初版本 备份*/
  tapType:function(event) {
    var that = this
    var objid = event.currentTarget.dataset.id;
    const taps = that.data.types;
    var index = 0;
    taps.forEach(function() {
      if (taps[index].id == objid) {
        taps[index].type = true;
      } else {
        taps[index].type = false;
      }
      index++;
    });

    that.setData({
      types: taps
    });
  },

  /**
   * 设置二级菜单
   */
  showList: function (event) {
    var that = this
    var objid = event.currentTarget.dataset.id;
    console.log(objid);
    const taps = that.data.types;
    var count = that.data.count;
    var secondMenuStyle = that.data.secondMenuStyle;
    /* 设置用户点击切换子菜单的显示与否 */
    if (count % 2 == 0) {
      var index = 0;
      taps.forEach(function () {
        if (taps[index].id == objid) {
          taps[index].type = true;
          taps[index].style = true;
        } else {
          taps[index].type = false;
          taps[index].style = false;
        }
        index++;
      });
      secondMenuStyle = true;
    } else {
      var index = 0;
      taps.forEach(function () {
        if (taps[index].id == objid) {
          taps[index].type = true;
          taps[index].style = true;
        } else {
          taps[index].type = false;
          taps[index].style = true;
        }
        index++;
      });
      secondMenuStyle = false;
    }

    count++;

    that.setData({
      secondTypes:taps,
      count:count,
      secondMenuStyle: secondMenuStyle
    });
  }
})