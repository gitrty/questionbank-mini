import {
  util
} from "@api/http";

export default {
  install(Vue) {
    Vue.mixin({
        methods: {
          // 跳转页面(保留当前页，跳转到指定页)
          jump(url, data = '') {
            const type = 'navigateTo'
            if (data) url += urlLoader(data)
            uni[type]({
              url
            });
          },
          // 关闭当前页，跳转到指定页
          redirectTo(url, data = '') {
            if (data) url += urlLoader(data)
            uni.redirectTo({
              url
            })
          },
          // 回退页面
          navigateBack(delta = 1) {
            uni.navigateBack({
              delta: delta
            });
          },
          async showModel() {
            const {
              confirm
            } = await util.showModal({
              title: "温馨提示",
              content: "是否跳转授权登录"
            });
            return confirm
          },
          async checkAuth() {
            if (!this.globalData.access_token) {
              if (await this.showModel()) return this.jump("/pages/arthorize/index");
              return;
            }
            return true
          },
          // 保存弹框
          showToast(title, icon = 'none') {
            uni.showToast({
              title,
              duration: 1000,
              icon
            });
          }
        }
      }),
      // 数字转化为周
      Vue.filter('numToWeek', val => {
        if (val === 0) return '日'
        if (val === 1) return '一'
        if (val === 2) return '二'
        if (val === 3) return '三'
        if (val === 4) return '四'
        if (val === 5) return '五'
        if (val === 6) return '六'
      }),
      // 数字转化为选择题选项
      Vue.filter('numToLetter', val => {
        if (val === 0) return 'A'
        if (val === 1) return 'B'
        if (val === 2) return 'C'
        if (val === 3) return 'D'
        if (val === 4) return 'E'
        if (val === 5) return 'F'
        if (val === 6) return 'G'
        if (val === 7) return 'H'
      }),
      // 文字超出部分显示省略号
      Vue.filter('ellipsis', (val, num) => val.length > num ? val.slice(0, num) + '...' : val)
  }
}
const urlLoader = data => `?${Object.keys(data).map(item => `${item}=${data[item]}`).join('&')}`
