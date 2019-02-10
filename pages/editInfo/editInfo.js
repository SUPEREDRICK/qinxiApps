// pages/editInfo/editInfo.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    sex: [
      {
        id: 2,
        value: 'none',
        name: '请选择'
      }, 
      {
        id: 0, 
        value: '1',
        name: '男'
      }, 
      {
        id: 1,
        value: '0',
        name: '女'
      }
    ],
    index: 0,
    province:[],
    exchange:false,
    name:'',
    phonenum:'',
    birthday:'',
    province:'',
    email:'',
    selectedProvince:'',
    selectedPrvId:'',
    city:[],
    selectedcity:'',
    addr:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    /* 加载省份数据 */
    wx.request({
      method: 'post',
      dataType: 'text',
      url: 'http://www.yucuifu.com/tomcat/supered/qryProvince',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data:{
        id:JSON.stringify(0)
      },
      success:function(res) {
        var province = JSON.parse(res.data);
        that.setData({
          province:province
        });
      },
      fail:function(res) {
        console.log(res.data);
      },
      complete:function(res) {
        console.log(res.data);
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

  /* 用户点击提交修改按钮的样式切换和数据交互 */
  touchedstart:function() {
    var that = this
    that.setData({
      exchange: true
    });
  },

  /* 点击离开后进行数据提交 */
  touchedend:function() {
    /* 样式恢复 */
    var that = this
    that.setData({
      exchange:false
    });

    /* 提交之前获取省份数据 */
    

    /* 数据提交 */
    var phonenum = that.data.phonenum;
    var name = that.data.name;
    /* 获取性别int */
    var sexindex = that.data.index;
    var sex = that.data.sex[sexindex].id;
    var birthday = that.data.birthday;
    var province = that.data.selectedProvince;
    var city = that.data.selectedcity;
    var addr = that.data.addr;
    var email = that.data.email;
    wx.request({
      method: 'post',
      dataType: 'text',
      url: 'http://www.yucuifu.com/tomcat/supered/udtUserInfoServlet',
      data: {
        phonenum: phonenum,
        name: name,
        sex: sexindex,
        birthday: birthday,
        province: province,
        city: city,
        addr: addr,
        email: email,
        openid: 'supered1988'
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success:function(res) {
        wx.showToast({
          title: '成功',
          icon: 'succes',
          duration: 1000,
          mask: true
        });

        wx.switchTab({
          url: '/pages/index/index'
        });
      },
      fail:function(res) {
       
      },
      complete:function(res) {
        
      }
    });
  },

  /* 监听手机数据 */
  inputphonenum:function(event) {
    var that = this
    that.setData({
      phonenum: event.detail.value
    });
  },

  /* 监听姓名数据 */
  inputname:function(event) {
    var that = this
    that.setData({
      name:event.detail.value
    });
  },

  /* 监听性别数据 */
  inputsex:function(event) {
    var that = this
    let index = event.detail.value;
    console.log(index);
    this.setData({
      index: index
    })
  },

  /* 监听生日数据 */
  inputbirthday:function(event) {
    var that = this
    that.setData({
      birthday: event.detail.value
    });
  },

  /* 监听省份事件 */
  inputprovince:function(event) {
    var that = this
    var province = that.data.province;
    var index = event.detail.value;
    var selectedProvince = province[index].area_name;
    var selectedPrvId = province[index].id;
    console.log(selectedProvince);

    /* 获取选中省份id并传递到后台 */ 
    wx.request({
      method: 'post',
      dataType: 'text',
      url: 'http://www.yucuifu.com/tomcat/supered/qryProvince',
      data: {
        id: selectedPrvId
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        console.log(JSON.parse(res.data));
        var city = JSON.parse(res.data);
        that.setData({
          city: city
        });
      },
      fail: function () {

      },
      complete: function () {

      }
    });

    that.setData({
      selectedProvince: selectedProvince,
      selectedPrvId: selectedPrvId
    });
  },
  /* 监听城市数据 */
  inputcity:function(event) {
    var that = this
    var index = event.detail.value;
    var city = that.data.city;
    var selectedcity = city[index].area_name;
    that.setData({
      selectedcity: selectedcity
    });
  },
  /* 监听具体地址数据 */
  inputaddress:function(event) {
    var that = this
    var address = event.detail.value;
    that.setData({
      addr: address
    });
  },
  /* 监听邮箱地址数据 */
  inputemail:function(event) {
    var that = this
    console.log(event.detail.value);
    that.setData({
      email: event.detail.value
    });
  },

  /* 提交修改 */
})