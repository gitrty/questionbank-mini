import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // 1 - 面试题选择公司模块
    companyList: [
      // 所有公司 name:公司名  cur:选中状态
      { name: '全部', cur: false, all: 1 }
    ],
    selectNum: 0,

    // 面试题列表
    viewSuitList: [],

    // 考试中的标识
    signboard: '',

    // 2 - 用户登录状态
    userStatus: false,

    // userId
    userId:'' ,

    // 小程序授权code码
    code: '',

    // 用户绑定的邮箱
    email: '',

    exTitle: 'java',

    viewTitle: 'GPer第一届答题大赛'
  },
  mutations: {},
  actions: {}
})

export default store
