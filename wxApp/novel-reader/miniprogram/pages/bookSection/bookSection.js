// miniprogram/pages/bookSection/bookSection.js
const db = wx.cloud.database()
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bookDetailData: {},
    lastData: [],
    pageData: [],
    page: 1, //当前页
    pageArray: [],
    pre: '',
    next: '',
    preAble: false,
    nextAble: false
  },

  getSection(url) {
    wx.showLoading({
      title: '正在加载',
    })
    wx.cloud.callFunction({
      name: 'bookSection',
      data: {
        url: url
      }
    }).then(res => {
       console.log(res)
      wx.hideLoading()
      const { result } = res
      this.setData({
        bookDetailData: result.bookDetailData,
        lastData: result.lastData,
        pageData: result.pageData,
        pageArray: result.pageArray,
        next: result.next,
        pre: result.pre,
        preAble: result.pre === '' ? true : false,
        nextAble: result.next === '' ? true : false,
        page: (result.next.split('/')[2]) - 1

      })
    })
  },

  //上一页
  prePage() {
    if (this.data.preAble) return
    this.getSection(this.data.pre)
  },
  nextPage() {
    if (this.data.nextAble) return
    this.getSection(this.data.next)
  },
  bindPickerChange(e) {
    let page = parseInt(e.detail.value)
    // console.log(e);
    if (page !== this.page) {
      this.setData({
        page: page + 1
      })
      this.getSection(this.data.pageArray[page].name)

    }

  },
  //去看小说
  navtoUrl(e) {
    let url = e.currentTarget.dataset.url
    //已经存在书架的书，记录阅读状态
    if (url) {
      db.collection('book').where({
        userId: app.globalData.openid,
        bookName: this.data.bookDetailData.name
      }).get().then(res => {
        let data = res.data || []
        if (data.length > 0) {
          if (data[0].bookUrl != url) {
            const id = data[0]._id || '';
            db.collection('book').doc(id).update({
              data: {
                bookUrl: url
              }
            }).then(res => {
              console.log(res)
            })
          }
        }
      })
    }
    wx.navigateTo({
      url: `../bookContent/bookContent?url=${url}&name=${this.data.bookDetailData.name}&imgUrl=${this.data.bookDetailData.imgUrl}`
    })
  },
  joinBook(e) {
    let url = e.currentTarget.dataset.url

    db.collection('book').where({
      userId: app.globalData.openid,
      bookName: this.data.bookDetailData.name
    }).get().then(res => {
      const data = res.data[0] || []
      if (data.length == 0) {//没有加入过书架
        db.collection('book').add({
          data: {
            userId: app.globalData.openid,
            bookName: this.data.bookDetailData.name,
            bookUrl: url,
            imgUrl: this.data.bookDetailData.imgUrl
          }
        }).then(res => {
          console.log(res);
          wx.showToast({
            icon: 'success',
            title: '加入成功',
          }, 3000)
        })
      } else {
        wx.showToast({
          icon: 'none',
          title: '本书已在书架，请到书架阅读',
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    const { url } = options
    this.getSection(url)
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