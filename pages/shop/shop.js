// pages/shop/shop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      "http://i2.tiimg.com/650899/220aefff6d9a8e42.png",
      "http://i2.tiimg.com/650899/d752aa6f204455df.png",
      "http://i2.tiimg.com/650899/a3b2141c4f91c7a4.jpg",
      "http://i2.tiimg.com/650899/257ee7b652a9cb21.png"
    ],
    indicatorDots: true,  //是否显示面板指示点
    autoplay: true,      //是否自动切换
    interval: 2000,       //自动切换时间间隔
    duration: 1000,       //滑动动画时长
    inputShowed: false,
    inputVal: "",
    typelist: [
      {
        prdtype:'name',
        addr:'http://i2.tiimg.com/650899/423eac85f97205df.png'
      },
      {
        prdtype: 'name',
        addr: 'http://i1.fuimg.com/650899/6310d42c9861d9c7.png'
      },
      {
        prdtype: 'name',
        addr: 'http://i2.tiimg.com/650899/cfecce00a95b5540.png'
      },
      {
        prdtype: 'name',
        addr: 'http://i2.tiimg.com/650899/86f3f1e5e183a296.jpg'
      },
      {
        prdtype: 'name',
        addr: 'http://i2.tiimg.com/650899/44cded64ed9d4d29.png'
      }
    ],
    count: 0,
    secondMenuStyle: false,
    threeTypes:[
      {
        id:'index1',
        prdname:'lixia',
        type:false
      },
      {
        id:'index2',
        prdname: 'lixia',
        type: false
      },
      {
        id:'index3',
        prdname: 'lixia',
        type: false
      }
    ],
    firstMenu:[],
    secondMenuAll:[],
    secondMenu:[],
    thirdMenu:[]
  },
  
  /**
   * 生命周期函数--监听页面加载-加载1.加载Banner 2.加载横向活动模块 3.一二级菜单数据-产品类型+次产品类型
   */
  onLoad: function (options) {
    var that = this

    /* 加载横向滑动模块 */
    

    /* 3.一级菜单数据-产品类型 */
    wx.request({
      url: 'http://www.yucuifu.com/tomcat/supered/qryPrdType',
      method:'get',
      dataType:'text',
      success:function(res) {
        const prdTypes = JSON.parse(res.data);
        var index = 0;
        const firstMenu = [];
        prdTypes.forEach(function() {
          firstMenu.push({
            typeid: prdTypes[index].typeid,
            typename: prdTypes[index].typename,
            // size:prdTypes[index].size,
            // prddes: prdTypes[index].prddes,
            // prdname: prdTypes[index].prdname,
            // price: prdTypes[index].price,
            type: false,
            style: true
          });
          index++;
        });

        that.setData({
          firstMenu: firstMenu
        })
      },
      fail:function(res) {

      },
      complete:function(res) {

      }
    });

    /* 加载二级菜单 */
    wx.request({
      url: 'http://www.yucuifu.com/tomcat/supered/qrySecondMenu',
      method: 'get',
      dataType: 'text',
      success:function(res) {
        var data = JSON.parse(res.data);
        var index = 0;
        var secondMenuAll = [];
        data.forEach(function() {
          secondMenuAll.push({
            typeid:data[index].typeid,
            typename: data[index].typename,
            prdid: data[index].prdid,
            prdname: data[index].prdname,
            size: data[index].size,
            picaddr: data[index].picaddr,
            prddes: data[index].prddes,
            price: data[index].price,
            type: false
          });
          index++;
        }); 
        that.setData({
          secondMenuAll: secondMenuAll
        });
      },
      fail:function(res) {
        
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
   * 
   */
  showList_bak: function (event) {
    var that = this
    var typeid = event.currentTarget.dataset.id;
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
  },

  /* 一级菜单点击绑定 */
  showList:function(event) {
    var that = this
    var id = event.currentTarget.dataset.id;
    console.log(id);
    var firstMenu = that.data.firstMenu;
    var count = that.data.count;
    var secondMenuStyle = that.data.secondMenuStyle;
    if(count % 2 == 0) {
      var index = 0;
      firstMenu.forEach(function () {
        if (id == firstMenu[index].typeid) {
          firstMenu[index].type = true;
          firstMenu[index].style = true;
        } else {
          firstMenu[index].type = false;
          firstMenu[index].style = false;
        }
        index++;
      });
      secondMenuStyle = true;
    } else {
      var index = 0;
      firstMenu.forEach(function () {
        if (id == firstMenu[index].typeid) {
          firstMenu[index].type = true;
          firstMenu[index].style = true;
        } else {
          firstMenu[index].type = false;
          firstMenu[index].style = true;
        }
        index++;
      });
      secondMenuStyle = false;
    }
    count++;
    that.setData({
      firstMenu: firstMenu,
      count: count,
      secondMenuStyle: secondMenuStyle
    });

    //二级菜单数据展示问题
    var data = that.data.secondMenuAll;
    console.log('------*****' + data);
    var index = 0;
    const secondMenu = [];
    data.forEach(function() {
      if (id == data[index].typeid) {
        secondMenu.push({
          prdid: data[index].prdid,
          size: data[index].size,
          type: data[index].type
        });
      }
      index++;
    });

    that.setData({
      secondMenu: secondMenu
    });
  },

  /* 二级菜单点击事件 */
  secondHandel:function(event) {
    var that = this
    var prdid = event.currentTarget.dataset.prdid;
    var data = that.data.secondMenu;
    var index = 0;
    //样式控制:用户点击选中某个选项并标记出来...
    data.forEach(function() {
      if (prdid == data[index].prdid) {
        data[index].type = true;
      } else {
        data[index].type = false;
      }
      index++;
    });

    that.setData({
      secondMenu: data
    });

    //展示对应的产品数据
    index = 0;
    data = that.data.secondMenuAll;
    const thirdMenu = [];
    data.forEach(function() {
      if (prdid == data[index].prdid) {
        thirdMenu.push({
          prdid: data[index].prdid,
          prdname: data[index].prdname,
          prddes:data[index].prddes,
          picaddr: data[index].picaddr,
          price: data[index].price
        });
      }
      index++;
    });

    that.setData({
      thirdMenu: thirdMenu
    });
  },

  /* 三级菜单-商品列表点击跳转&页面数据传递 */
  threeMenuHandel:function(event) {
    var prdid = event.currentTarget.dataset.id;
  }
})