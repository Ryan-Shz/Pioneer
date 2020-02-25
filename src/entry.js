/* global Vue */
/* weex initialized here, please do not move this line */
// 以下代码也可以使用 import {router} from './router' 来导入
const { router } = require('./router')
const App = require('@/index.vue')
const mixins = require('@/mixins')
Vue.mixin(mixins);
/* eslint-disable no-new */
new Vue(Vue.util.extend({ el: '#root', router }, App))
router.push('/home')
