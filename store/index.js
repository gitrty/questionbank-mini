import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // 1 - 面试题选择公司模块
    companyList: [
      // 所有公司 name:公司名  cur:选中状态
      { name: '全部', cur: false, all: 1 },
      { name: '腾讯科技', cur: false },
      { name: '阿里巴巴', cur: false },
      { name: '阿里巴巴', cur: false },
      { name: '腾讯科技', cur: false },
      { name: '腾讯科技', cur: false },
      { name: '阿里巴巴', cur: false },
      { name: '阿里巴巴', cur: false },
      { name: '腾讯科技', cur: false },
      { name: '阿里巴巴', cur: false },
      { name: '腾讯科技', cur: false }
    ],
    selectNum: 0,
    
    // 2 - 用户登录状态
    userStatus:false
  },
  mutations: {},
  actions: {}
})

export default store
