// pages/futuretickets/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    price:38,
    chairnum: "3号厅-6FL9排13座",
    movietime:"07月02日 13:00",
    moviename:"3D肉蒲团之极乐宝鉴",
    postpath_ordered:"../../images/3d肉蒲团.png"
  },

  showticketorder: function () {
    wx.navigateTo({
      url: '../qrcode/qrcode',
    })
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
  
  }
})