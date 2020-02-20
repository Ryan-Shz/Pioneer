import Vue from 'vue'
import weex from 'weex-vue-render'
/* global Vue */
// 导入vuex的store对象，在Vue实例中全局注入
import store from '@/store'
weex.init(Vue)
/* weex initialized here, please do not move this line */
const { router } = require('./router')
const App = require('@/index.vue')
const mixins = require('@/mixins')
Vue.mixin(mixins);
/* eslint-disable no-new */
new Vue(Vue.util.extend({ el: '#root', router, store }, App))
router.push('/home')
