import Vue from 'vue'
import App from './App'
import './public/base.css'

import store from './store'
Vue.prototype.$store = store

import mixins from './common'
Vue.use(mixins)

import toyoCard from '@components/toyo-card'
import toyoRate from '@components/toyo-rate'
import toyoGoodnews from '@components/toyo-goodnews'
import toyoInterview from '@components/toyo-interview'
import toyoQuestions from '@components/toyo-questions'
import toyoSubject from '@components/toyo-subject'
import toyoNoinfo from '@components/toyo-noinfo'
import toyoAnswercard from '@components/toyo-answercard'
import toyoPopup from '@components/toyo-popup'
import toyoPoster from '@components/toyo-poster'
import toyoPoster2 from '@components/toyo-poster2'
Vue.component('toyoCard', toyoCard)
Vue.component('toyoRate', toyoRate)
Vue.component('toyoGoodnews', toyoGoodnews)
Vue.component('toyoInterview', toyoInterview)
Vue.component('toyoQuestions', toyoQuestions)
Vue.component('toyoNoinfo', toyoNoinfo)
Vue.component('toyoSubject', toyoSubject)
Vue.component('toyoAnswercard', toyoAnswercard)
Vue.component('toyoPopup', toyoPopup)
Vue.component('toyoPoster', toyoPoster)
Vue.component('toyoPoster2', toyoPoster2)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App,
  store
})
app.$mount()
