import { wxPromisify } from '../config'
const ajax = wxPromisify(uni.request)
const logins = wxPromisify(uni.login)
const showModals = wxPromisify(uni.showModal)
const authorizes = wxPromisify(uni.authorize)
const getImageInfos = wxPromisify(uni.getImageInfo)
const getUserInfos = wxPromisify(uni.getUserInfo)
const saveImageToPhotosAlbums = wxPromisify(uni.saveImageToPhotosAlbum)
const requestPayments = wxPromisify(uni.requestPayment)

const baseUrl = 'http://rap2api.taobao.org/app/mock/26810/'
let access_token = ''

const request = class {
  async get(url, params = '') {
    if (params) url += urlLoader(params)
    const header = { accessToken: getApp().globalData.access_token || '' }
    const { data } = await ajax({
      method: 'GET',
      url: `${baseUrl}${url}`,
      header
    })
    return data.data
  }
  async post(url, params = {}) {
    const header = { accessToken: getApp().globalData.access_token || '' }
    const { data } = await ajax({
      method: 'POST',
      url: `${baseUrl}${url}`,
      data: params,
      header
    })
    return data.data
  }
}
const utils = class {
  login() {
    return logins({ provider: 'weixin' })
  }
  showModal(object) {
    return showModals(object)
  }
  authorize(scope) {
    return authorizes({ scope })
  }
  getImageInfo(src) {
    return getImageInfos({ src })
  }
  saveImageToPhotosAlbum(filePath) {
    return saveImageToPhotosAlbums({ filePath })
  }
  getUserInfo() {
    return getUserInfos()
  }
  requestPayment(data) {
    return requestPayments(data)
  }
}
const urlLoader = data => `?${Object.keys(data).map(item => `${item}=${data[item]}`).join('&')}`
export const http = new request()
export const util = new utils()
