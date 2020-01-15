import { http } from '../http'

export default {
  // 调用接口通过登录凭证（code）换取用户登录态信息
  wxLogin: data => http.get(`wechat/wxLogin`, data),

  // 微信小程序绑定
  wxBinding: data => http.get(`wechat/wxBinding`, data),

  // 注册
  register: data => http.postAplt(`auth/register`, data),
}
