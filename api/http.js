import { wxPromisify } from '../config'
const ajax = wxPromisify(uni.request)
const logins = wxPromisify(uni.login)
const showModals = wxPromisify(uni.showModal)
const authorizes = wxPromisify(uni.authorize)
const getImageInfos = wxPromisify(uni.getImageInfo)
const getUserInfos = wxPromisify(uni.getUserInfo)
const saveImageToPhotosAlbums = wxPromisify(uni.saveImageToPhotosAlbum)
const requestPayments = wxPromisify(uni.requestPayment)

import { Util } from './util'

// 测试环境
const baseUrl = 'http://192.168.8.122:19001/'

// const baseUrl = 'http://rap2api.taobao.org/app/mock/26810/'
// let access_token = ''

const request = class {

  // 1 - get 请求
  async get(url, params = {}) {
    let appKey = ''
    let appSecret = ''
    // 获取时间戳
    const timestamp = await Util.getTimestamp()

    // 拼接 appKey 和 appSecret
    Object.entries(params).forEach(([key, value], index) => {
      appKey += key + '-'
      appSecret += key + value
    });

    const accessToken = await Util._getToken()
    const mds = Util.strToBinary(appKey.slice(0, appKey.length - 1))
    const mds2 = Util.strToBinary(timestamp + appSecret + accessToken)

    params.appKey = mds
    params.appSecret = mds2
    params.timestamp = timestamp
    params.rand = Util.uuid()
    // console.info(params)

    url += urlLoader(params)
    // console.info(url)

    const header = await Util.getCustomHeader()

    const { data } = await ajax({
      method: 'GET',
      url: `${baseUrl}${url}`,
      header
    })
    return data.data
  }


  // 2 - post 请求
  async post(url, params = {}) {
    let appKey = ''
    let appSecret = ''

    // 获取时间戳
    const timestamp = await Util.getTimestamp()

    // 拼接 appKey 和 appSecret
    Object.entries(params).forEach(([key, value], index) => {
      appKey += key.toString() + '-'
      appSecret += key.toString() + value.toString()
    });

    const accessToken = await Util._getToken()
    const mds = Util.strToBinary(appKey.slice(0, appKey.length - 1))
    const mds2 = Util.strToBinary(timestamp + appSecret + accessToken)

    params.appKey = mds
    params.appSecret = mds2
    params.timestamp = timestamp
    params.rand = Util.uuid()
    // console.info(params)

    const header = await Util.getCustomHeader()

    const { data } = await ajax({
      method: 'POST',
      url: `${baseUrl}${url}`,
      data: params,
      header
    })
    return data.data
  }

  // 3 - post请求 传参序列化 : 使用application / x-www-form-urlencoded格式
  async postAplt(url, params = {}) {
    let appKey = ''
    let appSecret = ''

    // 获取时间戳
    const timestamp = await Util.getTimestamp()

    // 拼接 appKey 和 appSecret
    Object.entries(params).forEach(([key, value], index) => {
      appKey += key.toString() + '-'
      appSecret += key.toString() + value.toString()
    });

    const accessToken = await Util._getToken()
    const mds = Util.strToBinary(appKey.slice(0, appKey.length - 1))
    const mds2 = Util.strToBinary(timestamp + appSecret + accessToken)

    params.appKey = mds
    params.appSecret = mds2
    params.timestamp = timestamp
    params.rand = Util.uuid()

    let header = null
    if (uni.getStorageSync('accessToken')) {
      header = {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'accessToken': accessToken
      }
    } else {
      header = {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'visitorToken': accessToken
      }
    }

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
