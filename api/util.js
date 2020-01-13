import { wxPromisify } from '../config'
const ajax = wxPromisify(uni.request)

const baseUrl = 'http://rap2api.taobao.org/app/mock/26810/'

const utils =  class {
  
  /**
   * 获取token
   */
  async _getToken() {
    const accessToken = uni.getStorageSync('accessToken')
    const visitorToken = uni.getStorageSync('visitorToken')

    if (accessToken) {
      return accessToken
    }
    if (visitorToken) {
      return visitorToken
    }

    const response = await ajax({
      method: 'GET',
      url: `${baseUrl}genera/init`
    })

    if (response.data.success) {
      const visitorToken = response.data.data.visitorToken
      uni.setStorageSync('visitorToken', visitorToken)
      return visitorToken
    }
  }
  
  /**
   *  处理head中的token传参格式
   * @returns {string}
   */
  async getCustomHeader() {
    const token = await this._getToken()

    const header = {
      'Content-Type': 'application/json;charset=UTF-8',
    }

    // accessToken -> 登录接口使用     visitorToken -> 其他接口使用

    const userId = uni.setStorageSync('userId') // 获取用户登录状态

    userId ? (header.accessToken = token || '') : (header.visitorToken = token || '')

    return header
  }

  /**
   * 获取timestamp
   */
  async getTimestamp() {

    const header = await this.getCustomHeader()

    const response = await ajax({
      method: 'GET',
      url: `${baseUrl}genera/times`,
      header,
    })

    if (response.data.success) {
      uni.setStorageSync('timestamp', new Date().getTime());
      uni.setStorageSync('aptimestamp', response.data.data.timestamp);

      return response.data.data.timestamp
    }
  }

}

export const Util = new utils()
